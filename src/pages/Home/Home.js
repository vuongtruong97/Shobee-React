import React, { useEffect, useState } from 'react'
import useLocalStorage from 'hooks/useLocalStorage'

import Banner from 'components/Banner/Banner'
import Categories from 'components/Categories/Categories'
import Modal from 'components/UI/Modal/Modal'

function Home() {
    // doing first visit
    const [firstVisit, setFirstVisit] = useLocalStorage('first visit', true)

    useEffect(() => {
        const beforeUnload = () => {
            setFirstVisit(false)
        }
        console.log('run')
        window.addEventListener('beforeunload', beforeUnload)
        document.title = 'Shoppe React'

        return () => {
            window.removeEventListener('beforeunload', beforeUnload)
        }
    }, [setFirstVisit])

    return (
        <div className='container'>
            <Banner />
            <Categories />
            {firstVisit && (
                <Modal>
                    <h1>Hello</h1>
                </Modal>
            )}
        </div>
    )
}

export default Home
