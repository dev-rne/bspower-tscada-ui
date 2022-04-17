import React, { useState } from "react";
import { Modal } from "antd";
import EventConsole from "@components/sub01/EventConsoleModal";
import { useSelector, useDispatch } from "react-redux";

const ManagementStatus = ({ dataList }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { eventData } = useSelector((state) => state.main);
    const [test, setTest] = useState([]);
    const [popTitle, setPoptitle] = useState("");
    const sampleData = [
        {
            severity: "TROUBLE",
            deviceType: "CCTV",
            hostName: "TETRA TOWER_BOX",
            ancestry: "02.CCTV>CCTV_EMS>TETRA TOWER_BOX",
            definitionName: "CCTV  Availability Alarm",
            groupPathName: "02.CCTV",
            ip: "",
            description: "null",
            cTime: 1650203126763,
            resourceName: "TETRA TOWER_BOX",
            managerName: "",
            noteMessage: "null",
            duration: "3 seconds",
            acktime: "null",
            systemName: "CCTV_EMS",
            hostType: "tnms.cctv.system",
            station: "Base Station 1",
            conditionLog: "Availability [UP (= UP)]",
            status: "NOT_ACK",
        },
        {
            severity: "CRITICAl",
            deviceType: "null",
            hostName: "gs-ap1",
            ancestry: "11. Servers>gs-ap1",
            definitionName: "SMSAgent Status",
            groupPathName: "11. Servers",
            ip: "192.168.233.127",
            description:
                "gs-ap1(vendor: VMware, Inc., model:VMware Virtual Platform)",
            cTime: 1650197617644,
            resourceName: "gs-ap1",
            managerName: "",
            noteMessage: "null",
            duration: "1 hour, 31 minutes and 52 seconds",
            acktime: "null",
            systemName: "gs-ap1",
            hostType: "server.Server",
            station: "null",
            conditionLog: "Agent Status [Up (= Up)]",
            status: "NOT_ACK",
        },
        {
            severity: "ATTENTION",
            deviceType: "null",
            hostName: "gs-ap1",
            ancestry: "11. Servers>gs-ap1",
            definitionName: "MAgent Status",
            groupPathName: "11. Servers",
            ip: "192.168.233.127",
            description:
                "gs-ap1(vendor: VMware, Inc., model:VMware Virtual Platform)",
            cTime: 1650197617622,
            resourceName: "gs-ap1",
            managerName: "",
            noteMessage: "null",
            duration: "1 hour, 31 minutes and 52 seconds",
            acktime: "null",
            systemName: "gs-ap1",
            hostType: "server.Server",
            station: "null",
            conditionLog: "Availability [UP (= UP)]",
            status: "NOT_ACK",
        },
        {
            severity: "ATTENTION",
            deviceType: "null",
            hostName: "Disks",
            ancestry: "11. Servers>lts830-ap2>Disks",
            definitionName: "Disk Usage",
            groupPathName: "11. Servers",
            ip: "192.168.233.85",
            description: "Total disks",
            cTime: 1650159421102,
            resourceName: "Disks",
            managerName: "",
            noteMessage: "null",
            duration: "12 hours, 8 minutes and 29 seconds",
            acktime: "null",
            systemName: "lts830-ap2",
            hostType: "server.Disks",
            station: "null",
            conditionLog: "Reads [50.5 Count/s (>= 50 Count/s)]",
            status: "NOT_ACK",
        },
        {
            severity: "TROUBLE",
            deviceType: "CCTV",
            hostName: "Control Room_SS1_DOME",
            ancestry: "02.CCTV>CCTV_EMS>Control Room_SS1_DOME",
            definitionName: "CCTV  Availability Alarm",
            groupPathName: "02.CCTV",
            ip: "",
            description: "null",
            cTime: 1650152486741,
            resourceName: "Control Room_SS1_DOME",
            managerName: "",
            noteMessage: "null",
            duration: "14 hours, 4 minutes and 3 seconds",
            acktime: "null",
            systemName: "CCTV_EMS",
            hostType: "tnms.cctv.system",
            station: "Tsogttsetsii",
            conditionLog: "Availability [UP (= UP)]",
            status: "NOT_ACK",
        },
        {
            severity: "TROUBLE",
            deviceType: "null",
            hostName: "Disks",
            ancestry: "11. Servers>lts830-ap1>Disks",
            definitionName: "Disk Usage",
            groupPathName: "11. Servers",
            ip: "192.168.233.84",
            description: "Total disks",
            cTime: 1650141719879,
            resourceName: "Disks",
            managerName: "",
            noteMessage: "null",
            duration: "17 hours, 3 minutes and 30 seconds",
            acktime: "null",
            systemName: "lts830-ap1",
            hostType: "server.Disks",
            station: "null",
            conditionLog: "Reads [69 Count/s (>= 50 Count/s)]",
            status: "NOT_ACK",
        },
    ];

    const showModal = (name) => {
        setIsModalVisible(true);
        setTest(sampleData);
        setPoptitle(name);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        setTest([]);
    };

    return (
        <div className="management-status sectionBox">
            <div className="title">T-SCADA Management status by Device</div>
            <div className="contents">
                {dataList &&
                    dataList.map((list, idx) => {
                        return (
                            <div
                                className="device"
                                key={idx}
                                onClick={() => showModal(list.name)}
                            >
                                <div className="img-box">
                                    <img
                                        src={require(`@assets/icons/${list.img}.png`)}
                                        alt=""
                                    />
                                    <div className="name">{list.name}</div>
                                </div>
                                <div className="value-box">
                                    <div className="label">Mng Cnt</div>
                                    <div className="value">{list.cnt}</div>
                                </div>
                                <div className="value-box">
                                    <div className="label">Event Cnt</div>
                                    <div className="value">{list.faultCnt}</div>
                                </div>
                            </div>
                        );
                    })}
                <Modal
                    title={popTitle}
                    visible={isModalVisible}
                    onCancel={handleOk}
                    footer={null}
                    className="modal"
                    maskClosable={false}
                    width={1900}
                >
                    <div style={{ height: 500 }}>
                        <EventConsole dataList={test} />
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default ManagementStatus;
