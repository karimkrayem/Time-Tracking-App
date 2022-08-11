import React, { useState } from 'react'
import './User.css'
import jeremy from '../time-tracking-dashboard-main/images/image-jeremy.png'
import Calendar from './Calendar'
const User = (props) => {
    const changeDate = (enteredDate) => {
        const datechanger = enteredDate
        props.onTest(datechanger)

    }

    return (
        <div className="user">
            <div className='user-info'>
                <img src={jeremy} alt="" />
                <p>Report for</p>
                <h1>Jeremy Robson</h1>
            </div>
            <Calendar onChangeHandler={changeDate} />

        </div>
    )

}

export default User