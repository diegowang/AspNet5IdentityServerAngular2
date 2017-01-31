using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ResourceServer.Models
{
    public class DataEventRecordContext: DbContext
    {
        public DataEventRecordContext(DbContextOptions<DataEventRecordContext> options) : base(options)
        {
        }

        public DbSet<DataEventRecord> DataEventRecords { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<DataEventRecord>().HasKey(m => m.Id);
            base.OnModelCreating(builder);
        }
    }
}
