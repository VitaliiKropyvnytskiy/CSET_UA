using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using CSETWebCore.Constants;
using CSETWebCore.DataLayer.Model;
using CSETWebCore.Model.Assessment;
using CSETWebCore.Model.CisaAssessorWorkflow;
using CSETWebCore.Model.Demographic;

namespace CSETWebCore.Business.Demographic
{
    public class CisaAssessorWorkflowFieldValidator
    {
        private Demographics _demographics;
        private DemographicExt _demographicExt;
        private CisServiceDemographics _cisServiceDemographics;
        private CisServiceComposition _cisServiceComposition;
        private CSETContext _context;

        public CisaAssessorWorkflowFieldValidator(Demographics demographics, DemographicExt demographicExt, CisServiceDemographics cisServiceDemographics, CisServiceComposition cisServiceComposition, CSETContext context)
        {
            _demographics = demographics;
            _demographicExt = demographicExt;
            _cisServiceDemographics = cisServiceDemographics;
            _cisServiceComposition = cisServiceComposition;
            _context = context;
        }

        /// <summary>
        /// I don't like manually validating these fields, but using data annotations was not sufficient
        /// for the complexity of the validation and allowing for null values
        /// </summary>
        /// <returns></returns>
        public CisaWorkflowFieldValidationResponse ValidateFields()
        {
            List<string> invalidFields = new List<string>();
            bool isValid = true;
            bool useStandard = _context.ASSESSMENTS.Where(a => a.Assessment_Id == _demographicExt.AssessmentId)
                .Select(a => a.UseStandard)
                .FirstOrDefault();
            //--------------------------------
            // _demographics validation
            //--------------------------------
            PropertyInfo[] demoProperties = typeof(Demographics).GetProperties();
            // We only need to make sure that the critical service is not null in base demographics object
            var criticalService = demoProperties.Where(p => p.Name.Equals("CriticalService")).FirstOrDefault();
            if (string.IsNullOrWhiteSpace((string)criticalService.GetValue(_demographics)))
            {
                invalidFields.Add("Критична служба");
            }

            //--------------------------------
            // _demographicsExt validation
            //--------------------------------
            PropertyInfo[] demoExtProperties = typeof(DemographicExt).GetProperties();
            foreach (PropertyInfo property in demoExtProperties)
            {
                if (property.Name.StartsWith("List") || property.Name.StartsWith("Subsector") || property.Name.StartsWith("MainServiceType"))
                {
                    continue;
                }

                if (property.Name.StartsWith("Standard") && !_demographicExt.UsesStandard)
                {
                    continue;
                }

                if (property.Name.StartsWith("RegulationType") && !_demographicExt.RequiredToComply)
                {
                    continue;
                }


                if (property.Name.Equals("Reg1Other") || property.Name.Equals("Reg2Other"))
                {
                    continue;
                }

                if (property.Name.StartsWith("Share"))
                {
                    continue;
                }

                if (property.PropertyType == typeof(string) && string.IsNullOrWhiteSpace((string)property.GetValue(_demographicExt)))
                {

                    invalidFields.Add(TranslatedProperties.PropertyNames[property.Name]);
                    continue;
                }

                if (property.PropertyType == typeof(int?) && (int?)property.GetValue(_demographicExt) == 0)
                {
                    invalidFields.Add(TranslatedProperties.PropertyNames[property.Name]);
                    continue;
                }

                if (property.GetValue(_demographicExt) == null)
                {
                    invalidFields.Add(TranslatedProperties.PropertyNames[property.Name]);
                }
            }

            //--------------------------------
            // _cisServiceDemographics validation
            //--------------------------------
            PropertyInfo[] cisServiceDemoProperties = typeof(CisServiceDemographics).GetProperties();
            foreach (PropertyInfo property in cisServiceDemoProperties)
            {
                if (property.Name.StartsWith("MultiSiteDescription") && !_cisServiceDemographics.MultiSite)
                {
                    continue;
                }

                if (useStandard && Constants.Constants.UnneccessaryCSFFields.Contains(property.Name))
                {
                    continue;
                }

                if (property.PropertyType == typeof(string) && string.IsNullOrWhiteSpace((string)property.GetValue(_cisServiceDemographics)))
                {
                    invalidFields.Add(TranslatedProperties.PropertyNames[property.Name]);
                    continue;
                }

                if (property.GetValue(_cisServiceDemographics) == null)
                {
                    invalidFields.Add(TranslatedProperties.PropertyNames[property.Name]);
                }
            }

            //--------------------------------
            // _cisServiceComposition validation
            //--------------------------------
            PropertyInfo[] cisServiceCompProperties = typeof(CisServiceComposition).GetProperties();
            foreach (PropertyInfo property in cisServiceCompProperties)
            {
                if (property.Name.StartsWith("OtherDefiningSystemDescription") && (_cisServiceComposition.PrimaryDefiningSystem != 10
                    && !_cisServiceComposition.SecondaryDefiningSystems.Contains(10)))
                {
                    continue;
                }

                if (useStandard && Constants.Constants.UnneccessaryCSFFields.Contains(property.Name))
                {
                    continue;
                }

                if (property.PropertyType == typeof(string) && string.IsNullOrWhiteSpace((string)property.GetValue(_cisServiceComposition)))
                {
                    invalidFields.Add(TranslatedProperties.PropertyNames[property.Name]);
                    continue;
                }

                if (property.GetValue(_cisServiceComposition) == null)
                {
                    invalidFields.Add(TranslatedProperties.PropertyNames[property.Name]);
                }
            }

            if (invalidFields.Count > 0)
            {
                isValid = false;
            }

            return new CisaWorkflowFieldValidationResponse(invalidFields, isValid);
        }
    }
}
