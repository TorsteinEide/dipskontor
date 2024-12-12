namespace dipskontor.Events;

public record Schedule(long Id, long EventId, DateTimeOffset NextOccurrence, string ReoccurringInterval);
