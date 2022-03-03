import Gauge from "@components/charts/Gauge";

const GaugeComp = () => {
    return(
        <div className="gaugecomp">
            <div className="title">The status of Events</div>
            <div className="gauge-box critical">
                <Gauge data={2} />
                <p>Critical</p>
                <div className="data">2</div>
            </div>
            <div className="gauge-box warning">
                <Gauge data={11} />
                <p>Warning</p>
                <div className="data">11</div>
            </div>
            <div className="gauge-box major">
                <Gauge data={31} />
                <p>Major</p>
                <div className="data">31</div>
            </div>
        </div>
    )
}

export default GaugeComp;