import {useState, useEffect} from 'react';

const GaugeComp = ({dataList}) => {
    const [critical, setCritical] = useState(0)
    const [trouble, setTrouble] = useState(0)
    const [attention, setAttention] = useState(0)


    useEffect(() => {
        setCritical(dataList.filter(list => list.severity === 'CRITICAL').length)
        setTrouble(dataList.filter(list => list.severity === 'TROUBLE').length)
        setAttention(dataList.filter(list => list.severity === 'ATTENTION').length)
    },[dataList])
    
    return(
        <div className="gaugecomp sectionBox">
            <div className="title">The status of Events</div>
            <div className="content">
                <div className="gauge-box critical">
                    <img src={require('@assets/criticalBig.png')} alt="" />
                    <p>Critical</p>
                    <div className="data">{critical}</div>
                </div>
                <div className="gauge-box warning">
                <img src={require('@assets/troubleBig.png')} alt="" />
                    <p>Trouble</p>
                    <div className="data">{trouble}</div>
                </div>
                <div className="gauge-box major">
                <img src={require('@assets/attentionBig.png')} alt="" />
                    <p>Attention</p>
                    <div className="data">{attention}</div>
                </div>
            </div>
        </div>
    )
}

export default GaugeComp;