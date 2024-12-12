using dipskontor;
using dipskontor.Events;
using ResourceReader;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddNpgsqlDataSource("Host=localhost;Username=postgres;Password=admin;Database=postgres");
builder.Services.AddTransient<IEventService, EventService>();
builder.Services.AddTransient<IEventTypesService, EventTypesService>();
builder.Services.AddSingleton<ISqlProvider>(sf => new ResourceBuilder().Build<ISqlProvider>());

var app = builder.Build();

app.MapGet("/api/events", async (IEventService eventService) =>
{
    var events = await eventService.GetEvents();
    return Results.Ok(events);
});

app.MapGet("/api/events/{id:long}", async (IEventService eventService, long id) =>
{
    var events = await eventService.GetEventById(id);
    return events is null ? Results.NotFound() : Results.Ok(events);
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
    return Results.Ok(eventTypes);
});

app.MapGet("/api/eventtypes/{id:long}", async (IEventTypesService eventTypesService, long id) =>
{
    var eventTypes = await eventTypesService.GetEventTypeById(id);
    return eventTypes is null ? Results.NotFound() : Results.Ok(eventTypes);
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


app.Run();
