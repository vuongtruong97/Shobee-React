<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import Slider from 'common-components/UI/Slider/Slider'
import CategorySliderItem from './CategorySliderItem'
import { CateNextArr, CatePrevArrow } from 'common-components/UI/Slider/CategoriesArrow'
import useSessionStorage from 'hooks/useSessionStorage'

import categoryApi from 'services/category-api/category-api'

import SmallSpinner from 'common-components/UI/LoadingSpinner/SmallSpinner'

function CategoriesSlider() {
    const [isLoading, setIsLoading] = useState(false)
    const [sliders, setSliders] = useSessionStorage('list_cate', [])

    useEffect(() => {
        try {
            const fetchData = async () => {
                setIsLoading(true)
                const { data } = await categoryApi.getCategories()
                setIsLoading(false)
                console.log(data)
                if (data.data) {
                    setSliders(data.data)
                }
            }
            if (sliders.length === 0) {
                fetchData()
            }
        } catch (error) {
            console.log(error)
        }
    }, [sliders, setSliders])
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
=======
import React, { useEffect, useState } from 'react'
import Slider from 'common-components/UI/Slider/Slider'
import CategorySliderItem from './CategorySliderItem'
import { CateNextArr, CatePrevArrow } from 'common-components/UI/Slider/CategoriesArrow'
import useSessionStorage from 'hooks/useSessionStorage'

import categoryApi from 'services/category-api/category-api'

import SmallSpinner from 'common-components/UI/LoadingSpinner/SmallSpinner'

function CategoriesSlider() {
    const [isLoading, setIsLoading] = useState(false)
    const [sliders, setSliders] = useSessionStorage('list_cate', [])

    useEffect(() => {
        try {
            const fetchData = async () => {
                setIsLoading(true)
                const { data } = await categoryApi.getCategories()
                setIsLoading(false)
                setSliders(data.data)
            }
            if (sliders.length === 0) {
                fetchData()
            }
        } catch (error) {
            console.log(error)
        }
    }, [sliders, setSliders])
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
>>>>>>> 08311cd13073a4a2c5c27195e5a1a692c8df7a62
