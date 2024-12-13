using System.Data;
using dipskontor;
using dipskontor.Events;
using dipskontor.Ideas;
using dipskontor.Users;
using Npgsql;
using ResourceReader;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddTransient<IEventService, EventService>();
builder.Services.AddTransient<IEventTypesService, EventTypesService>();
builder.Services.AddTransient<IUserService, UserService>();
builder.Services.AddTransient<IIdeaService, IdeaService>();
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

app.MapGet("/api/users", async (IUserService userService) =>
{
    var users = await userService.GetUsers();
    return users;
});

app.MapGet("/api/users/{id:long}", async (IUserService userService, long id) =>
{
    var users = await userService.GetUserById(id);
    return users;
});

app.MapPost("/api/users", async (IUserService userService, CreateUser createUser) =>
{
    await userService.CreateUser(createUser);
    return Results.Created();
});

app.MapDelete("/api/users/{id:long}", async (IUserService userService, long id) =>
{
    await userService.DeleteUser(id);
    return Results.NoContent();
});

app.MapGet("/api/ideas", async (IIdeaService ideaService) =>
{
    var ideas = await ideaService.GetIdeas();
    return ideas;
});

app.MapGet("/api/ideas/{id:long}", async (IIdeaService ideaService, long id) =>
{
    var ideas = await ideaService.GetIdeaById(id);
    return ideas;
});

app.MapGet("/api/ideas/{id:long}/likes", async (IIdeaService ideaService, long id) =>
{
    var ideas = await ideaService.GetLikes(id);
    return ideas;
});

app.MapPost("/api/ideas/{idea_id:long}/like/{user_id:long}", async (IIdeaService ideaService, long idea_id, long user_id) =>
{
    await ideaService.AddLike(user_id, idea_id);
    return Results.Created();
});

app.MapPost("/api/ideas", async (IIdeaService ideaService, CreateIdea createIdea) =>
{
    await ideaService.CreateIdea(createIdea);
    return Results.Created();
});

app.MapDelete("/api/ideas/{id:long}", async (IIdeaService ideaService, long id) =>
{
    await ideaService.DeleteIdea(id);
    return Results.NoContent();
});


app.MapGet("/api/events/{eventId:long}/attendences", async (IAttendenceService attendenceService, long eventId) =>
{
    var attendences = await attendenceService.GetAttendences();
    return attendences;
});

app.MapGet("/api/events/{eventId:long}/attendences/{userId:long}", async (IAttendenceService attendenceService, long eventId, long userId) =>
{
    var attendences = await attendenceService.GetAttendenceById(userId);
    return attendences;
});

app.MapPost("/api/events/{eventId:long}/attendences/{userId:long}", async (IAttendenceService attendenceService, long eventId, long userId) =>
{
    await attendenceService.CreateAttendence(eventId, userId);
    return Results.Created();
});

app.MapDelete("/api/events/{eventId:long}/attendences/{userId:long}", async (IAttendenceService attendenceService, long eventId, long userId) =>
{
    await attendenceService.DeleteAttendence(eventId, userId);
    return Results.NoContent();
});


app.MapOpenApi();
app.MapScalarApiReference();

app.Run();
