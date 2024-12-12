namespace dipskontor.Events;

public record Attencence(long EventId, long UserId, DateTimeOffset SignUpTime);
