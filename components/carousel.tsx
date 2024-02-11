import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const Carousel = () => {
    return (
        <div>
            <Swiper
                className=' w-screen h-[400px] bg-slate-400'
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                <SwiperSlide className=' ml-9 mt-9'>
                    <Image alt="" width={200} height={300} src={"https://python.langchain.com/assets/images/langchain_stack-f21828069f74484521f38199910007c1.svg"}></Image>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
            </Swiper>
            <style jsx global>
                {`
           .swiper-pagination {
             text-align: right;
             padding-right: 10px;
           }
           .swiper-pagination-bullet {
             border-radius: 0;
           }
         `}
            </style>
        </div>
    );
}

export default Carousel;