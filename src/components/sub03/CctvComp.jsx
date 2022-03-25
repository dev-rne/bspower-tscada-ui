import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CCTVViewer from "@components/cctv/CCTVViewer";
import { setFloorVal, setCctvVal, setRtspurl } from "../../features/occ";
import { Tabs } from "antd";

const CctvComp = () => {
    const [cctv, setCctv] = useState(4);
    const [rtspInfo, setRtspInfo] = useState("");
    const { cctvList, rtspurl, selectCctv } = useSelector((state) => state.occ);
    const dispatch = useDispatch();
    const { TabPane } = Tabs;

    useEffect(() => {
        setRtspInfo(rtspurl);
    }, [rtspurl]);
    useEffect(() => {
        // console.log("selectCctv :: " + selectCctv);
        let idx = Number(selectCctv);
        setCctv(idx);
        if (idx < 4) {
            // 2층
            if (cctvList.floor_2.length !== 0)
                dispatch(setRtspurl(cctvList.floor_2[idx - 1].rtspurl));
        } else {
            if (cctvList.floor_1.length !== 0)
                dispatch(setRtspurl(cctvList.floor_1[idx - 4].rtspurl));
        }
    }, [selectCctv]);

    const settingCCTV = (value) => {
        setCctv(value);
        dispatch(setCctvVal(String(value)));
        if (value < 4) {
            // 2층
            if (cctvList.floor_2.length !== 0)
                dispatch(setRtspurl(cctvList.floor_2[value - 1].rtspurl));
        } else {
            if (cctvList.floor_1.length !== 0)
                dispatch(setRtspurl(cctvList.floor_1[value - 4].rtspurl));
        }
    };

    const tabClick = (key) => {
        console.log(key);
        // 2층
        if (key === "100") {
            setCctv(1);
            dispatch(setCctvVal("1"));
            console.log("100 :: " + cctv);
            dispatch(setRtspurl(cctvList.floor_2[0].rtspurl));
        } else {
            // 1층
            setCctv(4);
            dispatch(setCctvVal("4"));
            console.log("200 :: " + cctv);
            dispatch(setRtspurl(cctvList.floor_1[0].rtspurl));
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
                        {cctvList.floor_1.length !== 0 &&
                            cctvList.floor_1.map((list, idx) => {
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
                                        {cctvList.floor_1.length - 1 !==
                                            idx && (
                                            <div className="gubun"></div>
                                        )}
                                    </>
                                );
                            })}
                    </TabPane>
                    <TabPane tab="2F" key="100">
                        {cctvList.floor_2.length !== 0 &&
                            cctvList.floor_2.map((list, idx) => {
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
                                        {cctvList.floor_2.length - 1 !==
                                            idx && (
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
            </div>
        </div>
    );
};

export default CctvComp;
