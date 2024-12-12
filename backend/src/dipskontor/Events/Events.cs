using System.Data.Common;
using DbReader;

namespace dipskontor.Events;

public record Event(long Id, string Title, string Description, DateTime CreatedAt, string Location);

public record CreateEvent(string Title, string Description, DateTime CreatedAt, string Location);

public interface IEventService
{
    public Task<IEnumerable<Event>> GetEvents();

    public Task<Event> GetEventById(long id);

    public Task CreateEvent(CreateEvent @event);

    public Task DeleteEvent(long id);
}

public class EventService(DbConnection dbConnection, ISqlProvider sqlProvider) : IEventService
{
    public async Task<IEnumerable<Event>> GetEvents()
        => await dbConnection.ReadAsync<Event>(sqlProvider.GetEvents);

    public async Task<Event> GetEventById(long id)
        => (await dbConnection.ReadAsync<Event>(sqlProvider.GetEventById, new { id })).Single();

    public async Task CreateEvent(CreateEvent @event)
        => await dbConnection.ExecuteAsync(sqlProvider.CreateEvent, @event);

    public async Task DeleteEvent(long id)
        => await dbConnection.ExecuteAsync(sqlProvider.DeleteEvent, new { id });
}
