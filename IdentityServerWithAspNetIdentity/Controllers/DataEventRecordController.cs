using System;
using System.Collections.Generic;
using IdentityServerWithAspNetIdentity.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IdentityServerWithAspNetIdentity.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class DataEventRecordController : Controller
    {
        [Authorize("dataEventRecordsUser")]
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new List<DataEventRecord> { new DataEventRecord { Id = 1, Description = "Fake", Name = "myname", Timestamp = DateTime.UtcNow } });
        }

        [Authorize("dataEventRecordsAdmin")]
        [HttpGet("{id}")]
        public IActionResult Get(long id)
        {
            return Ok(new DataEventRecord { Id = 1, Description = "Fake", Name = "myname", Timestamp = DateTime.UtcNow });
        }

        [Authorize("dataEventRecordsAdmin")]
        [HttpPost]
        public void Post([FromBody]DataEventRecord value)
        {

        }

        [Authorize("dataEventRecordsAdmin")]
        [HttpPut("{id}")]
        public void Put(long id, [FromBody]DataEventRecord value)
        {

        }

        [Authorize("dataEventRecordsAdmin")]
        [HttpDelete("{id}")]
        public void Delete(long id)
        {

        }
    }
}