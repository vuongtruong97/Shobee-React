import React from 'react'

import BannerSlider from 'components/Sliders/BannerSlider'

import styles from './Banner.module.scss'

function Banner() {
    return (
        <div className='row'>
            <div className='col col-12 md-12 lg-8'>
                <BannerSlider />
            </div>
            <div className='col col-0 md-0 lg-4'>
                <div className={styles['sub-banner']}>
                    <div
                        className={styles['sub-banner-item']}
                        style={{
                            backgroundImage:
                                'url("https://cf.shopee.vn/file/cbc911a29a2807f970c6cec83708f199_xhdpi")',
                        }}
                    ></div>
                    <div
                        className={styles['sub-banner-item']}
                        style={{
                            backgroundImage:
                                'url("https://cf.shopee.vn/file/411cd49f0ef82eafb1bda88bd6db46ed_xhdpi")',
                        }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default Banner
