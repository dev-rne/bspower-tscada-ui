import TopNavi from '@components/component/TopNavi';
import Ticker from '@components/component/Ticker';
import EventConsole from '@components/sub02/EventConsole';

const Subject02 = () => {
    return (
        <div className='subject02'>
            <TopNavi />
            <div className='contents'>
                <Ticker />
                <div className='main-contents'></div>
                <EventConsole />
            </div>
        </div>
    );
};

export default Subject02;
