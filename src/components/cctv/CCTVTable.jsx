import React, { useState, useEffect } from "react";
import { Table, Modal, Select } from "antd";
import CCTVViewer from "./CCTVViewer";
import {
    DownOutlined,
    UpOutlined,
    LeftOutlined,
    RightOutlined,
    PlusOutlined,
    MinusOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { cctvControl } from "../../features/cctv";

const CCTVTable = () => {
    const [datas, setDatas] = useState([]);
    const [filterDatas, setFilterDatas] = useState([]);
    const [url, setUrl] = useState("");
    const [cctvInfo, setCctvInfo] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { Option } = Select;
    const { cctvList } = useSelector((state) => state.cctv);
    const dispatch = useDispatch();
    const stationArr = [
        "TSETSII",
        "Khongor Tolgoi",
        "Khonglidog",
        "Bayanbulag",
        "Khunkhar Zag",
        "Bor Khoshuu",
        "Khulagniin Shand",
        "ZUUNBAYAN",
    ];
    useEffect(() => {
        let arr = cctvList.map((obj, idx) => {
            let newObject = Object.assign(
                { idx: idx + 1, station: stationArr[idx % 8] },
                obj
            );
            return newObject;
        });
        setDatas(arr);
        setFilterDatas(arr);
    }, [cctvList]);
    const columns = [
        {
            title: "",
            dataIndex: "idx",
            key: "idx",
            width: "5%",
            align: "center",
        },
        {
            title: "CCTV Name",
            dataIndex: "device_name",
            key: "device_name",
            width: "20%",
            align: "center",
        },
        {
            title: "Station",
            dataIndex: "station",
            key: "device_ip",
            width: "20%",
            align: "center",
        },
        {
            title: "Vendor",
            dataIndex: "company_name",
            key: "company_name",
            width: "20%",
            align: "center",
        },
        {
            title: "model",
            dataIndex: "model_name",
            key: "model_name",
            width: "20%",
            align: "center",
        },
        {
            title: "IP",
            dataIndex: "device_ip",
            key: "device_ip",
            width: "10%",
            align: "center",
        },
        {
            title: "Control",
            dataIndex: "rtsp_url1",
            key: "rtsp_url1",
            width: "10%",
            align: "center",
            render: (text, record, index) => {
                const tag = (
                    <img
                        style={{ cursor: "pointer" }}
                        src="/tscada/cctvImg/cctv-icon.png"
                        onClick={() => {
                            setUrl(text);
                            setCctvInfo(record);
                            showModal();
                        }}
                    />
                );
                return tag;
            },
        },
    ];
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const controllCall = (type) => {
        console.log("type", type);
        let obj = {
            id: cctvInfo.device_id,
            type: type,
        };
        dispatch(cctvControl(obj));
    };

    function handleChange(value) {
        console.log(`selected ${value}`);
        let result = datas.filter((item) => {
            if (item.station === value || value === "total") {
                return true;
            }
        });
        let arr = result.map((obj, idx) => {
            obj.idx = idx + 1;
            return obj;
        });
        setFilterDatas(arr);
    }

    return (
        <>
            <div className="select-cctvarea">
                <div className="select-title">Station</div>
                <div className="select">
                    <Select
                        defaultValue="total"
                        style={{ width: 150 }}
                        onChange={handleChange}
                        className="selector"
                    >
                        <Option value="total">ALL</Option>
                        <Option value="TSETSII">TSETSII</Option>
                        <Option value="Khongor Tolgoi">Khongor Tolgoi</Option>
                        <Option value="Khonglidog">Khonglidog</Option>
                        <Option value="Bayanbulag">Bayanbulag</Option>
                        <Option value="Khunkhar Zag">Khunkhar Zag</Option>
                        <Option value="Bor Khoshuu">Bor Khoshuu</Option>
                        <Option value="Khulagniin Shand">
                            Khulagniin Shand
                        </Option>
                        <Option value="ZUUNBAYAN">ZUUNBAYAN</Option>
                    </Select>
                </div>
            </div>
            <Table
                mode="dark"
                dataSource={filterDatas}
                columns={columns}
                bordered
                size="middle"
                style={{ height: "800px" }}
                pagination={{ position: ["bottomCenter"] }}
            />
            <Modal
                destroyOnClose={true}
                title={cctvInfo.device_name}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1010}
                footer={null}
            >
                <CCTVViewer rtspUrl={url} scale={"960:-1"} />
                <div className="control-area">
                    <div className="control-info">
                        <div>
                            CCTV Type : <span>{cctvInfo.model_name}</span>
                        </div>
                        <div>
                            Station : <span>{cctvInfo.station}</span>
                        </div>
                    </div>
                    <div
                        className="control-comp"
                        style={{
                            opacity: cctvInfo.use_ptz === "true" ? 1 : 0.2,
                        }}
                    >
                        <MinusOutlined
                            className="control-icon minus"
                            style={{
                                cursor:
                                    cctvInfo.use_ptz === "true"
                                        ? "pointer"
                                        : "default",
                            }}
                            onClick={() => controllCall("zoom_out")}
                        />
                        <PlusOutlined
                            className="control-icon plus"
                            style={{
                                cursor:
                                    cctvInfo.use_ptz === "true"
                                        ? "pointer"
                                        : "default",
                            }}
                            onClick={() => controllCall("zoom_in")}
                        />
                        <DownOutlined
                            className="control-icon down"
                            style={{
                                cursor:
                                    cctvInfo.use_ptz === "true"
                                        ? "pointer"
                                        : "default",
                            }}
                            onClick={() => controllCall("down")}
                        />
                        <UpOutlined
                            className="control-icon up"
                            style={{
                                cursor:
                                    cctvInfo.use_ptz === "true"
                                        ? "pointer"
                                        : "default",
                            }}
                            onClick={() => controllCall("up")}
                        />
                        <LeftOutlined
                            className="control-icon left"
                            style={{
                                cursor:
                                    cctvInfo.use_ptz === "true"
                                        ? "pointer"
                                        : "default",
                            }}
                            onClick={() => controllCall("left")}
                        />
                        <RightOutlined
                            className="control-icon right"
                            style={{
                                cursor:
                                    cctvInfo.use_ptz === "true"
                                        ? "pointer"
                                        : "default",
                            }}
                            onClick={() => controllCall("right")}
                        />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default CCTVTable;
