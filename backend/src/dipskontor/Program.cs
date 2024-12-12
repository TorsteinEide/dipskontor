using System.Data;
using dipskontor;
using dipskontor.Events;
using Npgsql;
using ResourceReader;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddTransient<IEventService, EventService>();
builder.Services.AddTransient<IEventTypesService, EventTypesService>();
builder.Services.AddSingleton<ISqlProvider>(sf => new ResourceBuilder().Build<ISqlProvider>());
builder.Services.AddTransient<IDbConnection>(sf =>
{
    var connection = new NpgsqlConnection("Host=postgres;Username=postgres;Password=admin;Database=postgres");
    connection.Open();
    return connection;
});

var app = builder.Build();

app.MapGet("/api/events", async (IEventService eventService) =>
{
    var events = await eventService.GetEvents();
    return events;
});

app.MapGet("/api/events/{id:long}", async (IEventService eventService, long id) =>
{
    var events = await eventService.GetEventById(id);
    return events;
});

app.MapPost("/api/events", async (IEventService eventService, CreateEvent createEvent) =>
{
    await eventService.CreateEvent(createEvent);
    return Results.Created();
});

app.MapDelete("/api/events/{id:long}", async (IEventService eventService, long id) =>
{
    await eventService.DeleteEvent(id);
    return Results.NoContent();
});

app.MapGet("/api/eventtypes", async (IEventTypesService eventTypesService) =>
{
    var eventTypes = await eventTypesService.GetEventTypes();
    return eventTypes;
});

app.MapGet("/api/eventtypes/{id:long}", async (IEventTypesService eventTypesService, long id) =>
{
    var eventTypes = await eventTypesService.GetEventTypeById(id);
    return eventTypes;
});

app.MapPost("/api/eventtypes", async (IEventTypesService eventTypesService, CreateEventType createEventType) =>
{
    await eventTypesService.CreateEventType(createEventType);
    return Results.Created();
});

app.MapDelete("/api/eventtypes/{id:long}", async (IEventTypesService eventTypesService, long id) =>
{
    await eventTypesService.DeleteEventType(id);
    return Results.NoContent();
});


app.MapOpenApi();
app.MapScalarApiReference();

app.Run();
