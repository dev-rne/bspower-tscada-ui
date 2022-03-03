import TopNavi from "@components/component/TopNavi"
import Ticker from '@components/component/Ticker';
import GaugeComp from "@components/sub01/GaugeComp";
import TopList from '@components/sub01/TopList'

const Subject01 = () => {
    return(
        <div className="subject01">
            <TopNavi />
            <div className="contents">
                <Ticker />
                <div className="left-box">
                    <GaugeComp/>
                    <TopList/>
                </div>
            </div>
        </div>
    )
}

export default Subject01