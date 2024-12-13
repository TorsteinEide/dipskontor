using System.Data;
using DbReader;

namespace dipskontor.Events;

public record Attendence(long EventId, long UserId, DateTime SignUpTime);

public record CreateAttendence(long EventId, long UserId);

public interface IAttendenceService
{
    public Task<IEnumerable<Attendence>> GetAttendences();

    public Task<Attendence> GetAttendenceById(long id);

    public Task CreateAttendence(long eventId, long userId);

    public Task DeleteAttendence(long eventId, long userId);
}

public class AttendenceService(IDbConnection dbConnection, ISqlProvider sqlProvider) : IAttendenceService
{
    public async Task<IEnumerable<Attendence>> GetAttendences()
        => await dbConnection.ReadAsync<Attendence>(sqlProvider.GetAttendences);

    public async Task<Attendence> GetAttendenceById(long id)
        => (await dbConnection.ReadAsync<Attendence>(sqlProvider.GetAttendenceById, new { id })).Single();

    public async Task CreateAttendence(long eventId, long userId)
        => await dbConnection.ExecuteAsync(sqlProvider.CreateAttendence, new { eventId, userId, signuptime = DateTime.Now });

    public async Task DeleteAttendence(long eventId, long userId)
        => await dbConnection.ExecuteAsync(sqlProvider.DeleteAttendence, new { eventId, userId });
}
