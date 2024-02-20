import { EventSub } from "@/types";

interface EventSubDetailProps {
    eventSub: EventSub | undefined,
}

const EventSubDetail: React.FC<EventSubDetailProps> = ({ eventSub }) => {
    /*if (eventSub === undefined) {
        const eventImage = { url: "/image/event1.png", width: 1529, height: 862 };
        eventSub = { image: eventImage, title: "新年祝福语设计", timeString: "Work — Feb 08,2024", desc: "祝您新的年一帆风顺，二龙腾飞，三羊开泰，四季平安，五福临门，六六大顺，七星高照，八方来财，九九同心，十全十美。" }
    }*/
    return (
        <div className=" flex flex-col">
            <img src={eventSub?.image.url} width={eventSub?.image?.width} height={eventSub?.image?.height} />
            <p className="text-[22px]">{eventSub?.title}</p>
            <p className="text-[17px] text-[#999999]">{eventSub?.timeString}</p>
            <p className="text-[17px] text-[#000000]">{eventSub?.desc}</p>
        </div>);
}
export default EventSubDetail;