using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using IntellaQuest.Repository.Mapping;
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
        private static string _connectionString = "Data Source=DIMITARK-LT;Initial Catalog=ShopDb;Integrated Security=SSPI;";
        public static ISessionFactory BuildSessionFactory()
        {
            var build= Fluently.Configure()
             .Database(MsSqlConfiguration.MsSql2005.ConnectionString(_connectionString))
             .Mappings(m =>
             {
                 m.FluentMappings
                    .AddFromAssembly(typeof(CategoryMap).Assembly);
             })
             .BuildSessionFactory();
            return build;
        }
    }
}
