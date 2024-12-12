namespace dipskontor;

public interface ISqlProvider
{
    string GetEvents { get; }

    string GetEventById { get; }

    string CreateEvent { get; }

    string DeleteEvent { get; }

    string GetEventTypes { get; }

    string GetEventTypeById { get; }

    string CreateEventType { get; }

    string DeleteEventType { get; }
}
