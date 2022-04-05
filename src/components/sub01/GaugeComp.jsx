const GaugeComp = ({dataList}) => {
    const critical = dataList.filter(list => list.severity === 'CRITICAL')[0];
    const trouble = dataList.filter(list => list.severity === 'TROUBLE')[0];
    const attention = dataList.filter(list => list.severity === 'ATTENTION')[0];
    
    return(
        <div className="gaugecomp sectionBox">
            <div className="title">The status of Events</div>
            <div className="content">
                <div className="gauge-box critical">
                    <img src={require('@assets/criticalBig.png')} alt="" />
                    <p>Critical</p>
                    <div className="data">{critical ? critical.count : 0 }</div>
                </div>
                <div className="gauge-box warning">
                <img src={require('@assets/troubleBig.png')} alt="" />
                    <p>Trouble</p>
                    <div className="data">{trouble ? trouble.count : 0 }</div>
                </div>
                <div className="gauge-box major">
                <img src={require('@assets/attentionBig.png')} alt="" />
                    <p>Attention</p>
                    <div className="data">{attention ? attention.count : 0 }</div>
                </div>
            </div>
        </div>
    )
}

export default GaugeComp;