import { useState, useEffect } from "react";
// import jsonData from "@data/eventStatus.json";
import Marquee from "react-fast-marquee";

const EventStatus = (props) => {
    const { dataList } = props;
    const critical = dataList.filter((list) => list.level === "critical");
    const warn = dataList.filter((list) => list.level === "warn");
    const normal = dataList.filter((list) => list.level === "normal");
    const [event, setEvent] = useState("major");
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        console.log("eventList :: " + eventList);
        if (event === "critical") setEventList(critical);
        if (event === "warn") setEventList(warn);
        if (event === "major") setEventList(normal);
    }, [event, dataList]);

    const handleEvent = (value) => {
        setEvent(value);
    };

    return (
        <div className="event-status">
            <div className="event-box">
                <div
                    className={
                        event === "critical"
                            ? "critical select event"
                            : "critical event"
                    }
                    onClick={() => handleEvent("critical")}
                >
                    <div className="name">
                        <div className="box"></div>
                        <span>Critical</span>
                    </div>
                    <img
                        className="alert"
                        src={require(`@assets/critical.png`)}
                        alt=""
                    />
                    <div className="value">{critical.length}</div>
                </div>
                <div
                    className={
                        event === "warn" ? "warn select event" : "warn event"
                    }
                    onClick={() => handleEvent("warn")}
                >
                    <div className="name">
                        <div className="box"></div>
                        <span>Warning</span>
                    </div>
                    <img src={require(`@assets/warn.png`)} alt="" />
                    <div className="value">{warn.length}</div>
                </div>
                <div
                    className={
                        event === "major" ? "major select event" : "major event"
                    }
                    onClick={() => handleEvent("major")}
                >
                    <div className="name">
                        <div className="box"></div>
                        <span>Major</span>
                    </div>
                    <img src={require(`@assets/major.png`)} alt="" />
                    <div className="value">{normal.length}</div>
                </div>
            </div>
            <div className="ticker-box">
                <div className="overFlowBox">
                    <div className="tickerList">
                        <Marquee speed={50} pauseOnHover={true}>
                            {eventList &&
                                eventList.map((list, i) => {
                                    return (
                                        <div
                                            className={list.level + " li"}
                                            key={i}
                                        >
                                            {list.console}
                                        </div>
                                    );
                                })}
                        </Marquee>
                        {/* {jsonData.event
                            .filter((list) => list.img === event)[0]
                            .eventList.map((list, idx) => {
                                return (
                                    <div className="list" key={idx}>
                                        {list}
                                    </div>
                                );
                            })} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventStatus;
