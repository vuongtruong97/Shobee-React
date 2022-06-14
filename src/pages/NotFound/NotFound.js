import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2 style={{ fontSize: '3rem' }}>(404) Page Not Found</h2>
            <Link style={{ fontSize: '2.5rem' }} to='/'>
                Go back home
            </Link>
        </section>
    )
}

export default NotFound
