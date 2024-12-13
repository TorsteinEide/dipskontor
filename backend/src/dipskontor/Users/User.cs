using System.Data;
using DbReader;

namespace dipskontor.Users;

public record User(long Id, string SlackHandle, string Name, string Picture);

public record CreateUser(string SlackHandle, string Name, string Picture);

public interface IUserService
{
    Task<IEnumerable<User>> GetUsers();

    Task<User> GetUserById(long id);

    Task CreateUser(CreateUser createUser);

    Task DeleteUser(long id);
}


public class UserService(IDbConnection dbConnection, ISqlProvider sqlProvider) : IUserService
{
    public async Task<IEnumerable<User>> GetUsers()
        => await dbConnection.ReadAsync<User>(sqlProvider.GetUsers);

    public async Task<User> GetUserById(long id)
        => (await dbConnection.ReadAsync<User>(sqlProvider.GetUserById, new { id })).Single();

    public async Task CreateUser(CreateUser user)
        => await dbConnection.ExecuteAsync(sqlProvider.CreateUser, new {user.SlackHandle, user.Name, Picture = Convert.FromBase64String(user.Picture)});

    public async Task DeleteUser(long id)
        => await dbConnection.ExecuteAsync(sqlProvider.DeleteUser, new { id });
}

