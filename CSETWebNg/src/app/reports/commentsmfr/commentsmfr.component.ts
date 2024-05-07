////////////////////////////////
//
//   Copyright 2023 Battelle Energy Alliance, LLC
//
//  Permission is hereby granted, free of charge, to any person obtaining a copy
//  of this software and associated documentation files (the "Software"), to deal
//  in the Software without restriction, including without limitation the rights
//  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//  copies of the Software, and to permit persons to whom the Software is
//  furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in all
//  copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//  SOFTWARE.
//
////////////////////////////////
import { Component, OnInit } from '@angular/core';
import { ReportAnalysisService } from '../../services/report-analysis.service';
import { ReportService } from '../../services/report.service';
import { QuestionsService } from '../../services/questions.service';
import { ConfigService } from '../../services/config.service';
import { Title } from '@angular/platform-browser';
import { MaturityService } from '../../services/maturity.service';
import { AssessmentService } from '../../services/assessment.service';

@Component({
  selector: 'app-commentsmfr',
  templateUrl: './commentsmfr.component.html',
  styleUrls: ['../reports.scss', '../acet-reports.scss']
})
export class CommentsMfrComponent implements OnInit {
  response: any = null;
  remarks: string;

  loading: boolean = false;

  questionAliasSingular: string;

  /**
   * 
   */
  constructor(
    public analysisSvc: ReportAnalysisService,
    public assessSvc: AssessmentService,
    public reportSvc: ReportService,
    public questionsSvc: QuestionsService,
    public configSvc: ConfigService,
    private titleService: Title,
    public maturitySvc: MaturityService
  ) { }

  /**
   * 
   */
  ngOnInit(): void {
    this.loading = true;
    this.titleService.setTitle("Коментарі та потребує огляду - Оглядовий звіт");

    this.maturitySvc.getCommentsMarked().subscribe(
      (r: any) => {
        this.response = r;

        // until we define a singular version in the maturity model database table, just remove (hopefully) the last 's'
        this.questionAliasSingular = this.response?.information.questionsAlias.slice(0, -1);
        this.loading = false;
      },
      error => console.log('Comments Marked Report Error: ' + (<Error>error).message)
    );

    this.assessSvc.getOtherRemarks().subscribe((resp: any) => {
      this.remarks = resp;
    });
  }

  getQuestion(q) {
    return q;
    // return q.split(/(?<=^\S+)\s/)[1];
  }
  
  saveReport() {
    window.open('/index.html?returnPath=PDF', '_blank');
  }

  printReport() {
    window.print();
  }
}
