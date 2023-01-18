using System.Web.Mvc;
using System.Web.Optimization;
using System.Web;
using System.Web.Routing;
using Autofac;
using Autofac.Integration.Mvc;
using IntellaQeust.BusinessLogic.Services;
using IntellaQuest.Repository;
using System.Reflection;
using System.Web.Http;
using IntellaQuest.Repository.Repositories;

namespace IntellaQuest.Web
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            var builder = new ContainerBuilder();

            builder.RegisterControllers(typeof(MvcApplication).Assembly);
            builder.RegisterType<UnitOfWork>().As<IUnitOfWork>().InstancePerRequest();

            builder.RegisterAssemblyTypes(typeof(ICustomerRepository).Assembly)
                .Where(x => x.FullName.EndsWith("Repository"))
                .AsImplementedInterfaces()
                .InstancePerRequest();

            builder.RegisterAssemblyTypes(typeof(ICustomerService).Assembly)
                .Where(x => x.FullName.EndsWith("Service"))
                .AsImplementedInterfaces()
                .InstancePerRequest();

            builder.RegisterModelBinderProvider();

            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            var container = builder.Build();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
           

        }
    }
}
