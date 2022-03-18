import { Select } from "antd";
const { Option } = Select;

const Ticker = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <div className="ticker">
            <div className="title-box">Current Events</div>
            <div className="newsList"></div>
            <div className="select-box">
                <div className="label">Dashboard</div>
                <Select
                    defaultValue="dashboard"
                    style={{ width: 120 }}
                    onChange={handleChange}
                    className="selector"
                >
                    <Option value="dashboard">Dashboard</Option>
                    <Option value="occ">OCC</Option>
                    <Option value="tsetsii">TSETSII</Option>
                    <Option value="ss1">SS1</Option>
                    <Option value="ss2">SS2</Option>
                    <Option value="ss3">SS3</Option>
                    <Option value="ss4">SS4</Option>
                    <Option value="ss5">SS5</Option>
                    <Option value="ss6">SS6</Option>
                    <Option value="zuunbayan">ZUUNBAYAN</Option>
                </Select>
            </div>
        </div>
    );
};

export default Ticker;
