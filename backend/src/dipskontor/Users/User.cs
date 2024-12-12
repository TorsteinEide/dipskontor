namespace dipskontor.Users;

public record User(long Id, string SlackHandle, string Name, byte[] Picture);
