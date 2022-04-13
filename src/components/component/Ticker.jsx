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
            navigate("/tscada/");
        } else if (value === "occ") {
            navigate("/tscada/occ");
        } else if (value === "cctv") {
            navigate("/tscada/cctv");
        } else {
            navigate(`/tscada/station#${value}`);
        }
    };

    useEffect(() => {
        if (location.pathname === "/tscada/") {
            dispatch(setPagination("dashboard"));
            dispatch(eventDataAPI());
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
                    <Option value="cctv">CCTV</Option>
                </Select>
            </div>
        </div>
    );
};

export default Ticker;
