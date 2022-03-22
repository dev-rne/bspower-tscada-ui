import TopNavi from "@components/component/TopNavi";
import Ticker from "@components/component/Ticker";
import GaugeComp from "@components/sub01/GaugeComp";
import TopList from "@components/sub01/TopList";
import DeviceStatus from "@components/sub01/DeviceStatus";
import StationMap from "@components/sub01/StationMap";
import EventTrend from "@components/sub01/EventTrend";
import DeviceStatusList from "@components/sub01/DeviceStatusList";
import EventConsole from "@components/sub01/EventConsole";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";

const Subject01 = () => {
    const [eventData, setEventData] = useState([]);
    const eventTimeout = useRef(null);
    useEffect(() => {
        eventDataCall();
    }, []);

    const eventDataCall = () => {
        clearTimeout(eventTimeout.current);
        eventDataAPI();
        eventTimeout.current = setTimeout(() => {
            eventDataCall();
        }, 10000);
    };

    const eventDataAPI = async () => {
        let response = await axios.get("./data/eventConsole.json");
        console.log(JSON.stringify(response.data));
        setEventData(response.data);
    };

    return (
        <div className="subject01">
            <TopNavi />
            <div className="contents">
                <Ticker />
                <div className="main-contents">
                    <div className="left-box">
                        <GaugeComp />
                        <TopList />
                    </div>

                    <div className="center-box">
                        <DeviceStatus />
                        <StationMap />
                    </div>

                    <div className="right-box">
                        <EventTrend />
                        <DeviceStatusList />
                    </div>
                </div>
                <EventConsole dataList={eventData} />
            </div>
        </div>
    );
};

export default Subject01;
