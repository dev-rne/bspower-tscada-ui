import TopNavi from "@components/component/TopNavi";
import Ticker from "@components/component/Ticker";
import EventConsole from "@components/sub02/EventConsole";
import ManagementStatus from "@components/sub02/ManagementStatus";
import EventTrend from "@components/sub02/EventTrend";
import DeviceEvents from "@components/sub02/DeviceEvents";
import EmsServer from "@components/sub02/EmsServer";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useRef } from "react";
import {
    eventTrendAPI,
    eventDataAPI,
    EMSStatusAPI,
    DeviceManagementAPI,
    DeviceStatusAPI,
} from "../features/station";

const Subject02 = () => {
    const { eventData, deviceStatus, deviceManagement, emsList, eventTrend } =
        useSelector((state) => state.station);
    const dispatch = useDispatch();
    const eventTimeout = useRef(null);

    useEffect(() => {
        eventDataCall();
    }, []);

    const eventDataCall = () => {
        clearTimeout(eventTimeout.current);
        dispatch(eventDataAPI());
        dispatch(DeviceManagementAPI());
        dispatch(DeviceStatusAPI());
        dispatch(EMSStatusAPI());
        dispatch(eventTrendAPI());
        eventTimeout.current = setTimeout(() => {
            eventDataCall();
        }, 10000);
    };

    return (
        <div className="subject02">
            <TopNavi />
            <div className="contents">
                <Ticker dataList={eventData} />
                <div className="main-contents">
                    <EventTrend dataList={eventTrend} />
                    <DeviceEvents
                        thead={deviceStatus.thead}
                        tbody={deviceStatus.tbody}
                    />
                    <EmsServer dataList={emsList} />
                </div>
                <ManagementStatus dataList={deviceManagement.device} />
                <EventConsole dataList={eventData} />
            </div>
        </div>
    );
};

export default Subject02;
