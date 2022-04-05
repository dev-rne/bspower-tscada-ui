import TopNavi from "@components/component/TopNavi";
import Ticker from "@components/component/Ticker";
import GaugeComp from "@components/sub01/GaugeComp";
import ManagementStatus from "@components/sub01/ManagementStatus";
import EventDeviceTable from '@components/sub01/EventDeviceTable'
import StationMap from "@components/sub01/StationMap";
import EventConsole from "@components/sub01/EventConsole";
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    eventDataAPI,
    deviceStatusAPI,
    eventDeviceTable,
    todayEventAPI
} from "../features/main";

const Subject01 = () => {
    const { eventData, deviceStatus, eventDeviceList, todayData } =
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
        dispatch(eventDeviceTable());
        dispatch(todayEventAPI());
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
                        <GaugeComp dataList={todayData} />
                        <EventDeviceTable thead={eventDeviceList.thead} tbody={eventDeviceList.tbody} />
                    </div>

                    <div className="center-box">
                        <ManagementStatus dataList={deviceStatus.device} />
                        <StationMap />
                    </div>
                </div>
                <EventConsole dataList={eventData} />
            </div>
        </div>
    );
};

export default Subject01;
