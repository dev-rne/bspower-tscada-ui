import TopNavi from "@components/component/TopNavi";
import Ticker from "@components/component/Ticker";
import GaugeComp from "@components/sub01/GaugeComp";
import TopList from "@components/sub01/TopList";
import DeviceStatus from "@components/sub01/DeviceStatus";
import StationMap from "@components/sub01/StationMap";
import EventTrend from "@components/sub01/EventTrend";
import DeviceStatusList from "@components/sub01/DeviceStatusList";
import EventConsole from "@components/sub01/EventConsole";
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    eventDataAPI,
    deviceStatusAPI,
    statusTop10API,
    EMSStatusAPI,
    eventTrendAPI,
} from "../features/main";

const Subject01 = () => {
    const { eventData, deviceStatus, topList, emsList, eventTrend } =
        useSelector((state) => state.main);
    const dispatch = useDispatch();
    const eventTimeout = useRef(null);

    useEffect(() => {
        eventDataCall();
    }, []);

    const eventDataCall = () => {
        clearTimeout(eventTimeout.current);
        dispatch(eventDataAPI());
        dispatch(deviceStatusAPI());
        dispatch(statusTop10API());
        dispatch(EMSStatusAPI());
        dispatch(eventTrendAPI());
        eventTimeout.current = setTimeout(() => {
            eventDataCall();
        }, 10000);
    };

    return (
        <div className="subject01">
            <TopNavi />
            <div className="contents">
                <Ticker dataList={eventData} />
                <div className="main-contents">
                    <div className="left-box">
                        <GaugeComp dataList={eventData} />
                        <TopList dataList={topList} />
                    </div>

                    <div className="center-box">
                        <DeviceStatus dataList={deviceStatus.device} />
                        <StationMap />
                    </div>

                    <div className="right-box">
                        <EventTrend dataList={eventTrend} />
                        <DeviceStatusList dataList={emsList} />
                    </div>
                </div>
                <EventConsole dataList={eventData} />
            </div>
        </div>
    );
};

export default Subject01;
