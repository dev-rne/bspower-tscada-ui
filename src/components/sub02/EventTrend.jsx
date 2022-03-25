import Line from "@components/charts/Line";
import jsonData from "@data/eventsTrend.json";
import { useEffect, useState } from "react";
// import jsonData from "@data/mainScatter.json";

const EventTrend = (props) => {
    const { dataList } = props;
    const [major, setMajor] = useState([]);
    const [warn, setWarn] = useState([]);
    const [critical, setCritical] = useState([]);
    useEffect(() => {
        let current = new Date();
        let year = current.getFullYear();
        let month = current.getMonth();
        let date = current.getDate();
        let hour = current.getHours();
        let mData = dataList.major.map((val, idx) => {
            let time =
                +new Date(year, month, date, hour, 0, 0) -
                (23 - idx) * 60 * 60 * 1000;
            return [time, val];
        });
        let wData = dataList.warn.map((val, idx) => {
            let time =
                +new Date(year, month, date, hour, 0, 0) -
                (23 - idx) * 60 * 60 * 1000;
            return [time, val];
        });
        let cData = dataList.critical.map((val, idx) => {
            let time =
                +new Date(year, month, date, hour, 0, 0) -
                (23 - idx) * 60 * 60 * 1000;
            return [time, val];
        });
        setMajor(mData);
        setWarn(wData);
        setCritical(cData);
    }, [dataList]);
    return (
        <div className="event-trend sectionBox">
            <div className="title">The trend of Events</div>
            <div className="chart-box">
                <Line critical={critical} major={major} warn={warn} />
                {/* <Scatter
                    major={jsonData.major}
                    warn={jsonData.warn}
                    critical={jsonData.critical}
                /> */}
            </div>
        </div>
    );
};

export default EventTrend;
