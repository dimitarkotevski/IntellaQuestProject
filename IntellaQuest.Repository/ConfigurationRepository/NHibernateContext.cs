using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using IntellaQuest.Repository.Mapping;
using NHibernate;

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
                    .AddFromAssembly(typeof(CategoriesMap).Assembly);
             })
             .BuildSessionFactory();
            return build;
        }
    }
}
