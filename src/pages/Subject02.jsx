import TopNavi from '@components/component/TopNavi';
import Ticker from '@components/component/Ticker';
import EventConsole from '@components/sub02/EventConsole';
import ManagementStatus from '@components/sub02/ManagementStatus';
import EventTrend from '@components/sub02/EventTrend'
import DeviceEvents from '@components/sub02/DeviceEvents';
import EmsServer from '@components/sub02/EmsServer'

const Subject02 = () => {
    return (
        <div className='subject02'>
            <TopNavi />
            <div className='contents'>
                <Ticker />
                <div className='main-contents'>
                    <EventTrend/>
                    <DeviceEvents/>
                    <EmsServer/>
                </div>
                <ManagementStatus />
                <EventConsole />
            </div>
        </div>
    );
};

export default Subject02;
