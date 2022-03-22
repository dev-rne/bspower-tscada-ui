import React, { useEffect, useState } from "react";
// import jsonData from "@data/eventConsole.json";
import EventTable from "@components/component/EventTable";

const EventConsole = (props) => {
    const { dataList } = props;
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(dataList);
    }, [dataList]);

    return (
        <div className="event-console">
            <div className="title">Events Console</div>
            <EventTable tableData={data} />
        </div>
    );
};

export default EventConsole;
