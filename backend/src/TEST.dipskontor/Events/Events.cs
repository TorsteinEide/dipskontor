using System.Transactions;
using dipskontor;
using dipskontor.Events;
using Npgsql;
using ResourceReader;

namespace foo;

public class EventTests
{
    [Fact]
    public async Task ShouldBeAbleToCreateAndReadEvent()
    {
        var connectionString = "Host=localhost;Username=postgres;Password=admin;Database=postgres";
        await using var dataSource = NpgsqlDataSource.Create(connectionString);
        using var scope = new TransactionScope();
        var sqlProvider = new ResourceBuilder().Build<ISqlProvider>();
        using var connection = dataSource.CreateConnection();
        connection.Open();
        var eventService = new EventService(connection, sqlProvider);

        await eventService.CreateEvent(new CreateEvent("Hei", "Kult", DateTime.Now, "Kontoret"));

        var events = await eventService.GetEvents();

        Assert.NotEmpty(events);
        scope.Dispose();
    }

    [Fact]
    public async Task ShouldBeAbleToCreateReadAndDeleteEvent()
    {
        var connectionString = "Host=localhost;Username=postgres;Password=admin;Database=postgres";
        await using var dataSource = NpgsqlDataSource.Create(connectionString);
        var sqlProvider = new ResourceBuilder().Build<ISqlProvider>();
        using var scope = new TransactionScope();
        using var connection = dataSource.CreateConnection();
        connection.Open();
        var eventService = new EventService(connection, sqlProvider);

        await eventService.CreateEvent(new CreateEvent("Hei", "Kult", DateTime.Now, "Kontoret"));

        var events = await eventService.GetEvents();

        Assert.NotEmpty(events);

        await eventService.DeleteEvent(1);

        events = await eventService.GetEvents();

        Assert.Empty(events);
        scope.Dispose();
    }

}
