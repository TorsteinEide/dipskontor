namespace dipskontor.Events;

public record EventType(long Id, string Name, string Description, bool NeedsAttendence);
