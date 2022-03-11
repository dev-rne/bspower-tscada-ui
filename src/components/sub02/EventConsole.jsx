import jsonData from '@data/eventConsole.json';
import EventTable from '@components/component/EventTable';

const EventConsole = () => {
    return (
        <div className='event-console'>
            <div className='title'>Events Console</div>
            <EventTable tableData={jsonData} />
        </div>
    );
};

export default EventConsole;
