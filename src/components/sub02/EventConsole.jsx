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
            <div className='title'>Events Console</div>
            <EventTable tableData={data} />
        </div>
    );
};

export default EventConsole;
