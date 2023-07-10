
using FluentNHibernate.Cfg;
using IntellaQuest.Domain;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var sessionFactory = Fluently.Configure()
        // Configure your Fluent NHibernate mappings and database connection here
        .Mappings(m => m.FluentMappings.AddFromAssemblyOf<Order>())
        .BuildSessionFactory();

builder.Services.AddCoreAdmin();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCoreAdminCustomAuth((serviceProvider) => Task.FromResult(false));

app.MapDefaultControllerRoute();

app.MapControllers();

app.Run();
