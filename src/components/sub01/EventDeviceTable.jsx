const EventDeviceTable = ({ thead, tbody }) => {
    return (
        <div className="device-events sectionBox">
            <div className="title-box">
                <div className="title">Events status by Device</div>
            </div>

            <div className="table">
                <div className="thead">
                    <div className="station th">Station</div>
                    <div className="attention th">Attention</div>
                    <div className="trouble th">Trouble</div>
                    <div className="critical th">Critical</div>
                </div>
                <div className="tbody">
                    {tbody &&
                        tbody.map((list, idx) => {
                            return (
                                <div className="tr" key={idx}>
                                    <div className="td station">
                                        {list.title}
                                    </div>
                                    <div className="td attention">
                                        {list.ATTENTION}
                                    </div>
                                    <div className="td trouble">
                                        {list.TROUBLE}
                                    </div>
                                    <div className="td critical">
                                        {list.CRITICAL}
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default EventDeviceTable;
