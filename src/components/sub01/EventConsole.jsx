import React, { useEffect, useState } from "react";
import EventTable from "@components/component/EventTable";
import { Badge } from 'antd';

const EventConsole = (props) => {
    const { dataList } = props;

    const critical = dataList.filter((list) => list.level === "critical");
    const trouble = dataList.filter((list) => list.level === "trouble");
    const attention = dataList.filter((list) => list.level === "attention");

    const [data, setData] = useState([]);

    const [evnetInfo, setEventInfo] = useState({
        critical: true,
        trouble: true,
        attention: true,
    });

    useEffect(() => {
        let dataArr = dataList.filter((obj) => {
            let bool = false;
            if (evnetInfo.critical && obj.level === "critical") bool = true;
            if (evnetInfo.trouble && obj.level === "trouble") bool = true;
            if (evnetInfo.attention && obj.level === "attention") bool = true;

            if (bool) return obj;
        });
        setData(dataArr);
        // setData(dataList);
    }, [dataList, evnetInfo]);

    return (
        <div className="event-console sectionBox">
            <div className="title-box">
                <div className="title">
                    Events Console </div>
                    <div className="event-btn-area">
                    <Badge size="small" count={attention.length} color="#fda605" className={evnetInfo.attention ? "badgeActive" : ""}>
                        <div
                            className={evnetInfo.attention ? "active event-btn attention" : "event-btn attention"
                            }
                            onClick={() =>  {
                                evnetInfo.attention = !evnetInfo.attention;
                                setEventInfo({
                                    ...evnetInfo,
                                    attention: evnetInfo.attention,
                                });
                            }}
                        >
                            attention
                        </div></Badge>
                        <Badge size="small" count={critical.length} color="#ff6f1c"  className={evnetInfo.trouble ? "badgeActive" : ""}>
                        <div
                            className={evnetInfo.trouble ? "active event-btn trouble" : "event-btn trouble"}
                            onClick={() => {
                                evnetInfo.trouble = !evnetInfo.trouble;
                                setEventInfo({
                                    ...evnetInfo,
                                    trouble: evnetInfo.trouble,
                                });
                            }}
                        >
                            trouble
                        </div></Badge>
                        <Badge size="small" count={trouble.length} color="#f51212"  className={evnetInfo.critical ? "badgeActive" : ""}>
                        <div
                            className={
                                evnetInfo.critical ? "active event-btn critical" : "event-btn critical"}
                            onClick={() => {
                                evnetInfo.critical = !evnetInfo.critical
                                setEventInfo({
                                    ...evnetInfo,
                                    critical: evnetInfo.critical,
                                });
                            }}
                        >
                            critical
                        </div> </Badge>
                    </div>
               
            </div>
            <EventTable tableData={data} dashboard={true} />
        </div>
    );
};

export default EventConsole;
