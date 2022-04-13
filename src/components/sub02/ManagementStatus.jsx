const ManagementStatus = ({ dataList }) => {
    return (
        <div className="management-status">
            <div className="title">Management status by Device</div>
            <div className="contents">
                {dataList &&
                    dataList.map((list, idx) => {
                        return (
                            <div className="device" key={idx}>
                                <div className="img-box">
                                    <img
                                        src={require(`@assets/icons/${list.img}.png`)}
                                        alt=""
                                    />
                                    <div className="name">{list.name}</div>
                                </div>
                                <div className="value-box">
                                    <div className="label">Mng Cnt</div>
                                    <div className="value">{list.mng_cnt}</div>
                                </div>
                                <div className="value-box">
                                    <div className="label">Mxg Cnt</div>
                                    <div className="value">{list.mxg_cnt}</div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default ManagementStatus;
