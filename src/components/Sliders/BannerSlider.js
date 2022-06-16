import React from 'react'

import Slider from 'components/UI/Slider/Slider'
import BannerSliderItem from './BannerSliderItem'
import { NextArrow, PrevArrow } from 'components/UI/Slider/SliderArrow'

function BannerSlider({ sliders, ...props }) {
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
            {sliders.map((item) => {
                return <BannerSliderItem key={item.id} image_url={item.img_url} />
            })}
        </Slider>
    )
}

export default BannerSlider
