//////////////////////////////// 
// 
//   Copyright 2023 Battelle Energy Alliance, LLC  
// 
// 
//////////////////////////////// 
using System.Collections.Generic;

namespace CSETWebCore.Api.Interfaces
{
    public interface ICSETGlobalProperties
    {
        string CSETFolder { get; }
        string MyAssessmentsFolder { get; }
        string ProfileFolder { get; }
        string ReportsFolder { get; }
        string DataDirectoryPath { set; get; }
        string ReportsTempTopDirectory { get; }
        string AssessmentTemplateLogFilePath { get; }
        string AssessmentTemplateFilePath { get; }
        string AggregationDataDirectoryPath { get; }
        string AggregationAssessmentPath { get; }
        string AggregationAssessmentMergePath { get; }
        string AggregationTemplateFilePath { get; }
        string Compare_Executive_Summary_Template { get; }
        string Trend_Executive_Summary_Template { get; }
        string Main_Executive_Summary_Template { get; }
        string Last_Aggregation_Name { get; set; }
        string Last_Aggregation_File_Path { get; set; }
        string Last_Assessment_File_Path { get; set; }
        string Last_Assessment_Name { get; set; }
        string ControlDatabaseFilePath { get; }
        string ControlDatabaseTempDirectory { get; }
        string ControlDatabaseLogFilePath { get; }
        string ExtractedAssessmentMergePath { get; }
        string Application_Path { get; }
        string ReportsAggregationTempDirectory { get; }
        int DiagramAutoSaveTimeInterval { get; }
        bool IsUnsupported { get; set; }

        double FontSize { get; set; }
        bool InternalPDF { get; set; }

        List<int> Active_Maturity_Models { get; }
        List<string> Active_Sets { get; }

        string GetProfileFullPath(string profileFileName);
    }
}