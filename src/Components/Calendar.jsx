import React, { useState } from 'react'
import './Calendar.css'

const Calendar = (props) => {
    const [title, setTitle] = useState('Daily');

    const clickHandler = (e) => {
        setTitle(e.target.innerHTML)
        console.log(e.target.innerHTML)
        props.onChangeHandler(e.target.innerHTML)
    };


    return (
        <div className='date'>
            <span value="daily" className='day' onClick={clickHandler} >Daily</span>
            <span value="weekly" className='day' onClick={clickHandler}>Weekly</span>
            <span value="monthly" className='day' onClick={clickHandler} >Monthly</span>
        </div>
    )

}

export default Calendar