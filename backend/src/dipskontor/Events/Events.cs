namespace dipskontor.Events;

public record Event(long Id, string Title, string Description, DateTimeOffset CreatedAt, string Location);
