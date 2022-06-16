import React, { useState } from 'react'
import styles from './SortBar.module.scss'

import { Transition } from 'react-transition-group'
import { IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const duration = 300
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
}

function SortBar() {
    const [showPriceOptions, setShowPriceOptions] = useState(false)

    const handleShowPriceFilter = () => {
        setShowPriceOptions(true)
    }
    const handleHidePriceFilter = () => {
        setShowPriceOptions(false)
    }
    return (
        <div className={styles.sortBar}>
            <span className={styles.label}>Sắp xếp theo</span>
            <div className={styles.sortOptions}>
                <div className={styles.option}>Phổ biến</div>
                <div className={styles.option}>Bán chạy</div>
                <div className={styles.option}>Mới nhất</div>
                <div
                    onMouseEnter={handleShowPriceFilter}
                    onMouseLeave={handleHidePriceFilter}
                    className={`${styles.option} ${styles.priceOptions}`}
                >
                    <span>Giá</span>
                    <span>
                        <IoIosArrowDown />
                    </span>

                    <Transition
                        mountOnEnter
                        unmountOnExit
                        in={showPriceOptions}
                        timeout={duration}
                    >
                        {(state) => (
                            <div
                                style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state],
                                }}
                                className={styles.list}
                            >
                                <div className={styles.priceOption}>giá thấp đến cao</div>
                                <div className={styles.priceOption}>giá thấp đến cao</div>
                            </div>
                        )}
                    </Transition>
                </div>
            </div>
            <div className={styles.miniPaging}>
                <div className={styles.pageState}>{`${1}/${50}`}</div>
                <div className={`${styles.pageControl} ${styles.prev}`}>
                    <IoIosArrowBack />
                </div>
                <div className={styles.pageControl}>
                    <IoIosArrowForward />
                </div>
            </div>
        </div>
    )
}

export default SortBar
