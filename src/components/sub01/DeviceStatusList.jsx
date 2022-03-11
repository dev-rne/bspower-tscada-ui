import jsonData from '@data/deviceStatusList.json';
import TableComp from '@components/component/Table';

const cpu = [
    {
        title: 'No',
        class: 'key',
    },
    {
        title: 'Device Name',
        class: 'name',
    },
    {
        title: 'CPU(%)',
        class: 'progress',
    },
];

const memory = [
    {
        title: 'No',
        class: 'key',
    },
    {
        title: 'Device Name',
        class: 'name',
    },
    {
        title: 'Memory(%)',
        class: 'progress',
    },
];

const DeviceStatusList = () => {
    return (
        <div className='status-list sectionBox'>
            <div className='title'>EMS Server performance status</div>
            <div className='table-box'>
                <TableComp jsonData={jsonData.cpu} thead={cpu} />
                <TableComp jsonData={jsonData.memory} thead={memory} />
            </div>
        </div>
    );
};

export default DeviceStatusList;
