import TopNavi from "@components/component/TopNavi";
import Ticker from "@components/component/Ticker";
import GaugeComp from "@components/sub01/GaugeComp";
import TopList from "@components/sub01/TopList";
import DeviceStatus from "@components/sub01/DeviceStatus";
import StationMap from "@components/sub01/StationMap";
import EventTrend from "@components/sub01/EventTrend";
import DeviceStatusList from "@components/sub01/DeviceStatusList";
import EventConsole from "@components/sub01/EventConsole";
import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEventData, setDeviceStatusData, setStatusTopListData } from "@features/main";
import axios from "axios";

const Subject01 = () => {
    const { eventData, deviceStatus, topList } =  useSelector((state) => state.main);
    const dispatch = useDispatch();
    const eventTimeout = useRef(null);

    useEffect(() => {
        deviceStatusAPI();
        eventDataAPI();
        eventDataCall();
        statusTop10API();
    }, []);

    const eventDataCall = () => {
        eventTimeout.current = setTimeout(() => {
            eventDataAPI();
        }, 10000);
        eventTimeout.current = setTimeout(() => {
            deviceStatusAPI();
        }, 10000);
    };

    const eventDataAPI = async () => {
        let response = await axios.get("./data/eventConsole.json");
        dispatch(setEventData(response.data));
    };

    const deviceStatusAPI = async () => {
        let response = await axios.get("./data/deviceStatus.json");
        dispatch(setDeviceStatusData(response.data));
    };

    const statusTop10API = async () => {
        let response = await axios.get("./data/toplist.json");
        dispatch(setStatusTopListData(response.data));
    };

    

    return (
        <div className="subject01">
            <TopNavi />
            <div className="contents">
                <Ticker dataList={eventData} />
                <div className="main-contents">
                    <div className="left-box">
                        <GaugeComp dataList={eventData}/>
                        <TopList dataList={topList} />
                    </div>

                    <div className="center-box">
                        <DeviceStatus dataList={deviceStatus.device} />
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
