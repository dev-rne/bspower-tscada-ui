import { useEffect, useState} from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const buildUrl = "Build";

const unityInfo = new UnityContext({
    loaderUrl: buildUrl + "/MongolDashboard.loader.js",
    dataUrl: buildUrl + "/MongolDashboard.data",
    frameworkUrl: buildUrl + "/MongolDashboard.framework.js",
    codeUrl: buildUrl + "/MongolDashboard.wasm",
  });

export const UnityGameComponent = () => {

    const [unityContext, setUnityContext] = useState(unityInfo);

  return (
    <Unity unityContext={unityContext} className="unityView" />
  );
};