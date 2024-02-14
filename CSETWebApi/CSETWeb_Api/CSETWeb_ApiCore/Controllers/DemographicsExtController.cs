﻿//////////////////////////////// 
// 
//   Copyright 2023 Battelle Energy Alliance, LLC  
// 
// 
//////////////////////////////// 
using CSETWebCore.Business.Aggregation;
using CSETWebCore.Business.Demographic;
using CSETWebCore.DataLayer.Model;
using CSETWebCore.Interfaces.Assessment;
using CSETWebCore.Interfaces.Demographic;
using CSETWebCore.Interfaces.Helpers;
using CSETWebCore.Model.Assessment;
using CSETWebCore.Model.Demographic;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CSETWebCore.Api.Controllers
{
    [ApiController]
    public class DemographicsExtController : ControllerBase
    {
        private readonly ITokenManager _token;
        private readonly IAssessmentBusiness _assessment;
        private readonly IDemographicBusiness _demographic;
        private CSETContext _context;

        public DemographicsExtController(ITokenManager token, IAssessmentBusiness assessment,
            IDemographicBusiness demographic, CSETContext context)
        {
            _token = token;
            _assessment = assessment;
            _demographic = demographic;
            _context = context;
        }


        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/demographics/ext2")]
        public IActionResult GetExtended2()
        {
            var assessmentId = _token.AssessmentForUser();

            var mgr = new DemographicExtBusiness(_context);
            var response = mgr.GetDemographics(assessmentId);
            return Ok(response);
        }


        [HttpGet]
        [Route("api/demographics/ext2/subsectors/{id}")]
        public IActionResult GetSubsectors(int id)
        {
            var mgr = new DemographicExtBusiness(_context);
            var response = mgr.GetSubsectors(id);
            return Ok(response);
        }

        [HttpGet]
        [Route("api/demographics/ext2/mainServiceTypes")]
        public IActionResult GetMainServiceTypes(int? sectorId, int? industryId)
        {
            List<ListItem2> list = new List<ListItem2>();
            if (industryId.HasValue)
            {
                list = _context.MAIN_SERVICE_TYPE.Where(mst => mst.IndustryId == industryId).Select(mst=>new ListItem2
                {
                    OptionValue=mst.MainServiceTypeId,
                    OptionText=mst.Title
                }).ToList();
            }
            else if (sectorId.HasValue)
            {
                list = _context.MAIN_SERVICE_TYPE.Where(mst => mst.SectorId == sectorId).Select(mst => new ListItem2
                {
                    OptionValue = mst.MainServiceTypeId,
                    OptionText = mst.Title
                }).ToList();
            }
            return Ok(list);
        }


        /// <summary>
        /// Persists extended demographics.
        /// </summary>
        /// <param name="demographics"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("api/demographics/ext2")]
        public IActionResult PostExtended2([FromBody] DemographicExt demographics)
        {
            demographics.AssessmentId = _token.AssessmentForUser();

            var mgr = new DemographicExtBusiness(_context);
            mgr.SaveDemographics(demographics);

            return Ok();
        }
    }
}
