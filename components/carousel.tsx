import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { Banner } from '@/types';

//https://swiperjs.com/swiper-api#css-styles

interface CarouselProps {
    banners: Banner[] | undefined,
}

const Carousel: React.FC<CarouselProps> = ({
    banners
}) => {
    if (banners === undefined) {
        banners = new Array<Banner>();
        banners.push({ imageUrl: "/image/banner_1.png", imageWidth: 3400, imageHeight: 1500, title: "test", title2: "test2", englishTitle: "Agarwookd \n Package Vision" })
        banners.push({ imageUrl: "/image/banner_1.png", imageWidth: 3400, imageHeight: 1500, title: "test2", title2: "test2_2", englishTitle: "english title 2" })
    }
    return (
        <div className=' w-full px-5 bg-[#A9A9A7]'>
            <Swiper
                centeredSlides={true}
                slidesPerView={1}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                {
                    banners.map((item) => (
                        <SwiperSlide >
                            <article className='w-full flex'>
                                <p className=' fixed text-justify text-[48px]  text-black mt-[117px] ml-[185px] text-with-line-breaks '>{item.englishTitle}</p>
                                <p className=' fixed text-justify text-[32px]  text-black mt-[263px] ml-[185px]'>{item.title2}</p>
                                <p className=' fixed bottom-[40px] text-justify text-[32px]  text-black ml-[185px]'>{item.title}</p>
                                <img src={item.imageUrl} className=' float-left' alt="" width={item.imageWidth} height={item.imageHeight} />
                            </article>
                        </SwiperSlide>
                    ))
                }
                {/* <SwiperSlide >
                    <div className='w-full flex justify-center'>
                        <Image src='/image/banner_1.png' alt="" width="3400" height="1500" />
                    </div>
                </SwiperSlide> */}
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