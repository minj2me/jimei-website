
"use client";
import Carousel from "@/components/carousel";
import EventList from "@/components/event-list";
import EventSubList from "@/components/event-sub-list";

//https://chakra-ui.com/docs/components
//https://blog.csdn.net/Erin_jwx/article/details/125351491

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Carousel banners={undefined} />
      <div className="h-[80px]" />
      <EventList events={undefined} />
      <div className="h-[80px]" />
      <EventSubList events={undefined} />
      <div className="h-[150px]" />
      <button className=" border-2 border-[#000000] rounded-lg w-[140px] h-[60px] text-black text-center text-[18px]">浏览更多</button>
    </div>
  );
}
