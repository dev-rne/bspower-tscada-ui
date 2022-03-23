import React, { useEffect, useState } from "react";
import { Modal } from "antd";
// import deviceStatus from "@data/deviceStatus.json";
import axios from "axios";
const DeviceStatus = () => {
    const [data, setData] = useState({ device: [] });
    const [isModalVisible, setIsModalVisible] = useState(false);
    useEffect(() => {
        dataAPI();
    }, []);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };
    const dataAPI = async () => {
        let response = await axios.get("./data/deviceStatus.json");
        console.log(JSON.stringify(response.data));
        setData(response.data);
    };
    return (
        <div className="device-status sectionBox">
            <div className="title">T-SCADA Management status by Device</div>
            <div className="content">
                {data.device.map((list, i) => {
                    return (
                        <div className="device-box" key={i} onClick={showModal}>
                            <div className="name">{list.name}</div>
                            <img
                                src={require(`@assets/icons/icon_main${
                                    i + 1
                                }.png`)}
                                alt=""
                            />
                            <div className="value">{list.value}</div>
                        </div>
                    );
                })}
            </div>
            {/* <Modal
                visible={isModalVisible}
                onCancel={handleOk}
                footer={null}
                className="modal"
                maskClosable={false}
            >
                <p>Some contents...</p>
            </Modal> */}
        </div>
    );
};

export default DeviceStatus;
