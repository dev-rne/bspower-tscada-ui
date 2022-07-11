import { useState, useEffect } from "react";
// import jsonData from "@data/eventStatus.json";
import Marquee from "react-fast-marquee";

const EventStatus = (props) => {
    const { dataList } = props;
    const critical = dataList.filter((list) => list.severity === "CRITICAL");
    const trouble = dataList.filter((list) => list.severity === "TROUBLE");
    const attention = dataList.filter((list) => list.severity === "ATTENTION");
    const [event, setEvent] = useState("");
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        console.log("eventList :: " + eventList);
        if (event === "critical") setEventList(critical);
        if (event === "trouble") setEventList(trouble);
        if (event === "attention") setEventList(attention);
    }, [event, dataList]);

    const handleEvent = (value) => {
        // setEvent(value);
    };

    return (
        <div className="event-status">
            <div className="event-box">
                <div className="critical event">
                    <div className="name">
                        <div className="box"></div>
                        <span>Critical</span>
                    </div>
                    <img
                        className={event === "critical" ? "alert" : ""}
                        src={require(`@assets/critical.png`)}
                        alt=""
                    />
                    <div className="value">{critical.length}</div>
                </div>
                <div className="trouble event">
                    <div className="name">
                        <div className="box"></div>
                        <span>Trouble</span>
                    </div>
                    <img
                        src={require(`@assets/trouble.png`)}
                        alt=""
                        className={event === "trouble" ? "alert" : ""}
                    />
                    <div className="value">{trouble.length}</div>
                </div>
                <div className="attention event">
                    <div className="name">
                        <div className="box"></div>
                        <span>Attention</span>
                    </div>
                    <img
                        src={require(`@assets/attention.png`)}
                        alt=""
                        className={event === "attention" ? "alert" : ""}
                    />
                    <div className="value">{attention.length}</div>
                </div>
            </div>
            {/* <div className="ticker-box">
                <div className="overFlowBox">
                    <div className="tickerList">
                        <Marquee speed={50} pauseOnHover={true}>
                            {eventList &&
                                eventList.map((list, i) => {
                                    return (
                                        <div
                                            className={list.severity + " li"}
                                            key={i}
                                        >
                                            {list.conditionLog}
                                        </div>
                                    );
                                })}
                        </Marquee>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default EventStatus;
