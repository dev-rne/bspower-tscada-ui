import moment from "moment";
import { useState, useEffect } from "react";
import { useInterval } from "react-use";
import { Select } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { setPagination } from "@features/main";
import { useSelector, useDispatch } from "react-redux";
const { Option } = Select;

const TopNavi = () => {
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
        } else if (location.pathname === "/tscada/cctv") {
            dispatch(setPagination("cctv"));
        } else {
            dispatch(setPagination(location.hash.slice(1)));
        }
    }, []);

    return (
        <div className="top-navi">
            <div className="title">
                Mongolia TT-ZB line Signalling & Telecommunication System
            </div>
            <div className="timebar">
                <div className="select-box">
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
                <NowTime />
            </div>
        </div>
    );
};

const NowTime = () => {
    const [realTime, setRealTime] = useState(Date.now());

    useInterval(() => {
        setRealTime(Date.now());
    }, 1000);

    const date = moment(realTime).format("YYYY/MM/DD");
    const days = moment(realTime).format("ddd");
    const time = moment(realTime).format("HH:mm:ss");

    return `${date} [${days}] ${time}`;
};

export default TopNavi;
