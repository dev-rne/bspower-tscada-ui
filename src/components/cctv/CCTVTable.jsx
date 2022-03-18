import React, { useState, useEffect } from "react";
import { Table, Modal, Space, Select } from "antd";
import CCTVViewer from "./CCTVViewer";
import axios from "axios";
import {
    DownOutlined,
    UpOutlined,
    LeftOutlined,
    RightOutlined,
    PlusOutlined,
    MinusOutlined,
} from "@ant-design/icons";

const CCTVTable = () => {
    const [datas, setDatas] = useState([]);
    const [filterDatas, setFilterDatas] = useState([]);
    const [url, setUrl] = useState("");
    const [cctvInfo, setCctvInfo] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { Option } = Select;

    useEffect(() => {
        (async () => {
            const response = await axios.get("/openapi/v1/devicelist");
            console.log(response);
            setDatas(
                response.data.result.map((obj, idx) => {
                    let stationInfo = idx % 2 === 0 ? "TSETSII" : "SS2";
                    let newObject = Object.assign(obj, {
                        station: stationInfo,
                    });
                    return newObject;
                })
            );
            setFilterDatas(
                response.data.result.map((obj, idx) => {
                    let stationInfo = idx % 2 === 0 ? "TSETSII" : "SS2";
                    let newObject = Object.assign(obj, {
                        station: stationInfo,
                    });
                    return newObject;
                })
            );
        })();
    }, []);
    const columns = [
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
                        src="./cctv-icon.png"
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
        const response = axios.get(
            "/openapi/v1/" + cctvInfo.device_id + "/" + type
        );
        console.log("divisce ip response ::" + response);
    };

    function handleChange(value) {
        console.log(`selected ${value}`);
        let result = datas.filter((item) => {
            if (item.station === value || value === "total") {
                return true;
            }
        });
        setFilterDatas(result);
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
                        <Option value="SS1">SS1</Option>
                        <Option value="SS2">SS2</Option>
                        <Option value="SS3">SS3</Option>
                        <Option value="SS4">SS4</Option>
                        <Option value="SS5">SS5</Option>
                        <Option value="SS6">SS6</Option>
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
                            Station : <span>{"Mogolia station"}</span>
                        </div>
                    </div>
                    <div className="control-comp">
                        <MinusOutlined
                            className="control-icon minus"
                            onClick={() => controllCall("zoomout")}
                        />
                        <PlusOutlined
                            className="control-icon plus"
                            onClick={() => controllCall("zoomin")}
                        />
                        <DownOutlined
                            className="control-icon down"
                            onClick={() => controllCall("down")}
                        />
                        <UpOutlined
                            className="control-icon up"
                            onClick={() => controllCall("up")}
                        />
                        <LeftOutlined
                            className="control-icon left"
                            onClick={() => controllCall("left")}
                        />
                        <RightOutlined
                            className="control-icon right"
                            onClick={() => controllCall("right")}
                        />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default CCTVTable;
