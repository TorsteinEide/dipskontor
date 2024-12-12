using System.Data;
using DbReader;

namespace dipskontor.Ideas;

public record Idea(long Id, string Title, string Description);

public record IdeaWithUser(long Id, string Title, string Description, long UserId);

public record CreateIdea(string Title, string Description);

public interface IIdeaService
{
    public Task<IEnumerable<Idea>> GetIdeas();

    public Task<Idea> GetIdeaById(long id);

    public Task CreateIdea(CreateIdea @event);

    public Task DeleteIdea(long id);

    public Task<long> GetLikes(long idea_id);

    public Task AddLike(long user_id, long idea_id);

    public Task<IEnumerable<IdeaWithUser>> GetIdeasWithUsers();
}

public class IdeaService(IDbConnection dbConnection, ISqlProvider sqlProvider) : IIdeaService
{
    public async Task<IEnumerable<Idea>> GetIdeas()
        => await dbConnection.ReadAsync<Idea>(sqlProvider.GetIdeas);

    public async Task<Idea> GetIdeaById(long id)
        => (await dbConnection.ReadAsync<Idea>(sqlProvider.GetIdeaById, new { id })).Single();

    public async Task CreateIdea(CreateIdea @event)
        => await dbConnection.ExecuteAsync(sqlProvider.CreateIdea, @event);

    public async Task DeleteIdea(long id)
        => await dbConnection.ExecuteAsync(sqlProvider.DeleteIdea, new { id });

    public async Task<long> GetLikes(long id)
        => (await dbConnection.ReadAsync<int>(sqlProvider.GetLikes, new { id })).Single();

    public async Task AddLike(long user_id, long idea_id)
        => await dbConnection.ExecuteAsync(sqlProvider.AddLike, new { user_id, idea_id });

    public async Task<IdeaWithUser> GetIdeasWithUsers()
        => (await dbConnection.ReadAsync<IdeaWithUser>(sqlProvider.GetIdeasWithUsers)).Single();


}
