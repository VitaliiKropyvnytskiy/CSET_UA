import { Component, OnInit } from '@angular/core';
import { DemographicIodService } from '../../../../services/demographic-iod.service';
import { DemographicsIod } from '../../../../models/demographics-iod.model';

@Component({
  selector: 'app-demographics-iod',
  templateUrl: './demographics-iod.component.html',
  styleUrls: ['./demographics-iod.component.scss']
})
export class DemographicsIodComponent implements OnInit {
  /**
   * The principal model for this page
   */
  demographicData: DemographicsIod = {
    organizationType: 0,
    sector: 0,
    subsector: 0,
    mainServiceType: 0,
    numberEmployeesTotal: 0,
    numberEmployeesUnit: 0,
    annualRevenue: 0,
    criticalServiceRevenuePercent: 0,
    numberPeopleServedByCritSvc: 0,
    disruptedSector1: 0,
    disruptedSector2: 0
  };
  selectedSectoralBody: string = "";

  constructor(public demoSvc: DemographicIodService) { }

  /**
   *
   */
  ngOnInit() {
    this.demoSvc.getDemographics().subscribe((data: any) => {
      this.demographicData = data;
      if (this.demographicData.sector) {
        this.selectedSectoralBody = this.demographicData.listSectors.find(sl => sl.optionValue == this.demographicData.sector).additionalText
      }
    });
  }

  /**
   *
   */
  onChangeSector(evt: any) {
    this.demographicData.subsector = 0;
    this.demographicData.mainServiceType = 0;
    this.selectedSectoralBody = "";
    this.updateDemographics();
    if (this.demographicData.sector && this.demographicData.sector != 0) {
      this.selectedSectoralBody = this.demographicData.listSectors.find(sl => sl.optionValue == this.demographicData.sector).additionalText

      this.demoSvc.getSubsectors(this.demographicData.sector).subscribe((data: any[]) => {
        this.demographicData.listSubsectors = data;
      });

      this.demoSvc.getMainServiceTypes(this.demographicData.sector, null).subscribe((data: any[]) => {
        this.demographicData.listMainServiceTypes = data;
      });
    }
  }

  onChangeSubsector(evt: any) {
    this.demographicData.mainServiceType = 0;
    this.updateDemographics();
    if (this.demographicData.subsector && this.demographicData.subsector != 0) {
      this.demoSvc.getMainServiceTypes(null, this.demographicData.subsector).subscribe((data: any[]) => {
        this.demographicData.listMainServiceTypes = data;
      });
    }
  }

  changeUsesStandard(val: boolean) {
    this.demographicData.usesStandard = val;
    this.updateDemographics();
  }

  setRequireComply(val: boolean) {
    this.demographicData.requiredToComply = val;
    this.updateDemographics();
  }

  changeRegType1(o: any, evt: any) {
    this.demographicData.regulationType1 = o.optionValue;
    this.updateDemographics();
  }

  changeRegType2(o: any, evt: any) {
    this.demographicData.regulationType2 = o.optionValue;
    this.updateDemographics();
  }

  changeShareOrg(org: any, evt: any) {
    org.selected = evt.target.checked;
    if (org.selected) {
      this.demographicData.shareOrgs.push(org.optionValue);
    } else {
      this.demographicData.shareOrgs.splice(this.demographicData.shareOrgs.indexOf(org.optionValue, 0), 1);
    }
    this.updateDemographics();
  }

  isSharedOrgChecked(org): boolean {
    return this.demographicData.shareOrgs.includes(org.optionValue);
  }

  update(event: any) {
    this.updateDemographics();
  }

  updateDemographics() {
    this.demoSvc.updateDemographic(this.demographicData);
  }
}
