import TopNavi from "@components/component/TopNavi";
import EventConsole from "@components/sub03/EventConsole";
// import ControlBox from "@components/sub03/ControlBox";
import DeviceStatus from "@components/sub03/DeviceStatus";
import EventStatus from "@components/sub03/EventStatus";
import CctvComp from "@components/sub03/CctvComp";
// import EventGauge from "@components/sub03/EventGauge";
import { UnityGameComponent } from "@components/component/UnityView";

const Subject03 = () => {
    return (
        <div className="subject03">
            <TopNavi />
            <div className="contents">
                <div className="left-box">
                    <EventStatus />
                    <CctvComp />
                    {/* <EventGauge/> */}
                </div>
                <DeviceStatus />
                <div className="console-box">
                    <EventConsole />
                    {/* <ControlBox /> */}
                </div>
                <UnityGameComponent />
            </div>
        </div>
    );
};

export default Subject03;
