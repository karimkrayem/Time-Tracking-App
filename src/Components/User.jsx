import './User.css'
import jeremy from '../time-tracking-dashboard-main/images/image-jeremy.png'
import Calendar from './Calendar'
const User = () => {

    return (
        <div className="user">
            <div className='user-info'>
                <img src={jeremy} alt="" />
                <p>Report for</p>
                <h1>Jeremy Robson</h1>
            </div>
            <Calendar />

        </div>
    )

}

export default User