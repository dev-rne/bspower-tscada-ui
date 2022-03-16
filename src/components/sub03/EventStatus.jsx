
import {useState} from 'react'
import jsonData from '@data/eventStatus.json';

const EventStatus = () => {
    const [event, setEvent] = useState('critical');

    const handleEvent = (value) => {
        setEvent(value)
    }

    return (
        <div className="event-status">
            <div className="event-box">
               {
                   jsonData.event.map((list, idx) => {
                       return(
                        <div className={event === list.img ? list.img + " select event" : list.img + " event"} key={idx} onClick={() => handleEvent(list.img)}>
                            <div className="name"><div className="box"></div><span>{list.name}</span></div>
                            <img src={require(`@assets/${list.img}.png`)} alt="" />
                            <div className="value">{list.event < 10 ? `0${list.event}` : list.event}</div>
                        </div>
                       )
                   })
               }
            </div>
            <div className="ticker-box">
               <div className="overFlowBox">
               <div className="tickerList">
                {
                    jsonData.event.filter(list => list.img === event)[0].eventList.map((list,idx) => {
                        return(
                            <div className="list" key={idx}>{list}</div>
                        )
                    })
                }
                </div>
               </div>
            </div>
        </div>
    )
}

export default EventStatus;