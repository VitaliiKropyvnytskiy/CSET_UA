﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSETWebCore.DataLayer.Model
{
    public class usp_getExplodedComponent
    {
        [Key]
        public string UniqueKey { get; set; }
        public int Assessment_Id { get; set; }
        public Nullable<int> Answer_Id { get; set; }
        public int Question_Id { get; set; }
        public string Answer_Text { get; set; }
        public string Comment { get; set; }
        public string Alternate_Justification { get; set; }
        public Nullable<int> Question_Number { get; set; }
        public string QuestionText { get; set; }
        public string ComponentName { get; set; }
        public int Component_Symbol_Id { get; set; }
        public bool Is_Component { get; set; }
        public Guid Component_GUID { get; set; }
        public Nullable<int> Layer_Id { get; set; }
        public string LayerName { get; set; }
        public Nullable<int> Container_Id { get; set; }
        public string ZoneName { get; set; }
        public string SAL { get; set; }
        public Nullable<bool> Mark_For_Review { get; set; }
        public string Feedback { get; set; }
    }
}
