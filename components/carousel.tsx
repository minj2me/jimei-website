import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

//https://swiperjs.com/swiper-api#css-styles

const Carousel = () => {
    return (
        <div className=' w-full px-5'>
            <Swiper
                centeredSlides={true}
                slidesPerView={1}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                <SwiperSlide >
                    <div className='w-full flex justify-center'>
                        <Image src={`/image/banner_1.png`} alt="" width="963" height="406" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/image/banner_1.png`} alt="" width="963" height="406" />
                </SwiperSlide>
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