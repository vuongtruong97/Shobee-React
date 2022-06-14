import React from 'react'

import Slider from 'components/UI/Slider/Slider'
import BannerSliderItem from './BannerSliderItem'
import { NextArrow, PrevArrow } from 'components/UI/Slider/SliderArrow'

const DUMMY_SLIDER = [
    {
        id: 12,
        img_url: 'https://cf.shopee.vn/file/3a2dd7df04d32eafe2d8ae679287fe76_xxhdpi',
        alt: 'sale_6-6',
        target_url: '',
    },
    {
        id: 22,
        img_url: 'https://cf.shopee.vn/file/89e583b205e1069860ee7150f4a5bf97_xxhdpi',
        alt: 'sale_6-6',
        target_url: '',
    },
    {
        id: 32,
        img_url: 'https://cf.shopee.vn/file/1653a7e2377de0049716f655a71acb4b_xxhdpi',
        alt: 'sale_6-6',
        target_url: '',
    },
]
function BannerSlider() {
    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: (dots) => (
            <div
                style={{
                    bottom: 0,
                }}
            >
                <ul style={{ margin: '0px' }}> {dots} </ul>
            </div>
        ),
        customPaging: (i) => <div className={'custom-paging'}></div>,
    }
    return (
        <Slider settings={settings}>
            {DUMMY_SLIDER.map((item) => {
                return <BannerSliderItem key={item.id} image_url={item.img_url} />
            })}
        </Slider>
    )
}

export default BannerSlider
