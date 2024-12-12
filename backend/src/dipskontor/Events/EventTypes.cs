using System.Data;
using DbReader;

namespace dipskontor.Events;

public record EventType(long Id, string Name, string Description, bool NeedsAttendence);

public record CreateEventType(string Name, string Description, bool NeedsAttendence);

public interface IEventTypesService
{
    public Task<IEnumerable<EventType>> GetEventTypes();

    public Task<EventType> GetEventTypeById(long id);

    public Task CreateEventType(CreateEventType eventType);

    public Task DeleteEventType(long id);
}

public class EventTypesService(IDbConnection dbConnection, ISqlProvider sqlProvider) : IEventTypesService
{
    public async Task<IEnumerable<EventType>> GetEventTypes()
        => await dbConnection.ReadAsync<EventType>(sqlProvider.GetEventTypes);

    public async Task<EventType> GetEventTypeById(long id)
        => (await dbConnection.ReadAsync<EventType>(sqlProvider.GetEventTypeById, new { id })).Single();

    public async Task CreateEventType(CreateEventType eventType)
        => await dbConnection.ExecuteAsync(sqlProvider.CreateEventType, eventType);

    public async Task DeleteEventType(long id)
        => await dbConnection.ExecuteAsync(sqlProvider.DeleteEventType, new { id });
}
