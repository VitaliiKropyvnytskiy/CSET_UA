using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSETWebCore.DataLayer.Model
{
    [Index("MainServiceTypeId", Name = "IX_MAIN_SERVICE_TYPE", IsUnique = true)]
    public partial class MAIN_SERVICE_TYPE
    {
        public MAIN_SERVICE_TYPE()
        {
            DEMOGRAPHICS = new HashSet<DEMOGRAPHICS>();
        }

        [Key]
        public int MainServiceTypeId { get; set; }
        public int? IndustryId { get; set; }
        public int? SectorId { get; set; }
        [Required]
        [StringLength(500)]
        public string Title { get; set; }

        [ForeignKey("IndustryId")]
        [InverseProperty("MAIN_SERVICE_TYPE")]
        public virtual SECTOR_INDUSTRY SECTOR_INDUSTRY { get; set; }

        [ForeignKey("SectorId")]
        public virtual SECTOR SECTOR { get; set; }
        public virtual ICollection<DEMOGRAPHICS> DEMOGRAPHICS { get; set; }
    }
}
