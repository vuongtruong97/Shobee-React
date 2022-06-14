import React from 'react'

import LoadingSpinner from 'components/UI/LoadingSpinner/LoadingSpinner'

function Loading() {
    return (
        <div
            style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <LoadingSpinner />
        </div>
    )
}

export default Loading
