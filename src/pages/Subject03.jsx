import { useEffect, useState, useRef } from "react";
import TopNavi from "@components/component/TopNavi";
import EventConsole from "@components/sub03/EventConsole";
// import ControlBox from "@components/sub03/ControlBox";
import DeviceStatus from "@components/sub03/DeviceStatus";
import EventStatus from "@components/sub03/EventStatus";
import CctvComp from "@components/sub03/CctvComp";
// import EventGauge from "@components/sub03/EventGauge";
import { UnityGameComponent } from "@components/component/UnityView";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFloor_1, setFloor_2 } from "../features/Occ";
import { fetchEventData, cctvListData } from "../features/Occ";
const Subject03 = () => {
    const eventTimeout = useRef(null);
    const { eventData } = useSelector((state) => state.occ);
    const dispatch = useDispatch();
    useEffect(() => {
        // cctv List 부르기
        dispatch(cctvListData());
        eventDataCall();
    }, []);

    const cctvDataCall = async () => {
        let response = await axios.get("./data/occCctvList.json");
        dispatch(setFloor_1(response.data.floor_1));
        dispatch(setFloor_2(response.data.floor_2));
    };

    const eventDataCall = () => {
        clearTimeout(eventTimeout.current);
        dispatch(fetchEventData());
        eventTimeout.current = setTimeout(() => {
            eventDataCall();
        }, 10000);
    };

    return (
        <div className="subject03">
            <TopNavi />
            <div className="contents">
                <div className="left-box">
                    <EventStatus />
                    <CctvComp />
                    {/* <EventGauge/> */}
                </div>
                <DeviceStatus />
                <div className="console-box">
                    <EventConsole dataList={eventData} />
                    {/* <ControlBox /> */}
                </div>
                <UnityGameComponent />
            </div>
        </div>
    );
};

export default Subject03;
