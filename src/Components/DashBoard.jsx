import './DashBoard.css'
import React, { useState, useEffect } from 'react'
import User from './User'
import Cards from './Cards'
import './Cards.css'
import Data from '../data.json'

const DashBoard = (props) => {
    const data = Data
    const [currData, setCurrData] = useState("daily")

    const addChangeDate = expense => {
        setCurrData(expense)
    }
    return (
        <div className='DashBoard'>
            <User onTest={addChangeDate} />
            <div className='d-flex'>
                {data.map((item) => {
                    console.log(setCurrData)
                    if (currData === 'Daily') {
                        return <Cards title={item.title} time="Last day" hours={item.timeframes.daily.current} prevhours={item.timeframes.daily.previous} />
                    } else if (currData === 'Weekly') {

                        return <Cards date={"test"} time="Last week" title={item.title} hours={item.timeframes.weekly.current} prevhours={item.timeframes.weekly.previous} />
                    } else if (currData === 'Monthly') {

                        return <Cards date={"test"} time="Last month" title={item.title} hours={item.timeframes.monthly.current} prevhours={item.timeframes.monthly.previous} />
                    }
                    return <Cards title={item.title} time="Last day" hours={item.timeframes.daily.current} prevhours={item.timeframes.daily.previous} />
                })

                }
            </div>
        </div>)
}

export default DashBoard