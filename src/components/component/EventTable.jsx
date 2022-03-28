const EventTable = (props) => {
    const { tableData, dashboard } = props;
    const dashboardThead = [
        {
            class: "severity",
            title: "Severity",
        },
        {
            class: "alarm",
            title: "Alarm Name",
        },
        {
            class: "occurrence",
            title: "Time of Occurrence",
        },
        {
            class: "duration",
            title: "Duration",
        },
        {
            class: "system",
            title: "System Name",
        },
        {
            class: "resource",
            title: "Resource Name",
        },
        {
            class: "station",
            title: "Station",
        },
        {
            class: "target",
            title: "Target",
        },
        {
            class: "condition",
            title: "Condition Log",
        },
    ];
    const thead = [
        {
            class: "severity",
            title: "Severity",
        },
        {
            class: "alarm",
            title: "Alarm Name",
        },
        {
            class: "occurrence",
            title: "Time of Occurrence",
        },
        {
            class: "duration",
            title: "Duration",
        },
        {
            class: "system",
            title: "System Name",
        },
        {
            class: "resource",
            title: "Resource Name",
        },
        {
            class: "target",
            title: "Target",
        },
        {
            class: "condition",
            title: "Condition Log",
        },
    ];
    
    return (
        <div className="table">
            <div className="thead">
                {
                dashboard ?
                dashboardThead.map((list,i) => {
                    return (
                        <div className={list.class + " th"} key={i}>{list.title}</div>
                    );
                }) :
                thead.map((list,i) => {
                    return (
                        <div className={list.class + " th"} key={i}>{list.title}</div>
                    );
                })}
            </div>
            <div className="tbody">
                {tableData &&
                    tableData.map((list, i) => {
                        return (
                            <div className="tr" key={i}>
                                <div className="td severity">
                                    {list.level === "critical" ? (
                                        <div className="critical circle"></div>
                                    ) : list.level === "trouble" ? (
                                        <div className="trouble circle"></div>
                                    ) : (
                                        <div className="attention circle"></div>
                                    )}
                                    <div className="value">
                                        {list.level}
                                    </div>
                                </div>
                                <div className="td alarm">{list.model}</div>
                                <div className="td occurrence">
                                    {list.occurredTime}
                                </div>
                                <div className="td duration">{list.device}</div>
                                <div className="td system">
                                    {list.location}
                                </div>
                                <div className="td resource">{list.IP}</div>
                                {dashboard ? <div className="td station">{list.station}</div> : ''}
                                <div className="td target">
                                    {list.eventName}
                                </div>
                                <div className="td condition">{list.console}</div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default EventTable;
