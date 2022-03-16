import table from '@data/deviceEvents.json';

const DeviceEvents = () => {
    return (
        <div className='device-events sectionBox'>
          <div className="title-box">
              <div className="title">Events status by Device</div>
              <div className="unit">Unit:Number of occurences(cnt)</div>
            </div>

            <div className="table">
                <div className="thead">
                    {table.thead.map((list, idx) => {
                        return(
                            <div className={list.class + ' th'} key={idx}>
                                {list.title}</div>
                        )
                    })}
                </div>
                <div className="tbody">
                    {
                        table.tbody.map((list,idx) => {
                            return(
                                <div className="tr" key={idx}>
                                    <div className="td title">{list.title}</div>
                                    <div className="td previous">{list.previous}</div>
                                    <div className="td today">{list.today}</div>
                                    <div className="td critical">{list.critical}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default DeviceEvents;
