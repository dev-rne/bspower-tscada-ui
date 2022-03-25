import { useEffect, useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import { useSelector, useDispatch } from "react-redux";
import { setFloorVal, setCctvVal } from "../../features/occ";

const buildUrl = "Build";

const unityInfo = new UnityContext({
    loaderUrl: buildUrl + "/MongolDashboard.loader.js",
    dataUrl: buildUrl + "/MongolDashboard.data",
    frameworkUrl: buildUrl + "/MongolDashboard.framework.js",
    codeUrl: buildUrl + "/MongolDashboard.wasm",
});

export const UnityGameComponent = () => {
    const [unityContext, setUnityContext] = useState(unityInfo);

    const { selectFloor, selectCctv } = useSelector((state) => state.occ);
    const dispatch = useDispatch();

    useEffect(() => {
        unityContext.on("loaded", () => {
            console.log("loaded");
        });

        unityContext.on("CCtvPageOpen", function (val) {
            console.log("cctv num ::::" + val);
            let value = Number(val);
            if (value < 4) {
                // 2층
                dispatch(setFloorVal("100"));
            } else {
                dispatch(setFloorVal("200"));
            }
            dispatch(setCctvVal(val));
        });
    }, []);

    useEffect(() => {
        unityContext.send("Manager", "FloorCheck", selectFloor);
        unityContext.send("Manager", "WebToUnityCCTV", selectCctv);
    }, [selectFloor, selectCctv]);

    return <Unity unityContext={unityContext} className="unityView" />;
};
