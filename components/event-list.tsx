import EventItem from '@/components/event-item';
import { Event, EventType } from "@/types";

interface EventListProps {
    events: Event[] | undefined,
}

const EventList: React.FC<EventListProps> = ({
    events
}) => {
    if (events === undefined) {
        events = new Array<Event>();
        events.push({ type: EventType.Event, title: "Event", imageUrl: "" });
        events.push({ type: EventType.News, title: "News1", imageUrl: "" });
        events.push({ type: EventType.News, title: "News2", imageUrl: "" });
        events.push({ type: EventType.News, title: "News3", imageUrl: "" });
        events.push({ type: EventType.News, title: "News4", imageUrl: "" });
    }
    return (
        <div className='grid grid-cols-4 gap-6'>
            {
                events.map((item) => (
                    <EventItem event={item} />
                ))
            }
        </div>
    );
}
export default EventList;