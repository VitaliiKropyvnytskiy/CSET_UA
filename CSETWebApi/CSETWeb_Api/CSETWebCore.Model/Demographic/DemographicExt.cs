﻿using CSETWebCore.DataLayer.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace CSETWebCore.Model.Demographic
{
    /// <summary>
    /// The demographic data collected by IOD CSAs. 
    /// Most of these properties store the int value of the
    /// OptionValue for their corresponding DETAILS_DEMOGRAPHICS_OPTIONS.
    /// </summary>
    public class DemographicExt
    {
        public int AssessmentId { get; set; }
        public DateTime AssessmentDate { get; set; }
        public int? OrganizationType { get; set; }
        public string OrganizationName { get; set; }
        public int? Sector { get; set; }
        public int? Subsector { get; set; }
        public int? MainServiceType { get; set; }
        public int? NumberEmployeesTotal { get; set; }
        public int? NumberEmployeesUnit { get; set; }
        public int? AnnualRevenue { get; set; }
        public int? CriticalServiceRevenuePercent { get; set; }
        public string CriticalDependencyIncidentResponseSupport { get; set; }
        public int? NumberPeopleServedByCritSvc { get; set; }
        public int? DisruptedSector1 { get; set; }
        public int? DisruptedSector2 { get; set; }


        /// <summary>
        /// Does your organization use a body of practice, industry
        /// standard, or similar resource to support or inform its
        /// cybersecurity efforts?
        /// </summary>
        public bool UsesStandard { get; set; }
        // Most important
        public string Standard1 { get; set; }
        // Second important
        public string Standard2 { get; set; }


        /// <summary>
        /// Is your organization required to comply with mandatory,
        /// cybersecurity-related regulation?
        /// </summary>
        public bool RequiredToComply { get; set; }
        public int? RegulationType1 { get; set; }
        public string Reg1Other { get; set; }
        public int? RegulationType2 { get; set; }
        public string Reg2Other { get; set; }


        /// <summary>
        /// This list indicates the organizations with whom we
        /// share cybersecurity-related information.
        /// ISAC, FBI, CONSULT, DHS, STATE, PEERS, NCFTA
        /// </summary>
        public List<int> ShareOrgs { get; set; } = new List<int>();
        public string ShareOther { get; set; }


        public string Barrier1 { get; set; }
        public string Barrier2 { get; set; }

        public string BusinessUnit { get; set; }



        // ================================================================
        //  Following are the collections to support dropdown lists,
        //  checkbox and radio button lists
        // ================================================================
        

        public List<ListItem2> ListOrgTypes { get; set; } = new List<ListItem2>();

        public List<ListItem3> ListSectors { get; set; } = new List<ListItem3>();

        public List<ListItem2> ListSubsectors { get; set; } = new List<ListItem2>();
        public List<ListItem2> ListMainServiceTypes { get; set; } = new List<ListItem2>();


        public List<ListItem2> ListNumberEmployeeTotal { get; set; } = new List<ListItem2>();

        public List<ListItem2> ListNumberEmployeeUnit { get; set; } = new List<ListItem2>();

        public List<ListItem2> ListRevenueAmounts { get; set; } = new List<ListItem2>();

        /// <summary>
        /// Used for question 4 
        /// </summary>
        public List<ListItem2> ListRevenuePercentages { get; set; } = new List<ListItem2>();

        /// <summary>
        /// The number of people served annually by the critical service.
        /// lUsed for question 5
        /// </summary>
        public List<ListItem2> ListNumberPeopleServed { get; set; } = new List<ListItem2>();

        /// <summary>
        /// Used for question 6
        /// </summary>
        public List<ListItem2> ListCISectors { get; set; } = new List<ListItem2>();

        /// <summary>
        /// Used for question 7
        /// </summary>
        public List<ListItem2> ListStandards { get; set; } = new List<ListItem2>();

        /// <summary>
        /// Used for question 8
        /// </summary>
        public List<ListItem2> ListRegulationTypes { get; set; } = new List<ListItem2>();

        /// <summary>
        /// Organizations with whom you share cyber data.
        /// Used for question 9
        /// </summary>
        public List<ListItem2> ListShareOrgs { get; set; } = new List<ListItem2>();

        /// <summary>
        /// Used for question 10
        /// </summary>
        public List<ListItem2> ListBarriers { get; set; } = new List<ListItem2>();

        
    }
}
