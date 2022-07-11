import { Select, Tooltip } from "antd";
import Marquee from "react-fast-marquee";
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setPagination,eventDataAPI } from "@features/main";
import { stationEventDataAPI } from "@features/station";
import {useEffect, useState} from 'react';

const { Option } = Select;

const Ticker = ({dataList}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const location = useLocation()
    const page =  useSelector((state) => {
        return state.main.page
    });

    const handleChange = (value) => {
        dispatch(setPagination(value));
        if(value === 'dashboard'){
            navigate('/')
        }else if(value === 'occ'){
            navigate('/occ')
        }else{
            navigate(`/station#${value}`)
        }
    };

    useEffect(()=>{
        if(location.pathname === '/'){
            dispatch(setPagination('dashboard'));
            dispatch(eventDataAPI());
        }else if(location.pathname === '/occ'){
            dispatch(setPagination('occ'));
        }else{
            dispatch(setPagination(location.hash.slice(1)));
            dispatch(stationEventDataAPI(page));
            // dispatch(eventDataAPI());
        }
    },[page])

    const [eventList, setEventList] = useState([])

    useEffect(()=>{
        const list = dataList.filter(list => list.severity !== 'CLEAR')
        setEventList(list);
    },[dataList])

    return (
        <div className="ticker">
            <div className="title-box">Current Events</div>
            <div className="newsList">
                <Marquee speed={50} pauseOnHover={true}>
                {
                    eventList && eventList.map((list,i) => {
                        return(
                              <Tooltip title={`Host name: ${list.hostName}`} color={list.severity === 'CRITICAL' ? 'red' : list.severity === 'TROUBLE' ? 'orange' : 'yellow'} key={i}>
                                  <div className={ list.severity + " li"} key={i}>{list.conditionLog}</div>
                              </Tooltip>
                        )
                    })
                }
                </Marquee>
            </div>
            <div className="select-box">
                <div className="label">Dashboard</div>
                <Select
                    value={page}
                    defaultValue="dashboard"
                    style={{ width: 120 }}
                    onSelect={handleChange}
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
