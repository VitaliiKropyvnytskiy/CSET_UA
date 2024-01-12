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
    /// A collection of SECTOR records
    /// </summary>
    [Index("SectorName", Name = "IX_SECTOR", IsUnique = true)]
    public partial class SECTOR
    {
        public SECTOR()
        {
            DEMOGRAPHICS = new HashSet<DEMOGRAPHICS>();
            SECTOR_INDUSTRY = new HashSet<SECTOR_INDUSTRY>();
            SECTOR_STANDARD_RECOMMENDATIONS = new HashSet<SECTOR_STANDARD_RECOMMENDATIONS>();
        }

        [Key]
        public int SectorId { get; set; }
        [Required]
        [StringLength(50)]
        public string SectorName { get; set; }
        public bool Is_NIPP { get; set; }
        public int? NIPP_sector { get; set; }

        [InverseProperty("Sector")]
        public virtual ICollection<DEMOGRAPHICS> DEMOGRAPHICS { get; set; }
        [InverseProperty("Sector")]
        public virtual ICollection<SECTOR_INDUSTRY> SECTOR_INDUSTRY { get; set; }
        [InverseProperty("Sector")]
        public virtual ICollection<SECTOR_STANDARD_RECOMMENDATIONS> SECTOR_STANDARD_RECOMMENDATIONS { get; set; }
    }
}