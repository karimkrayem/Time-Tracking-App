import './DashBoard.css'
import React, { useState, useEffect } from 'react'
import User from './User'
import Cards from './Cards'
import Data from '../data.json'
import Exercice from '../time-tracking-dashboard-main/images/icon-exercise.svg'
import Play from '../time-tracking-dashboard-main/images/icon-play.svg'
import Selfcare from '../time-tracking-dashboard-main/images/icon-self-care.svg'
import Social from '../time-tracking-dashboard-main/images/icon-social.svg'
import Study from '../time-tracking-dashboard-main/images/icon-study.svg'
import Work from '../time-tracking-dashboard-main/images/icon-work.svg'
import './Cards.css'


const DashBoard = (props) => {
    const data = Data
    const [currData, setCurrData] = useState([])


    // const classes = [
    //     {
    //         background: 'exercice',
    //         image: exercice
    //     },
    //     {
    //         background: 'play',
    //         image: play
    //     },
    //     {
    //         background: 'selfcare',
    //         image: selfcare
    //     },
    //     {
    //         background: 'social',
    //         image: social
    //     },
    //     {
    //         background: 'study',
    //         image: study
    //     },
    //     {
    //         background: 'work',
    //         image: work
    //     },
    // ]


    const classBg = ['exercice', 'play', 'selfcare', 'social', 'study', 'work']

    console.log(classBg)
    // data.push(classBg)
    return (
        <div className='DashBoard'>

            <User />
            <div className='d-flex'>


                {data.map((item) => {


                    return <Cards title={item.title} hours={item.timeframes.daily.current} prevhours={item.timeframes.daily.previous} />


                })

                })
                {/* <div className='d-flex'>
                    

                    <Cards bg={'play'} img={play} title={data[1].title} hours={data[1].timeframes.daily.current} prevhours={data[1].timeframes.daily.previous} />
                    <Cards bg={'study'} img={study} title={data[2].title} hours={data[2].timeframes.daily.current} prevhours={data[2].timeframes.daily.previous} />
                </div>
                <div className='d-flex'>
                    <Cards bg={'exercise'} img={exercice} title={data[3].title} hours={data[3].timeframes.daily.current} prevhours={data[3].timeframes.daily.previous} />
                    <Cards bg={'social'} img={social} title={data[4].title} hours={data[4].timeframes.daily.current} prevhours={data[4].timeframes.daily.previous} />
                    <Cards bg={'selfcare'} img={selfcare} title={data[5].title} hours={data[5].timeframes.daily.current} prevhours={data[5].timeframes.daily.previous} />
                </div> */}
            </div>




        </div>)


}

export default DashBoard