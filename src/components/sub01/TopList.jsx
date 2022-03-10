import { Table, Radio, Progress  } from 'antd';
import {useState} from 'react'
import jsonData from '@data/toplist.json'

const TopList = () => {
    const [radio, setRadio] = useState('rx');

    const handleModeChange = e => {
        const mode = e.target.value;
        setRadio(mode)
      };

      const columns = [
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
          title: radio === 'rx' ? 'RX(Mbps)' : 'TX(Mbps)',
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

    return(
        <div className="top-list sectionBox">
            <div className="title-box">
                <div className="title">L2 Switch Performance Top10</div>
                <Radio.Group onChange={handleModeChange} value={radio} style={{ marginBottom: 8 }}>
                    <Radio.Button value="rx">RX</Radio.Button>
                    <Radio.Button value="tx">TX</Radio.Button>
                </Radio.Group>
            </div>
            <div className="table">
                <Table columns={columns} dataSource={jsonData.list} pagination={false} size="small" scroll={{y:"100%"}} />
            </div>
        </div>
    )
}

export default TopList;