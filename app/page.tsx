
"use client";
import Carousel from "@/components/carousel";
import EventList from "@/components/event-list";

//https://chakra-ui.com/docs/components
//https://blog.csdn.net/Erin_jwx/article/details/125351491

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Carousel banners={undefined}/>
      <div className="h-[107px]"/>
      <EventList events={undefined}/>
    </div>
  );
}
