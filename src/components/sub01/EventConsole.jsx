import { Table } from 'antd';
import jsonData from '@data/eventConsole.json'


const EventConsole = () => {
    return(
        <div className="event-console">
            <div className="title">Events Console</div>
            <div className="table">
            <Table columns={columns} dataSource={jsonData.event} pagination={false} scroll={{ y: 240 }} />
            </div>
        </div>
    )
}

const columns = [
    {
    title: 'Level',
    dataIndex: 'level',
    render: (level) => level === "critical" ? <div className="critical"><div className="circle"></div>심각</div> : level === "warn" ? <div className="warn"><div className="circle"></div>경고</div> : <div className="normal"><div className="circle"></div>일반</div>
    },
    {
      title: 'Model',
      dataIndex: 'model',
      render: model => <div className="model">{model}</div>
    },
    {
        title: 'Occurred Time',
        dataIndex: 'occurredTime',
        render: time => <div className="time">{time}</div>
    },
    {
        title: 'Device Name',
        dataIndex: 'device',
        render: device => <div className="device">{device}</div>
    },
    {
        title: 'Location',
        dataIndex: 'location',
        render: location => <div className="location">{location}</div>
    },
    {
        title: 'IP',
        dataIndex: 'IP',
        render: IP => <div className="IP">{IP}</div>
    },
    {
        title: 'Events Name',
        dataIndex: 'eventName',
        render: eventName => <div className="eventName">{eventName}</div>
    },
    {
        title: 'Event Console',
        dataIndex: 'console',
        render: console => <div className="console">{console}</div>
    },
  ];

export default EventConsole;