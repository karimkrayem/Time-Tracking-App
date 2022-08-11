import './Cards.css'
import Elipse from '../time-tracking-dashboard-main/images/icon-ellipsis.svg'


const Cards = (props) => {

    return (
        <div className={'cards ' + props.title}>
            <div className="inner-content">
                <div className={'inner-card ' + props.title}  >

                </div>
                <div className={`body-card `}>
                    <div className='title'>
                        <h4>{props.title}</h4>
                        <span>...</span>

                    </div>
                    <h1>{props.hours}hrs</h1>
                    <p>{props.prevhours}hrs</p>
                </div>

            </div>
        </div>
    )
}

export default Cards