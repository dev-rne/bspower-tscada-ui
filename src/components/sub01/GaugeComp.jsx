import Gauge from "@components/charts/Gauge";

const GaugeComp = ({dataList}) => {
    const critical = dataList.filter(list => list.level === 'critical');
    const trouble = dataList.filter(list => list.level === 'trouble');
    const attention = dataList.filter(list => list.level === 'attention');
    
    return(
        <div className="gaugecomp sectionBox">
            <div className="title">The status of Events</div>
            <div className="content">
                <div className="gauge-box critical">
                    <img src={require('@assets/criticalBig.png')} alt="" />
                    <p>Critical</p>
                    <div className="data">{critical.length}</div>
                </div>
                <div className="gauge-box warning">
                <img src={require('@assets/troubleBig.png')} alt="" />
                    <p>Trouble</p>
                    <div className="data">{trouble.length}</div>
                </div>
                <div className="gauge-box major">
                <img src={require('@assets/attentionBig.png')} alt="" />
                    <p>Attention</p>
                    <div className="data">{attention.length}</div>
                </div>
            </div>
        </div>
    )
}

export default GaugeComp;