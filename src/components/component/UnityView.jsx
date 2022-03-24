import { useEffect, useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import { useSelector, useDispatch } from "react-redux";
import { setFloorVal, setCctvVal } from "../../features/Occ";

const buildUrl = "Build";

const unityInfo = new UnityContext({
    loaderUrl: buildUrl + "/MongolDashboard.loader.js",
    dataUrl: buildUrl + "/MongolDashboard.data",
    frameworkUrl: buildUrl + "/MongolDashboard.framework.js",
    codeUrl: buildUrl + "/MongolDashboard.wasm",
});

export const UnityGameComponent = () => {
    const [unityContext, setUnityContext] = useState(unityInfo);

    const floor = useSelector((state) => state.occ.selectFloor);
    const cctv = useSelector((state) => state.occ.selectCctv);
    const dispatch = useDispatch();

    useEffect(() => {
        unityContext.on("loaded", () => {
            console.log("loaded");
            // setTimeout(() => {
            //     // UI 에서 유니티로 보내는 function, value
            //     console.log("2초만에 호출 완료");
            //     unityContext.send("Manager", "FloorCheck", "100");
            //     setTimeout(() => {
            //         console.log("2초뒤 활성화");
            //         unityContext.send("Manager", "WebToUnityCCTV", "1");
            //     }, 2000);
            // }, 4000);
        });

        unityContext.on("CCtvPageOpen", function (val) {
            console.log("cctv num ::::" + val);
            dispatch(setCctvVal(val));
        });
    }, []);

    useEffect(() => {
        console.log("unity component floor :: " + floor);
        console.log("unity component cctv :: " + cctv);
        unityContext.send("Manager", "FloorCheck", floor);
        unityContext.send("Manager", "WebToUnityCCTV", cctv);
    }, [floor, cctv]);

    return <Unity unityContext={unityContext} className="unityView" />;
};
