﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CSETWebCore.DataLayer.Model
{
    public partial class CIS_CSI_SERVICE_COMPOSITION_SECONDARY_DEFINING_SYSTEMS
    {
        [Key]
        public int Assessment_Id { get; set; }
        [Key]
        public int Defining_System_Id { get; set; }

        [ForeignKey("Assessment_Id")]
        [InverseProperty("CIS_CSI_SERVICE_COMPOSITION_SECONDARY_DEFINING_SYSTEMS")]
        public virtual CIS_CSI_SERVICE_COMPOSITION Assessment { get; set; }
        [ForeignKey("Defining_System_Id")]
        [InverseProperty("CIS_CSI_SERVICE_COMPOSITION_SECONDARY_DEFINING_SYSTEMS")]
        public virtual CIS_CSI_DEFINING_SYSTEMS Defining_System { get; set; }
    }
}