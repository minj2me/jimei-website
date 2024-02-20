import { EventType, Event } from "@/types";

interface EventItemProps {
    event: Event,
}

const EventItem: React.FC<EventItemProps> = ({
    event
}) => {
    return (
        <div className=" relative bg-[#CDCDCD] h-[150px] rounded-lg hover:cursor-pointer">
            <div className=" absolute right-[21px] bg-[#0D0C22] w-[55px] h-[37px]">
                <p className=" text-white text-[20px] text-center">{event.type === EventType.Event ? "活动" : "资讯"}</p>
            </div>
            <p>{event.title}</p>
        </div>
    );
}
export default EventItem;