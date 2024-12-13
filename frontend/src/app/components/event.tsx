
import { IEvent } from "../types/dataTypes";

interface EventProps {
    event: IEvent
}

const Event: React.FC<EventProps> = (eventProp) => {
    return (
      <section className="bg-green-800 text-slate-200" >
            <h1>{eventProp.event.title}</h1>
            <p>{eventProp.event.description}</p>
            <p>{eventProp.event.location}</p>
      </section>
    );
  }

  export default Event;