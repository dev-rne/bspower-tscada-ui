
const EventDeviceTable = ({thead, tbody}) => {
    return (
        <div className='device-events sectionBox'>
          <div className="title-box">
              <div className="title">Events status by Device</div>
            </div>

            <div className="table">
                <div className="thead">
                    {thead && thead.map((list, idx) => {
                        return(
                            <div className={list.class + ' th'} key={idx}>
                                {list.title}</div>
                        )
                    })}
                </div>
                <div className="tbody">
                    {tbody && 
                        tbody.map((list,idx) => {
                            return(
                                <div className="tr" key={idx}>
                                    <div className="td station">{list.title}</div>
                                    <div className="td attention">{list.attention}</div>
                                    <div className="td trouble">{list.trouble}</div>
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

export default EventDeviceTable;
