import { useEffect, useRef } from "react";
import TopNaviOcc from "@components/component/TopNaviOcc";
import EventConsole from "@components/sub03/EventConsole";
// import ControlBox from "@components/sub03/ControlBox";
import DeviceStatus from "@components/sub03/DeviceStatus";
import EventStatus from "@components/sub03/EventStatus";
import CctvComp from "@components/sub03/CctvComp";
// import EventGauge from "@components/sub03/EventGauge";
import { UnityGameComponent } from "@components/component/UnityView";
import { useDispatch, useSelector } from "react-redux";
import { fetchEventData, cctvListData } from "../features/occ";
import { deviceStatusAPI } from "../features/main";

const Subject03 = () => {
    const eventTimeout = useRef(null);
    const { eventData } = useSelector((state) => state.occ);
    const { deviceStatus } = useSelector((state) => state.main);
    const dispatch = useDispatch();
    useEffect(() => {
        // cctv List 부르기
        dispatch(cctvListData());
        dispatch(deviceStatusAPI());
        eventDataCall();
    }, []);

    const eventDataCall = () => {
        clearTimeout(eventTimeout.current);
        dispatch(fetchEventData());
        eventTimeout.current = setTimeout(() => {
            eventDataCall();
        }, 10000);
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
                <DeviceStatus dataList={deviceStatus.device} />
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
