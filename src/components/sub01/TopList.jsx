import { Radio } from 'antd';
import { useState } from 'react';
import jsonData from '@data/toplist.json';
import TableComp from '@components/component/Table';

const TopList = ({dataList}) => {
    const [radio, setRadio] = useState('rx');

    const handleModeChange = (e) => {
        const mode = e.target.value;
        setRadio(mode);
    };

    const RX = [
        {
            title: 'No',
            class: 'key',
        },
        {
            title: 'Device Name',
            class: 'name',
        },
        {
            title: 'RX(Mbps)',
            class: 'progress',
        },
    ];

    const TX = [
        {
            title: 'No',
            class: 'key',
        },
        {
            title: 'Device Name',
            class: 'name',
        },
        {
            title: 'TX(Mbps)',
            class: 'progress',
        },
    ];

    return (
        <div className='top-list sectionBox'>
            <div className='title-box'>
                <div className='title'>L2 Switch Performance Top10</div>
                <Radio.Group
                    onChange={handleModeChange}
                    value={radio}
                    style={{ marginBottom: 8 }}
                >
                    <Radio.Button value='rx'>RX</Radio.Button>
                    <Radio.Button value='tx'>TX</Radio.Button>
                </Radio.Group>
            </div>
            <TableComp
                jsonData={radio === 'rx' ? dataList.RX : dataList.TX}
                thead={radio === 'rx' ? RX : TX}
            />
        </div>
    );
};

export default TopList;
