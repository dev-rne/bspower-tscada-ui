import { useEffect } from "react";
import { useState } from "react";
import cctvImg from "@assets/cctv.png";
import { useSelector, useDispatch } from "react-redux";
import { setFloorVal, setCctvVal } from "../../features/sub03";

const cctvList = [
    {
        name: "1F CCTV",
    },
    {
        name: "2F CCTV",
    },
    {
        name: "3F CCTV",
    },
    {
        name: "4F CCTV",
    },
];

const CctvComp = () => {
    const [cctv, setCctv] = useState(1);
    const cctvVal = useSelector((state) => state.sub03.selectCctv);
    const dispatch = useDispatch();

    const settingCCTV = (value) => {
        setCctv(value);
        dispatch(setCctvVal(value));
    };

    useEffect(() => {
        console.log("Cctv component cctv :: " + cctvVal);
    }, [cctvVal]);

    return (
        <div className="cctv-comp">
            <div className="tap-box">
                {cctvList.map((list, idx) => {
                    return (
                        <div
                            className={
                                cctv === idx + 1 ? "select cctv" : "cctv"
                            }
                            onClick={() => settingCCTV(idx + 1)}
                            key={idx}
                        >
                            {list.name}
                        </div>
                    );
                })}
            </div>
            <div className="cam-box">
                <img src={cctvImg} alt="" />
            </div>
        </div>
    );
};

export default CctvComp;
