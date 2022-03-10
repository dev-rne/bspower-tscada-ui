import { Table, Progress } from 'antd';
import jsonData from '@data/deviceStatusList.json';

const columns = (value) => {
    return [
        {
        title: 'No',
        dataIndex: 'key',
        render: (key) => <div className="no">{key}</div>
        },
        {
          title: 'Device Name',
          dataIndex: 'name',
          render: name => <div className="name">{name}</div>
        },
        {
          title: `${value}(%)`,
          dataIndex: 'value',
          render: (value) => (
            <Progress
                strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
                percent={value}
                />
          ),
        },
      ];
}

const DeviceStatusList = () => {
    return(
        <div className="status-list">
            <div className="title">
            EMS Server performance status
            </div>
            <div className="table-box">
            <Table columns={columns('CPU')} dataSource={jsonData.cpu} pagination={false} />
            <Table columns={columns('Memory')} dataSource={jsonData.memory} pagination={false} />
            </div>
        </div>
    )
}

export default DeviceStatusList;