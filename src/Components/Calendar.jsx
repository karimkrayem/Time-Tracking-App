import React, { useState } from 'react'
import './Calendar.css'

const Calendar = (props) => {
    const [currentDate, setCurrentDate] = useState('')


    return (
        <div className='date'>
            <span>Daily</span>
            <span>Weekly</span>
            <span>Monthly</span>
        </div>
    )

}

export default Calendar