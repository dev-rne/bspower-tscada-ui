import React, { useEffect, useState } from "react";
import EventTable from '@components/component/EventTable';

const EventConsole = (props) => {
    const { dataList } = props;
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(dataList);
    }, [dataList]);

   
    return (
        <div className='event-console sectionBox'>
            <div className="title-box">
                <div className='title'>Events Console</div>
            </div>
            <EventTable tableData={data} dashboard={false}/>
        </div>
    );
};

export default EventConsole;
