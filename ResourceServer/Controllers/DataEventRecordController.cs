using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ResourceServer.Models;
using ResourceServer.Repositories;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ResourceServer.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class DataEventRecordController : Controller
    {

        private readonly IDataEventRecordRepository _dataEventRecordRepository;

        public DataEventRecordController(IDataEventRecordRepository dataEventRecordRepository)
        {
            _dataEventRecordRepository = dataEventRecordRepository;
        }

        [Authorize("dataEventRecordsUser")]
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_dataEventRecordRepository.GetAll());
        }

        [Authorize("dataEventRecordsAdmin")]
        [HttpGet("{id}")]
        public IActionResult Get(long id)
        {
            return Ok(_dataEventRecordRepository.Get(id));
        }

        [Authorize("dataEventRecordsAdmin")]
        [HttpPost]
        public void Post([FromBody]DataEventRecord value)
        {
            _dataEventRecordRepository.Post(value);
        }

        [Authorize("dataEventRecordsAdmin")]
        [HttpPut("{id}")]
        public void Put(long id, [FromBody]DataEventRecord value)
        {
            _dataEventRecordRepository.Put(id, value);
        }

        [Authorize("dataEventRecordsAdmin")]
        [HttpDelete("{id}")]
        public void Delete(long id)
        {
            _dataEventRecordRepository.Delete(id);
        }
    }
}
