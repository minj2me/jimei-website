import Container from '@/components/ui/container';
import { Event, EventType } from '@/types';

interface EventDetailPageProps {
    params: {
        eventId: number;
    }
}

/**
 * 推文详情页
 */
const EventDetailPage: React.FC<EventDetailPageProps> = async ({
    params
}) => {
    const map = new Map<number, Event>();
    /**
     * id:number,
     *  type: EventType,
  title: string,
  images: ImageData[],
  timeString?: string,
  descUnderImage?: string,
  desc?: string,
  desc2?: string,
  desc3?: string,

   url: string,
  alt?: string,
  width: number,
  height: number,
     */
    const event1Images = [{ url: "/image/event1.png", alt: "", width: 0, height: 0 }, { url: "/image/event2.png", alt: "", width: 0, height: 0 }];
    const event1 = {
        id: 0, type: EventType.Event, title: "新年祝福语设计 \n 集美设计祝您 \n happy龙year!", images: event1Images,
        timeString: "Work — Feb 01,2024", descUnderImage: "在龙年，我们致敬这条神秘的东方巨龙，它是力量与智慧的化身，是繁荣与吉祥的象征。龙年到来愿你拥有龙的智慧，胸怀壮志，高屋建瓴。愿你拥有龙的勇气，无畏前行，勇往直前。愿你拥有龙的精神，创新不息，追求卓越。",
        desc: "祝您新的年一帆风顺，二龙腾飞，三羊开泰，四季平安，五福临门，六六大顺，七星高照，八方来财，九九同心，十全十美。",
        desc2: "New Year's greetings illustration Design",
        desc3: "Executive Creative Director"
    };
    map.set(0, event1);
    return (
        <div>
            <Container>
                <div className=' flex flex-row'>
                    <div className=' flex flex-col  w-[50%]'>
                        左边的文字
                    </div>
                    <div className="w-[50%] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                        <ul className="grid grid-cols-2 gap-6">
                            <li className="col-span-1">
                                <ul className="flex flex-col gap-4">
                                    <li><img src="https://fakeimg.pl/250x200/" /></li>
                                    <li><img src="https://fakeimg.pl/250x100/" /></li>
                                    <li><img src="https://fakeimg.pl/250x300/" /></li>
                                    <li><img src="https://fakeimg.pl/250x300/" /></li>
                                    <li><img src="https://fakeimg.pl/250x300/" /></li>
                                </ul>
                            </li>
                            <li className="col-span-1">
                                <ul className="flex flex-col gap-4">
                                    <li><img src="https://fakeimg.pl/250x300/" /></li>
                                    <li><img src="https://fakeimg.pl/250x150/" /></li>
                                    <li><img src="https://fakeimg.pl/250x300/" /></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default EventDetailPage;