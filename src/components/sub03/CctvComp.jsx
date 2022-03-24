import { useEffect, useState } from "react";
import cctvImg from "@assets/cctv.png";
import { useSelector, useDispatch } from "react-redux";
import CCTVViewer from "@components/cctv/CCTVViewer";
import {
    setFloorVal,
    setCctvVal,
    setFloor_1,
    setFloor_2,
    setRtspurl,
} from "../../features/Occ";
import { Tabs } from "antd";

const CctvComp = (props) => {
    const { list } = props;
    const [cctv, setCctv] = useState(4);
    const [rtspInfo, setRtspInfo] = useState("");
    const cctvVal = useSelector((state) => state.occ.selectCctv);
    const floor_1 = useSelector((state) => state.occ.floor_1);
    const floor_2 = useSelector((state) => state.occ.floor_2);
    const rtspurl = useSelector((state) => state.occ.rtspurl);
    const dispatch = useDispatch();
    const { TabPane } = Tabs;

    useEffect(() => {
        console.log("rtspurl :: " + rtspurl);
        setRtspInfo(rtspurl);
    }, [rtspurl]);
    // useEffect(() => {
    //     console.log("cctvVal :: " + cctvVal);
    //     setCctv(Number(cctvVal));
    //     // let value = Number(cctvVal);
    //     // if (value < 4) {
    //     //     // 2층
    //     //     dispatch(setRtspurl(floor_2[value - 1].rtspurl));
    //     // } else {
    //     //     dispatch(setRtspurl(floor_1[value - 4].rtspurl));
    //     // }
    // }, [cctvVal]);

    const settingCCTV = (value) => {
        setCctv(value);
        dispatch(setCctvVal(String(value)));
        if (value < 4) {
            // 2층
            dispatch(setRtspurl(floor_2[value - 1].rtspurl));
        } else {
            dispatch(setRtspurl(floor_1[value - 4].rtspurl));
        }
    };

    const tabClick = (key) => {
        console.log(key);
        // 2층
        if (key === "100") {
            setCctv(1);
            dispatch(setCctvVal("1"));
            console.log("100 :: " + cctv);
            dispatch(setRtspurl(floor_2[0].rtspurl));
        } else {
            // 1층
            setCctv(4);
            dispatch(setCctvVal("4"));
            console.log("200 :: " + cctv);
            dispatch(setRtspurl(floor_1[0].rtspurl));
        }
        dispatch(setFloorVal(key));
    };

    return (
        <div className="cctv-comp">
            <div className="tap-box">
                <Tabs
                    onChange={tabClick}
                    type="card"
                    style={{ width: "100%" }}
                    size="small"
                >
                    <TabPane tab="1F" key="200">
                        {floor_1.length !== 0 &&
                            floor_1.map((list, idx) => {
                                console.log("name :: " + list.name);
                                return (
                                    <>
                                        <div
                                            className={
                                                cctv === idx + 4
                                                    ? "select cctv"
                                                    : "cctv"
                                            }
                                            onClick={() => settingCCTV(idx + 4)}
                                            key={"1f" + idx}
                                        >
                                            {list.name}
                                        </div>
                                        {floor_1.length - 1 !== idx && (
                                            <div className="gubun"></div>
                                        )}
                                    </>
                                );
                            })}
                    </TabPane>
                    <TabPane tab="2F" key="100">
                        {floor_2.length !== 0 &&
                            floor_2.map((list, idx) => {
                                console.log("name :: " + list.name);
                                return (
                                    <>
                                        <div
                                            className={
                                                cctv === idx + 1
                                                    ? "select cctv"
                                                    : "cctv"
                                            }
                                            onClick={() => settingCCTV(idx + 1)}
                                            key={"2f" + idx}
                                        >
                                            {list.name}
                                        </div>
                                        {floor_2.length - 1 !== idx && (
                                            <div className="gubun"></div>
                                        )}
                                    </>
                                );
                            })}
                    </TabPane>
                </Tabs>
            </div>

            <div className="cam-box">
                {rtspInfo !== "" && <CCTVViewer rtspUrl={rtspInfo} />}
                {/* <img src={cctvImg} alt="" /> */}
            </div>
        </div>
    );
};

export default CctvComp;
