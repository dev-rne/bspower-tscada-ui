import { Select } from 'antd';
const { Option } = Select;

const Ticker = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    return(
        <div className="ticker">
            <div className="title-box">Current Events</div>
            <div className="newsList"></div>
            <div className="select-box">
                <div className="label">Dashboard</div>
                <Select defaultValue="occ" style={{ width: 120 }} onChange={handleChange} className="selector">
                    <Option value="occ">OCC</Option>
                    <Option value="lucy">Lucy</Option>
                    </Select>
            </div>
        </div>
    )
}


export default Ticker;