import { Event, EventSub, EventType } from "@/types";
import EventSubDetail from './event-sub-detail';

interface EventSubListProps {
    events: EventSub[] | undefined,
}

const EventSubList: React.FC<EventSubListProps> = ({
    events
}) => {
    if (events === undefined) {
        events = new Array<EventSub>();
        const eventImage1 = { url: "/image/event1.png", width: 1529, height: 862 };
        const eventSub1 = { image: eventImage1, title: "新年祝福语设计", timeString: "Work — Feb 08,2024", desc: "祝您新的年一帆风顺，二龙腾飞，三羊开泰，四季平安，五福临门，六六大顺，七星高照，八方来财，九九同心，十全十美。" }
        events.push(eventSub1);
        const eventImage2 = { url: "/image/event2.png", width: 174, height: 179 };
        const eventSub2 = { image: eventImage2, title: "Sharjah City Brand", timeString: "Work — Feb 01,2024", desc: "Samar Maakaroun and team create the strategy, positioning and brand identity for Sharjah, one of the seven United Arab Emirates." }
        events.push(eventSub2);
        /*const eventImage3 = { url: "/image/event2.png", width: 1529, height: 862 };
        const eventSub3 = { image: eventImage3, title: "新年祝福语设计", timeString: "Work — Feb 08,2024", desc: "祝您新的年一帆风顺，二龙腾飞，三羊开泰，四季平安，五福临门，六六大顺，七星高照，八方来财，九九同心，十全十美。" }
        events.push(eventSub3);
        const eventImage4 = { url: "/image/event1.png", width: 174, height: 179 };
        const eventSub4 = { image: eventImage4, title: "Sharjah City Brand", timeString: "Work — Feb 01,2024", desc: "Samar Maakaroun and team create the strategy, positioning and brand identity for Sharjah, one of the seven United Arab Emirates." }
        events.push(eventSub4);*/
    }
    return (
        <div className=' w-[70%] grid grid-cols-2 gap-6 '>
            {
                events.map((item) => (
                    <EventSubDetail eventSub={item} />
                ))
            }
        </div>
    );
}
export default EventSubList;