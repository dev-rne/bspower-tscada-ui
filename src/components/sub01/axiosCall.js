import axios from "axios";
import { setEventData } from "@features/main";
import { useDispatch } from "react-redux";


export const EventDataAPI = async () => {

    const dispatch = useDispatch();
    
    let response = await axios.get("./data/eventConsole.json");
    dispatch(setEventData(response.data));
};