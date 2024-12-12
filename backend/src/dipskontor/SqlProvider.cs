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

    string GetUsers { get; }

    string GetUserById { get; }

    string CreateUser { get; }

    string DeleteUser { get; }

    string GetIdeas { get; }

    string GetIdeaById { get; }

    string CreateIdea { get; }

    string DeleteIdea { get; }

    string GetLikes { get; }

    string AddLike { get; }
}
