import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const eventDataAPI = createAsyncThunk("eventAPI", async () => {
    const response = await axios.get("./data/eventConsole.json");
    return response.data;
});
export const DeviceStatusAPI = createAsyncThunk("statusAPI", async () => {
    const response = await axios.get("./data/deviceEvents.json");
    return response.data;
});
export const DeviceManagementAPI = createAsyncThunk("managementAPI", async () => {
    const response = await axios.get("./data/deviceStatus.json");
    return response.data;
});
export const EMSStatusAPI = createAsyncThunk("emsAPI", async () => {
    const response = await axios.get("./data/deviceStatusList.json");
    return response.data;
});


export const station = createSlice({
    name: "station",
    initialState: {
        eventData: [],
        deviceStatus:[],
        deviceManagement:[],
        emsList:[],
    },
    reducers: {
    },
    extraReducers: {
        [eventDataAPI.fulfilled]: (state, action) => {
            state.eventData = action.payload;
        },
        [DeviceStatusAPI.fulfilled]: (state, action) => {
            state.deviceStatus = action.payload;
        },
        [DeviceManagementAPI.fulfilled]: (state, action) => {
            state.deviceManagement = action.payload;
        },
        [EMSStatusAPI.fulfilled]: (state, action) => {
            state.emsList = action.payload;
        }
    },
});

export default station.reducer;
