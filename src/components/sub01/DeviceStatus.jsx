const DeviceStatus = () => {
    return(
        <div className="device-status">
            <div className="title">T-SCADA Management status by Device</div>
            <div className="content">
                {device.map((list,i) => {
                    return (
                        <div className="device-box" key={i}>
                            <div className="name">{list.name}</div>
                            <img src={require(`@assets/icons/icon_main${i+1}.png`)} alt=""/>
                            <div className="value">{list.value}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const device = [
    {
        name: 'FOTS',
        value: 210
    },
    {
        name: 'IP-PBX',
        value: 134
    },
    {
        name: 'Broadcast',
        value: 116
    },
    {
        name: 'TETRA',
        value: 128
    },
    {
        name: 'SADG',
        value: 14
    },
    {
        name: 'Rectifier',
        value: 15
    },
    {
        name: 'UPS',
        value: 16
    },
    {
        name: 'DOOR',
        value: 44
    },
    {
        name: 'FIRE',
        value: 7
    },
    {
        name: 'HVAC',
        value: 7
    }
]

export default DeviceStatus