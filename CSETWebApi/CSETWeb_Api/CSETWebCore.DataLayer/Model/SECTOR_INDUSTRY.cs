﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CSETWebCore.DataLayer.Model
{
    /// <summary>
    /// A collection of SECTOR_INDUSTRY records
    /// </summary>
    [Index("IndustryId", Name = "IX_SECTOR_INDUSTRY", IsUnique = true)]
    public partial class SECTOR_INDUSTRY
    {
        public SECTOR_INDUSTRY()
        {
            DEMOGRAPHICS = new HashSet<DEMOGRAPHICS>();
            MAIN_SERVICE_TYPE = new HashSet<MAIN_SERVICE_TYPE>();
        }

        [Key]
        public int SectorId { get; set; }
        [Key]
        public int IndustryId { get; set; }
        [Required]
        [StringLength(150)]
        public string IndustryName { get; set; }
        public bool Is_NIPP { get; set; }
        public bool Is_Other { get; set; }
        public int? NIPP_subsector { get; set; }

        [ForeignKey("SectorId")]
        [InverseProperty("SECTOR_INDUSTRY")]
        public virtual SECTOR Sector { get; set; }
        public virtual ICollection<DEMOGRAPHICS> DEMOGRAPHICS { get; set; }
        public virtual ICollection<MAIN_SERVICE_TYPE> MAIN_SERVICE_TYPE { get; set; }
    }
}