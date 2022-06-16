import React, { useEffect, useState } from 'react'
import useSessionStorage from 'hooks/useSessionStorage'

import Banner from 'components/Banner/Banner'
import Categories from 'components/Categories/Categories'
import Modal from 'components/UI/Modal/Modal'
import HomePopUp from 'components/HomePopUp/HomePopUp'

function Home() {
    // doing first visit
    const [firstVisit, setFirstVisit] = useSessionStorage('first visit', true)

    useEffect(() => {
        const beforeUnload = () => {
            setFirstVisit(false)
        }
        window.addEventListener('beforeunload', beforeUnload)
        document.title = 'Shoppe React'

        return () => {
            window.removeEventListener('beforeunload', beforeUnload)
        }
    }, [setFirstVisit])

    const handleFirstVisit = () => {
        console.log('run run')
        setFirstVisit(false)
    }

    return (
        <div className='container'>
            {firstVisit && <HomePopUp onHide={handleFirstVisit} />}
            <Banner />
            <Categories />
        </div>
    )
}

export default Home
