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

const EmsServer = ({dataList}) => {
    return (
        <div className='ems-server sectionBox'>
           <div className='title'>EMS Server performance status</div>
            <div className='table-box'>
                <TableComp jsonData={dataList.cpu} thead={cpu} unit="per"/>
                <TableComp jsonData={dataList.memory} thead={memory} unit="per"/>
            </div>
        </div>
    );
};

export default EmsServer;
