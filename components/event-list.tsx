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
        events.push({ id: 0, type: EventType.Event, title: "Event", images: [] });
        events.push({ id: 1, type: EventType.News, title: "News1", images: [] });
        events.push({ id: 2, type: EventType.News, title: "News2", images: [] });
        events.push({ id: 3, type: EventType.News, title: "News3", images: [] });
        events.push({ id: 4, type: EventType.News, title: "News4", images: [] });
    }
    return (
        <div className='grid grid-cols-5 gap-6 w-[70%]'>
            {
                events.map((item) => (
                    <EventItem event={item} />
                ))
            }
        </div>
    );
}
export default EventList;