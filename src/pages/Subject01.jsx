import TopNavi from "@components/component/TopNavi";
import Ticker from "@components/component/Ticker";
import GaugeComp from "@components/sub01/GaugeComp";
import ManagementStatus from "@components/sub01/ManagementStatus";
import EventDeviceTable from "@components/sub01/EventDeviceTable";
import StationMap from "@components/sub01/StationMap";
import EventConsole from "@components/sub01/EventConsole";
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    eventDataAPI,
    deviceStatusAPI,
    eventDeviceTable,
    todayEventAPI,
} from "../features/main";

const Subject01 = () => {
    const { eventData, deviceStatus, eventDeviceList, todayData, page } =
        useSelector((state) => state.main);
    const dispatch = useDispatch();
    const eventTimeout = useRef(null);
    const [stationEvent, setStationEvent] = useState([
        {
            title: "Tsogttsetsii",
            station: "Tsetsii",
            ATTENTION: 0,
            TROUBLE: 0,
            CRITICAL: 0,
        },
        {
            title: "Khongor tolgoi",
            station: "SIDING Station #1",
            ATTENTION: 0,
            TROUBLE: 0,
            CRITICAL: 0,
        },
        {
            title: "Ar khonglidog",
            station: "SIDING Station #2",
            ATTENTION: 0,
            TROUBLE: 0,
            CRITICAL: 0,
        },
        {
            title: "Bayanbulag",
            station: "SIDING Station #3",
            ATTENTION: 0,
            TROUBLE: 0,
            CRITICAL: 0,
        },
        {
            title: "Khunkhar Zag",
            station: "SIDING Station #4",
            ATTENTION: 0,
            TROUBLE: 0,
            CRITICAL: 0,
        },
        {
            title: "Bor khoshuu",
            station: "SIDING Station #5",
            ATTENTION: 0,
            TROUBLE: 0,
            CRITICAL: 0,
        },
        {
            title: "Khulangiin Shand",
            station: "SIDING Station #6",
            ATTENTION: 0,
            TROUBLE: 0,
            CRITICAL: 0,
        },
        {
            title: "Zuunbayan Station",
            station: "OCC",
            ATTENTION: 0,
            TROUBLE: 0,
            CRITICAL: 0,
        },
    ]);
    const [stationEvent2, setStationEvent2] = useState([
        {
            title: "Base Station 1",
            station: "BaseStation1",
            ATTENTION: 0,
            TROUBLE: 0,
            CRITICAL: 0,
        },
        {
            title: "Base Station 2",
            station: "BaseStation2",
            ATTENTION: 0,
            TROUBLE: 0,
            CRITICAL: 0,
        },
        {
            title: "Base Station 3",
            station: "BaseStation3",
            ATTENTION: 0,
            TROUBLE: 0,
            CRITICAL: 0,
        },
        {
            title: "Base Station 4",
            station: "BaseStation4",
            ATTENTION: 0,
            TROUBLE: 0,
            CRITICAL: 0,
        },
        {
            title: "Base Station 5",
            station: "BaseStation5",
            ATTENTION: 0,
            TROUBLE: 0,
            CRITICAL: 0,
        },
        {
            title: "Base Station 6",
            station: "BaseStation6",
            ATTENTION: 0,
            TROUBLE: 0,
            CRITICAL: 0,
        },
        {
            title: "Base Station 7",
            station: "BaseStation7",
            ATTENTION: 0,
            TROUBLE: 0,
            CRITICAL: 0,
        },
    ]);
    const [deviceInfo, setDeviceInfo] = useState([
        {
            type: "tnms.fots.system",
            name: "FOTS",
            img: "fots",
            faultCnt: 0,
            cnt: 0,
        },
        {
            type: "tnms.tetra.system",
            name: "TETRA",
            img: "tetra",
            faultCnt: 0,
            cnt: 0,
        },
        {
            type: "CCTV",
            name: "CCTV",
            img: "cctv",
            faultCnt: 0,
            cnt: 0,
        },
        {
            type: "tnms.ippbx.system",
            name: "IP-PBX",
            img: "ippbx",
            faultCnt: 0,
            cnt: 0,
        },
        {
            type: "tnms.broadcast.system",
            name: "Broadcast",
            img: "broadcast",
            faultCnt: 0,
            cnt: 0,
        },
        {
            type: "tnms.rectifier.system",
            name: "Rectifier",
            img: "rectifier",
            faultCnt: 0,
            cnt: 0,
        },
        {
            type: "tnms.ups.system",
            name: "UPS",
            img: "ups",
            faultCnt: 0,
            cnt: 0,
        },
        {
            type: "tnms.sadg.system",
            name: "SADG",
            img: "sadg",
            faultCnt: 0,
            cnt: 0,
        },
        {
            type: "tnms.door.system",
            name: "DOOR",
            img: "door",
            faultCnt: 0,
            cnt: 0,
        },
        {
            type: "tnms.fire.system",
            name: "FIRE",
            img: "fire",
            faultCnt: 0,
            cnt: 0,
        },
    ]);

    useEffect(() => {
        eventDataCall();
    }, []);
    useEffect(() => {
        let initData = deviceInfo.slice().map((obj) => {
            obj.cnt = 0;
            obj.faultCnt = 0;
            return obj;
        });
        setDeviceInfo(initData);
        for (let i = 0; i < deviceStatus.length; i++) {
            let dataObj = deviceStatus[i];
            var index = deviceInfo.findIndex(
                (obj) => obj.type === dataObj.type
            );
            if (index !== -1) {
                deviceInfo[index].cnt += dataObj.cnt;
                deviceInfo[index].faultCnt += dataObj.faultCnt;
            }
        }
        setDeviceInfo(deviceInfo);
    }, [deviceStatus]);
    useEffect(() => {
        let initData = stationEvent.slice().map((obj) => {
            obj.ATTENTION = 0;
            obj.TROUBLE = 0;
            obj.CRITICAl = 0;
            return obj;
        });
        setStationEvent(initData);
        for (let i = 0; i < eventDeviceList.length; i++) {
            let dataObj = eventDeviceList[i];
            var index = stationEvent.findIndex(
                (obj) => obj.station === dataObj.station
            );
            if (index !== -1) {
                stationEvent[index].ATTENTION = dataObj.ATTENTION
                    ? dataObj.ATTENTION
                    : 0;
                stationEvent[index].TROUBLE = dataObj.TROUBLE
                    ? dataObj.TROUBLE
                    : 0;
                stationEvent[index].CRITICAL = dataObj.CRITICAL
                    ? dataObj.CRITICAL
                    : 0;
            }
        }
        setStationEvent(stationEvent);
    }, [eventDeviceList]);

    const eventDataCall = () => {
        clearTimeout(eventTimeout.current);
        console.log("dashboard page ::: " + page);
        dispatch(eventDataAPI());
        dispatch(deviceStatusAPI());
        dispatch(eventDeviceTable());
        dispatch(todayEventAPI());
        // dispatch(stationStatusAPI());
        // eventTimeout.current = setTimeout(() => {
        //     eventDataCall();
        // }, 10000);
    };

    return (
        <div className="subject01">
            <TopNavi />
            <div className="contents">
                <Ticker dataList={eventData} />
                <div className="top-contents">
                    <div className="left-box">
                        <GaugeComp dataList={todayData} />
                    </div>
                    <div className="center-box">
                        <ManagementStatus dataList={deviceInfo} />
                    </div>
                </div>
                <div className="main-contents">
                    <div className="left-box">
                        <EventDeviceTable
                            type={"siding"}
                            tbody={stationEvent}
                        />
                    </div>
                    <div className="center-box">
                        <StationMap />
                    </div>
                    <div className="right-box">
                        <EventDeviceTable type={"base"} tbody={stationEvent2} />
                    </div>
                </div>
                <EventConsole dataList={eventData} />
            </div>
        </div>
    );
};

export default Subject01;
