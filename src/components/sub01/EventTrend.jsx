import Scatter from "@components/charts/Scatter";
import jsonData from '@data/mainScatter.json'

const EventTrend = () => {
    return(
        <div className="event-trend">
            <div className="title">The trend of Events</div>
            <div className="chart-box"><Scatter major={jsonData.major} warn={jsonData.warn} critical={jsonData.critical} /></div>
        </div>
    )
}

export default EventTrend