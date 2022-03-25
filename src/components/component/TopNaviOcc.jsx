import moment from "moment";
import { useState } from "react";
import { useInterval } from "react-use";
import { Select } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { setPagination } from "@features/main";
import { useSelector, useDispatch } from "react-redux";
const { Option } = Select;

const TopNavi = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const page = useSelector((state) => {
        return state.main.page;
    });

    const handleChange = (value) => {
        dispatch(setPagination(value));
        if (value === "dashboard") {
            navigate("/");
        } else if (value === "occ") {
            navigate("/occ");
        } else {
            navigate(`/station#${value}`);
        }
    };

    return (
        <div className="top-navi">
            <div className="title">
                Mongolia TT-ZV line Signalling & Telecommunication System
                Constrction
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
                        <Option value="ss1">SS1</Option>
                        <Option value="ss2">SS2</Option>
                        <Option value="ss3">SS3</Option>
                        <Option value="ss4">SS4</Option>
                        <Option value="ss5">SS5</Option>
                        <Option value="ss6">SS6</Option>
                        <Option value="zuunbayan">ZUUNBAYAN</Option>
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
