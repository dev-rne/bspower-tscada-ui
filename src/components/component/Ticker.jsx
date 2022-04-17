import { Select, Tooltip } from "antd";
import Marquee from "react-fast-marquee";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPagination, eventDataAPI } from "@features/main";
import { stationEventDataAPI } from "@features/station";
import { useEffect, useState } from "react";

const { Option } = Select;

const Ticker = ({ dataList }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const page = useSelector((state) => {
        return state.main.page;
    });

    const handleChange = (value) => {
        dispatch(setPagination(value));
        if (value === "dashboard") {
            dispatch(setPagination("dashboard"));
            navigate("/tscada/");
        } else if (value === "occ") {
            dispatch(setPagination("occ"));
            navigate("/tscada/occ");
        } else if (value === "cctv") {
            dispatch(setPagination("cctv"));
            navigate("/tscada/cctv");
        } else {
            navigate(`/tscada/station#${value}`);
        }
    };

    useEffect(() => {
        if (location.pathname === "/tscada/") {
            dispatch(setPagination("dashboard"));
        } else if (location.pathname === "/tscada/occ") {
            dispatch(setPagination("occ"));
        } else {
            dispatch(setPagination(location.hash.slice(1)));
            dispatch(stationEventDataAPI(page));
        }
    }, [page]);

    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        const list = dataList.filter((list) => list.severity !== "CLEAR");
        setEventList(list);
    }, [dataList]);

    return (
        <div className="ticker">
            <div className="title-box">Current Events</div>
            <div className="newsList">
                <Marquee speed={50} pauseOnHover={true}>
                    {eventList &&
                        eventList.map((list, i) => {
                            return (
                                <Tooltip
                                    title={`Host name: ${list.hostName}`}
                                    color={
                                        list.severity === "CRITICAL"
                                            ? "red"
                                            : list.severity === "TROUBLE"
                                            ? "orange"
                                            : "yellow"
                                    }
                                >
                                    <div
                                        className={list.severity + " li"}
                                        key={i}
                                    >
                                        {list.conditionLog}
                                    </div>
                                </Tooltip>
                            );
                        })}
                </Marquee>
            </div>
            <div className="select-box">
                <div className="label">Dashboard</div>
                <Select
                    value={page}
                    defaultValue="dashboard"
                    style={{ width: 120 }}
                    onSelect={handleChange}
                    className="selector"
                >
                    <Option value="dashboard">Dashboard</Option>
                    <Option value="occ">OCC</Option>
                    <Option value="tsetsii">TSETSII</Option>
                    <Option value="ss1">Khongor Tolgoi</Option>
                    <Option value="ss2">Khonglidog</Option>
                    <Option value="ss3">Bayanbulag</Option>
                    <Option value="ss4">Khunkhar Zag</Option>
                    <Option value="ss5">Bor Khoshuu</Option>
                    <Option value="ss6">Khulagniin Shand</Option>
                    <Option value="zuunbayan">ZUUNBAYAN</Option>
                    <Option value="bb1">Base Station 1</Option>
                    <Option value="bb2">Base Station 2</Option>
                    <Option value="bb3">Base Station 3</Option>
                    <Option value="bb4">Base Station 4</Option>
                    <Option value="bb5">Base Station 5</Option>
                    <Option value="bb6">Base Station 6</Option>
                    <Option value="bb7">Base Station 7</Option>
                    <Option value="cctv">CCTV</Option>
                </Select>
            </div>
        </div>
    );
};

export default Ticker;
