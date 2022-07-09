import React, { useState, useEffect } from 'react'
import DivStyle1 from 'common-components/UI/Div/DivStyle1'
import Conversation from '../components/Conversation/Conversation'
import ListChat from '../components/ListChat/ListChat'
import socket from 'services/socketIO'

export default function Chat() {
    const [nofi, setNoti] = useState()

    useEffect(() => {
        socket.auth = { username: 'truongquocvuong' }
        socket.connect()
        socket.on('noti', (payload) => {
            setNoti(payload)
        })
        socket.on('connect_error', (err) => {
            console.log(err)
            if (err.message === 'invalid username') {
            }
        })
    }, [])

    console.log('Thông báo mới: ', nofi)

    console.log('re-render')
    return (
        <div className='row' style={{ height: '85vh' }}>
            <div className='col col-2 sm-2 lg-3'>
                <DivStyle1 maxheight>
                    <ListChat />
                </DivStyle1>
            </div>
            <div className='col col-10 sm-10 lg-9'>
                <DivStyle1 maxheight>
                    <Conversation />
                </DivStyle1>
            </div>
        </div>
    )
}
