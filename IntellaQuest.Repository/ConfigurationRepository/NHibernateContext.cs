using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using IntellaQuest.Mapping;
using NHibernate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntellaQuest.Repository
{
    public class NHibernateContext
    {
        private static string _connectionString = "Data Source=ANTONIOA-LT;Initial Catalog=shop;Integrated Security=SSPI;";
        static ISessionFactory BuildSessionFactory()
        {
            return Fluently.Configure()
             .Database(MsSqlConfiguration.MsSql2005.ConnectionString(_connectionString))
             .Mappings(m =>
             {
                 m.FluentMappings
                    .AddFromAssemblyOf<CustomerMap>();
             })
             .BuildSessionFactory();
        }
    }
}
