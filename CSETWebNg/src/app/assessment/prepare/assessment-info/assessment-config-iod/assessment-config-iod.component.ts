import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../../../../services/assessment.service';
import { DemographicService } from '../../../../services/demographic.service';
import { ConfigService } from '../../../../services/config.service';
import { DemographicIodService } from '../../../../services/demographic-iod.service';
import { DemographicsIod } from '../../../../models/demographics-iod.model';
import { AssessmentContactsResponse, AssessmentDetail } from '../../../../models/assessment-info.model';
import { User } from '../../../../models/user.model';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';

@Component({
  selector: 'app-assessment-config-iod',
  templateUrl: './assessment-config-iod.component.html',
  styleUrls: ['./assessment-config-iod.component.scss'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'uk'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class AssessmentConfigIodComponent implements OnInit {
  iodDemographics: DemographicsIod = {};
  demographics: any = {};
  contacts: User[];
  assessment: AssessmentDetail = {};
  minDate: Date;

  constructor(
    private assessSvc: AssessmentService,
    private demoSvc: DemographicService,
    private iodDemoSvc: DemographicIodService,
    private configSvc: ConfigService
  ) {}

  ngOnInit() {
    this.minDate = new Date();
    this.demoSvc.getDemographic().subscribe((data: any) => {
      this.demographics = data;
    });

    this.iodDemoSvc.getDemographics().subscribe((data: any) => {
      this.iodDemographics = data;
      this.refreshContacts();
    });

    this.getAssessmentDetail();
  }

  /**
   * Called every time this page is loaded.
   */
  getAssessmentDetail() {
    this.assessment = this.assessSvc.assessment;

    // a few things for a brand new assessment
    if (this.assessSvc.isBrandNew) {
      // RRA install presets the maturity model
      if (this.configSvc.installationMode === 'RRA') {
        this.assessSvc.setRraDefaults();
        this.assessSvc.updateAssessmentDetails(this.assessment);
      }
    }

    this.assessSvc.isBrandNew = false;
    // Null out a 'low date' so that we display a blank
    const assessDate: Date = new Date(this.assessment.assessmentDate);
    if (assessDate.getFullYear() <= 1900) {
      this.assessment.assessmentDate = null;
    }
  }

  /**
   *
   */
  update(e) {
    // default Assessment Name if it is left empty
    if (this.assessment) {
      if (this.assessment.assessmentName.trim().length === 0) {
        this.assessment.assessmentName = '(Оцінювання без назви)';
      }
    }
    this.assessSvc.updateAssessmentDetails(this.assessment);
  }

  changeCriticalService(evt: any) {
    this.demographics.criticalServiceName = evt.target.value;
    this.updateDemographics();
  }

  changePointOfContact(evt: any) {
    this.updateDemographics();
  }

  updateDemographics() {
    this.demoSvc.updateDemographic(this.demographics);
  }

  updateIodDemographics() {
    this.iodDemoSvc.updateDemographic(this.iodDemographics);
  }

  refreshContacts() {
    if (this.assessSvc.id()) {
      this.assessSvc.getAssessmentContacts().then((data: AssessmentContactsResponse) => {
        this.contacts = data.contactList;
      });
    }
  }

  /**
   * Some fields are only intended to be shown for
   * certain assessment/modules.
   */
  // I don't think this check is needed since we are only showing this page in IOD mode (unless we only want to show for certain models within IOD mode)
  // isTargetModule(): boolean {
  //   return (['CRR', 'EDM', 'CIS', 'RRA', 'IMR', 'CPG', 'MVRA'].includes(this.assessmentSvc.assessment.maturityModel.modelName))
  //   && this.configSvc.installationMode === 'IOD';
  // }
}
