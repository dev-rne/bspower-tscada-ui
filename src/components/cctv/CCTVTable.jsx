import React, { useState, useEffect } from "react";
import { Table, Modal } from "antd";
import CCTVViewer from "./CCTVViewer";
import axios from "axios";

const CCTVTable = () => {
    const [datas, setDatas] = useState([]);
    const [url, setUrl] = useState("");
    const [cctvInfo, setCctvInfo] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        (async () => {
            const response = await axios.get("/openapi/v1/devicelist");
            console.log(response);
            setDatas(response.data.result);
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
            width: "20%",
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

    return (
        <>
            <Table
                mode="dark"
                dataSource={datas}
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
            </Modal>
        </>
    );
};

export default CCTVTable;
