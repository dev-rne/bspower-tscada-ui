import Line from '@components/charts/Line'
import jsonData from '@data/eventsTrend.json';

const EventTrend = () => {
    return (
        <div className='event-trend sectionBox'>
           <div className='title'>The trend of Events</div>
            <div className='chart-box'>
                <Line data={jsonData.data}/>
            </div>
        </div>
    );
};

export default EventTrend;
