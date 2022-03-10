import moment from 'moment';
import {useState} from 'react';
import {useInterval} from 'react-use'

const TopNavi  = () => {
    return(
        <div className="top-navi">
            <div className="title">
            Mongolia TT-ZV line Signalling & Telecommunication System Constrction
            </div>
            <div className="timebar">
                <NowTime />
            </div>
        </div>
    )
}

const NowTime = () => {
    const [realTime, setRealTime] = useState(Date.now());

    useInterval(() => {
        setRealTime(Date.now())
    }, 1000)

    const date = moment(realTime).format('YYYY/MM/DD')
    const days = moment(realTime).format('ddd')
    const time = moment(realTime).format('HH:mm:ss')

    return `${date} [${days}] ${time}`
}

export default TopNavi