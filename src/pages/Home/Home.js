import React, { useEffect } from 'react'
import useSessionStorage from 'hooks/useSessionStorage'

import Banner from 'pages/Home/components/Banner/Banner'
import Categories from 'pages/Home/components/Categories/Categories'
import HomePopUp from 'pages/Home/components/HomePopUp/HomePopUp'

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
