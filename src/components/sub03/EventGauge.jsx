import Gauge from '@components/charts/sub3Gauge'
import Gauge2 from '@components/charts/sub3Gauge2'

const EventGauge = () =>{
    return(
        <div className="event-gauge">
            <div className="title">
                The status of Events
            </div>
            <div className="gauge-charts">
                <div className="chart">
                <Gauge2 data={70}/>
                <div className="chart-name">Humidity</div>
                </div>
                <div className="chart">
                <Gauge data={20}/>
                <div className="chart-name">Temperature</div>
                </div>
            </div>
        </div>
    )
}

export default EventGauge;