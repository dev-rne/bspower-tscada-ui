import { useEffect, useState, useRef } from "react";
import CCTVTable from "@components/cctv/CCTVTable";
import TopNavi from "@components/component/TopNavi";
import { useDispatch } from "react-redux";
import { cctvListData } from "../features/cctv";

const Cctv = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        // cctv List 부르기
        dispatch(cctvListData());
    }, []);
    return (
        <div className="cctv-back">
            <TopNavi />
            <div className="table-div">
                <CCTVTable />
            </div>
        </div>
    );
};

export default Cctv;
