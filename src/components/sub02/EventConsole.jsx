import React, { useEffect, useState } from "react";
import EventTable from "@components/component/EventTable";

const EventConsole = (props) => {
    const { dataList } = props;
    const critical = dataList.filter((list) => list.level === "critical");
    const warn = dataList.filter((list) => list.level === "warn");
    const major = dataList.filter((list) => list.level === "normal");
    const [data, setData] = useState([]);
    const [evnetInfo, setEventInfo] = useState({
        critical: true,
        warn: true,
        major: true,
    });
    useEffect(() => {
        let dataArr = dataList.filter((obj) => {
            let bool = false;
            if (evnetInfo.critical && obj.level === "critical") bool = true;
            if (evnetInfo.warn && obj.level === "warn") bool = true;
            if (evnetInfo.major && obj.level === "normal") bool = true;

            if (bool) return obj;
        });
        setData(dataArr);
        // setData(dataList);
    }, [dataList]);

    useEffect(() => {
        console.log("evnetInfo ::: " + JSON.stringify(evnetInfo));
        let dataArr = dataList.filter((obj) => {
            let bool = false;
            if (evnetInfo.critical && obj.level === "critical") bool = true;
            if (evnetInfo.warn && obj.level === "warn") bool = true;
            if (evnetInfo.major && obj.level === "normal") bool = true;

            if (bool) return obj;
        });
        setData(dataArr);
    }, [evnetInfo]);

    return (
        <div className="event-console sectionBox">
            <div className="title-box">
                <div className="title">
                    Events Console
                    <div className="event-btn-area">
                        <div
                            className={
                                "event-btn major" +
                                `${evnetInfo.major ? " active" : ""}`
                            }
                            onClick={(e) => {
                                evnetInfo.major = evnetInfo.major
                                    ? false
                                    : true;
                                setEventInfo({
                                    major: evnetInfo.major,
                                    warn: evnetInfo.warn,
                                    critical: evnetInfo.critical,
                                });
                            }}
                        >
                            major<span>{"(" + major.length + ")"}</span>
                        </div>
                        <div
                            className={
                                "event-btn warn" +
                                `${evnetInfo.warn ? " active" : ""}`
                            }
                            onClick={() => {
                                evnetInfo.warn = evnetInfo.warn ? false : true;
                                setEventInfo({
                                    major: evnetInfo.major,
                                    warn: evnetInfo.warn,
                                    critical: evnetInfo.critical,
                                });
                            }}
                        >
                            warn<span>{"(" + warn.length + ")"}</span>
                        </div>
                        <div
                            className={
                                "event-btn critical" +
                                `${evnetInfo.critical ? " active" : ""}`
                            }
                            onClick={() => {
                                evnetInfo.critical = evnetInfo.critical
                                    ? false
                                    : true;
                                setEventInfo({
                                    major: evnetInfo.major,
                                    warn: evnetInfo.warn,
                                    critical: evnetInfo.critical,
                                });
                            }}
                        >
                            critical<span>{"(" + critical.length + ")"}</span>
                        </div>
                    </div>
                </div>
            </div>
            <EventTable tableData={data} dashboard={false} />
        </div>
    );
};

export default EventConsole;
