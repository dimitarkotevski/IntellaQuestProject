
using Autofac;
using Autofac.Integration.Mvc;
using IntellaQuest.Repository;
using IntellaQuest.Repository.Repositories;

using IntellaQeust.BusinessLogic.Services;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Http;
using System.Web.Routing;
using FluentValidation.Mvc;

namespace IntellaQuest.Web
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            var builder = new ContainerBuilder();

            builder.RegisterControllers(typeof(MvcApplication).Assembly);
            builder.RegisterType<UnitOfWork>().As<IUnitOfWork>().InstancePerRequest();

            builder.RegisterAssemblyTypes(typeof(ICustomersRepository).Assembly)
                .Where(x => x.FullName.EndsWith("Repository"))
                .AsImplementedInterfaces()
                .InstancePerRequest();

            builder.RegisterAssemblyTypes(typeof(ICustomersService).Assembly)
                .Where(x => x.FullName.EndsWith("Service"))
                .AsImplementedInterfaces()
                .InstancePerRequest();

            
            builder.RegisterModelBinderProvider();
            FluentValidationModelValidatorProvider.Configure();



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
