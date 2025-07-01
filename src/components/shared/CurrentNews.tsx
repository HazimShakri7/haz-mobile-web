'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import { Card, CardContent } from '@/components/ui/card'

export default function CurrentNews() {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1.5}
            centeredSlides={false}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
            className="w-full max-w-sm"
        >
            {Array.from({ length: 5 }).map((_, index) => (
                <SwiperSlide key={index}>
                    <Card className="rounded-xs">
                        <CardContent className="flex aspect-[4/1] items-center justify-center">
                            <span className="text-3xl font-semibold">{index + 1}</span>
                        </CardContent>
                    </Card>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
