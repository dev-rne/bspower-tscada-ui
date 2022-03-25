import Gauge from "@components/charts/Gauge";

const GaugeComp = ({dataList}) => {
    const critical = dataList.filter(list => list.level === 'critical');
    const warn = dataList.filter(list => list.level === 'warn');
    const normal = dataList.filter(list => list.level === 'normal');
    
    return(
        <div className="gaugecomp sectionBox">
            <div className="title">The status of Events</div>
            <div className="content">
                <div className="gauge-box critical">
                    <img src={require('@assets/critical.png')} alt="" />
                    <p>Critical</p>
                    <div className="data">{critical.length}</div>
                </div>
                <div className="gauge-box warning">
                <img src={require('@assets/warn.png')} alt="" />
                    <p>Warning</p>
                    <div className="data">{warn.length}</div>
                </div>
                <div className="gauge-box major">
                <img src={require('@assets/major.png')} alt="" />
                    <p>Major</p>
                    <div className="data">{normal.length}</div>
                </div>
            </div>
        </div>
    )
}

export default GaugeComp;