import React, { useEffect, useState } from 'react'
import Slider from 'components/UI/Slider/Slider'
import CategorySliderItem from './CategorySliderItem'
import { CateNextArr, CatePrevArrow } from 'components/UI/Slider/CategoriesArrow'
import useSessionStorage from 'hooks/useSessionStorage'

import SmallSpinner from 'components/UI/LoadingSpinner/SmallSpinner'

function CategoriesSlider() {
    // const [sliders, setSliders] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [sliders, setSliders] = useSessionStorage('sliders', [])

    useEffect(() => {
        try {
            const fetchData = async () => {
                setIsLoading(true)
                const res = await fetch(
                    'https://shopeebe.herokuapp.com/categories/list-category',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            filter: {
                                id: 1,
                            },
                            sort: {
                                createdAt: 1,
                            },
                            paging: {
                                start: 0,
                                limit: 30,
                            },
                        }),
                    }
                )
                const data = await res.json()
                setSliders(data.data)
                setIsLoading(false)
            }
            if (sliders.length === 0) {
                fetchData()
            }
        } catch (error) {
            console.log(error)
        }
    }, [sliders])
    const settings = {
        infinite: false,
        slidesToShow: 10,
        slidesToScroll: 3,
        swipeToSlide: true,
        rows: 2,
        // lazyLoad: true,
        nextArrow: <CateNextArr />,
        prevArrow: <CatePrevArrow />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    rows: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    swipeToSlide: true,
                    rows: 2,
                },
            },
        ],
    }
    return (
        <>
            {isLoading && (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '2rem  0',
                    }}
                >
                    <SmallSpinner />
                </div>
            )}
            {!isLoading && (
                <Slider settings={settings}>
                    {sliders.map((item) => (
                        <CategorySliderItem
                            slug={item.slug}
                            key={item._id}
                            name={item.display_name}
                            image_url={item.image_url}
                        />
                    ))}
                </Slider>
            )}
        </>
    )
}

export default CategoriesSlider
