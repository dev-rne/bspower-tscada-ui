import React, { useState } from "react";
import { Modal } from "antd";

const DeviceStatus = ({ dataList }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="device-status">
            <div className="title">T-SCADA Management status by Device</div>
            <div className="content">
                {dataList &&
                    dataList.map((list, i) => {
                        return (
                            <div
                                className="device-box"
                                key={i}
                                onClick={showModal}
                            >
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
            <Modal
                visible={isModalVisible}
                onCancel={handleOk}
                footer={null}
                className="modal"
                maskClosable={false}
            >
                <p>Some contents...</p>
            </Modal>
        </div>
    );
};

export default DeviceStatus;
