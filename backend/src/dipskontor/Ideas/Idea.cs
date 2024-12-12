using System.Data;
using DbReader;

namespace dipskontor.Ideas;

public record Idea(long Id, string Title, string Description);


public record CreateIdea(string Title, string Description);

public interface IIdeaService
{
    public Task<IEnumerable<Idea>> GetIdeas();

    public Task<Idea> GetIdeaById(long id);

    public Task CreateIdea(CreateIdea @event);

    public Task DeleteIdea(long id);
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
}
