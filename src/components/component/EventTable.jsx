const EventTable = (props) => {
    const { tableData } = props;
    const thead = [
        {
            class: "level",
            title: "Level",
        },
        {
            class: "model",
            title: "Model",
        },
        {
            class: "occurredTime",
            title: "Occerred Time",
        },
        {
            class: "device",
            title: "Device name",
        },
        {
            class: "location",
            title: "Level",
        },
        {
            class: "IP",
            title: "IP",
        },
        {
            class: "eventName",
            title: "Events name",
        },
        {
            class: "console",
            title: "Event console",
        },
    ];
    return (
        <div className="table">
            <div className="thead">
                {thead.map((list) => {
                    return (
                        <div className={list.class + " th"}>{list.title}</div>
                    );
                })}
            </div>
            <div className="tbody">
                {tableData &&
                    tableData.map((list, i) => {
                        return (
                            <div className="tr" key={i}>
                                <div className="td level">
                                    {list.level === "critical" ? (
                                        <div className="critical circle"></div>
                                    ) : list.level === "warn" ? (
                                        <div className="warn circle"></div>
                                    ) : (
                                        <div className="normal circle"></div>
                                    )}{" "}
                                    {list.level === "critical"
                                        ? "심각"
                                        : list.level === "warn"
                                        ? "이상"
                                        : "정상"}
                                </div>
                                <div className="td model">{list.model}</div>
                                <div className="td occurredTime">
                                    {list.occurredTime}
                                </div>
                                <div className="td device">{list.device}</div>
                                <div className="td location">
                                    {list.location}
                                </div>
                                <div className="td IP">{list.IP}</div>
                                <div className="td eventName">
                                    {list.eventName}
                                </div>
                                <div className="td console">{list.console}</div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default EventTable;
