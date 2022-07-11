import { useEffect, useRef, useState } from "react";
import TopNaviOcc from "@components/component/TopNaviOcc";
import EventConsole from "@components/sub03/EventConsole";
// import ControlBox from "@components/sub03/ControlBox";
import DeviceStatus from "@components/sub03/DeviceStatus";
import EventStatus from "@components/sub03/EventStatus";
import CctvComp from "@components/sub03/CctvComp";
// import EventGauge from "@components/sub03/EventGauge";
import { UnityGameComponent } from "@components/component/UnityView";
import { useDispatch, useSelector } from "react-redux";
import { eventData, todayData, cctvListData } from "../features/occ";
// import { deviceStatusAPI } from "../features/main";
import { eventDataAPI, deviceStatusAPI } from "../features/occ";
import { motion } from "framer-motion";

const Subject03 = () => {
    const eventTimeout = useRef(null);
    const { eventData, unityReady, deviceStatus } = useSelector(
        (state) => state.occ
    );
    // const { deviceStatus } = useSelector((state) => state.main);
    const dispatch = useDispatch();

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
        // cctv List 부르기
        dispatch(cctvListData());
        dispatch(deviceStatusAPI());
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

    const eventDataCall = () => {
        clearTimeout(eventTimeout.current);
        dispatch(eventDataAPI());
        eventTimeout.current = setTimeout(() => {
            eventDataCall();
        }, 10000);
    };

    const variants = {
        on: { opacity: 1 },
        off: {
            opacity: 0,
            transition: { duration: 0.4 },
            transitionEnd: { display: "none" },
        },
    };

    return (
        <div className="subject03">
            <TopNaviOcc />
            <div className="contents">
                <div className="left-box">
                    <EventStatus dataList={eventData} />
                    <CctvComp />
                    {/* <EventGauge/> */}
                </div>
                <DeviceStatus dataList={deviceInfo} />
                <div className="console-box">
                    <EventConsole dataList={eventData} />
                    {/* <ControlBox /> */}
                </div>
                <UnityGameComponent />
                <motion.div
                    className="loading-box"
                    animate={unityReady ? "off" : "on"}
                    variants={variants}
                    initial={{ display: "flex" }}
                >
                    <div className="loader"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default Subject03;
