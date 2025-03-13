import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';

type SwiperSlideProp = {
    src: string
}

function SwiperSlider({ src }: SwiperSlideProp) {
    return (
        <SwiperSlide>
            <img src="/sec4-keyboard.jpeg" className='rounded-3xl'/>
            <img src={src} alt={src} className='absolute top-0'/>
        </SwiperSlide>
    )
}


function KeyboardSwiper() {
    return (
        <Swiper 
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            navigation={true}
            slidesPerView={1}
            className='slide-up'
        >
            <SwiperSlider src='/sec4-cmd-r.png'></SwiperSlider>
            {/* <SwiperSlider src='/sec4-cmd-e.png'></SwiperSlider>
            <SwiperSlider src='/sec4-cmd-num.png'></SwiperSlider>
            <SwiperSlider src='/sec4-cmd-f.png'></SwiperSlider> */}
        </Swiper>
    )
}

export default KeyboardSwiper
