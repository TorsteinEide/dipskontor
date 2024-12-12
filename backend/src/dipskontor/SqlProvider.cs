namespace dipskontor;

public interface ISqlProvider
{
    string GetEvents { get; }

    string GetEventById { get; }

    string CreateEvent { get; }

    string UpdateEvent { get; }

    string DeleteEvent { get; }
}
