using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using IntellaQuest.Data.NHibernate.Mapping;
using NHibernate;

namespace IntellaQuest.Data.NHibernate.ConfigurationRepository
{
    public class NHibernateContext
    {
        private static string _connectionString = "Data Source=localhost;Initial Catalog=ShopDb;Integrated Security=SSPI;";
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
