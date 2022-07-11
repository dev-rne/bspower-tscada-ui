import moment from "moment";

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
        // {
        //     class: "system",
        //     title: "System Name",
        // },
        {
            class: "system",
            title: "Device",
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
        // {
        //     class: "system",
        //     title: "System Name",
        // },
        {
            class: "system",
            title: "Device",
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
                {dashboard
                    ? dashboardThead.map((list, i) => {
                          return (
                              <div className={list.class + " th"} key={i}>
                                  {list.title}
                              </div>
                          );
                      })
                    : thead.map((list, i) => {
                          return (
                              <div className={list.class + " th"} key={i}>
                                  {list.title}
                              </div>
                          );
                      })}
            </div>
            <div className="tbody">
                {tableData &&
                    tableData.map((list, i) => {
                        return (
                            <div className="tr" key={i}>
                                <div className="td severity">
                                    {list.severity === "CRITICAL" ? (
                                        <div className="critical circle"></div>
                                    ) : list.severity === "TROUBLE" ? (
                                        <div className="trouble circle"></div>
                                    ) : (
                                        <div className="attention circle"></div>
                                    )}
                                    <div className="value">{list.severity}</div>
                                </div>
                                <div className="td alarm">
                                    {list.definitionName}
                                </div>
                                <div className="td occurrence">
                                    {moment(list.cTime).format(
                                        "YYYY-MM-DD HH:mm:ss"
                                    )}
                                </div>
                                <div className="td duration">
                                    {list.duration}
                                </div>
                                <div className="td system">
                                    {list.deviceType === "null"
                                        ? ""
                                        : list.deviceType}
                                </div>
                                <div className="td resource">
                                    {list.resourceName}
                                </div>
                                {dashboard ? (
                                    <div className="td station">
                                        {list.station === "null"
                                            ? ""
                                            : list.station}
                                    </div>
                                ) : (
                                    ""
                                )}
                                <div className="td target">{list.ancestry}</div>
                                <div className="td condition">
                                    {list.conditionLog}
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default EventTable;
