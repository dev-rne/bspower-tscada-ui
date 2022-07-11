import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const eventDataAPI = createAsyncThunk("eventAPI", async () => {
    const response = await axios.get("/rest/tnms/dashboard/event");
    // const response = await axios.get("./data/event.json");
    return response.data;
});

export const todayEventAPI = createAsyncThunk("todayAPI", async () => {
    const response = await axios.get("/rest/tnms/dashboard/evtCount");
    // const response = await axios.get("./data//eventCount.json");
    return response.data;
});

export const deviceStatusAPI = createAsyncThunk("deviceAPI", async () => {
    // const response = await axios.get("./data/deviceStatus.json");
    const response = await axios.get("/rest/tnms/dashboard/device");
    return response.data;
});
export const eventDeviceTable = createAsyncThunk("eventDeviceAPI", async () => {
    // const response = await axios.get("./data/eventDeviceTable.json");
    const response = await axios.get("/rest/tnms/dashboard/evtCount/station");
    return response.data;
});

export const main = createSlice({
    name: "main",
    initialState: {
        page: "dashboard",
        eventData: [],
        deviceStatus: [],
        todayData: [],
        eventDeviceList: [],
        eventTrend: { critical: [], warn: [], major: [] },
    },
    reducers: {
        setPagination: (state, action) => {
            console.log("page change :::: " + action.payload);
            state.page = action.payload;
        },
        setDeviceStatus: (state, action) => {
            state.deviceStatus = action.payload;
        },
    },
    extraReducers: {
        [eventDataAPI.fulfilled]: (state, action) => {
            state.eventData = action.payload.data.list;
        },
        [todayEventAPI.fulfilled]: (state, action) => {
            state.todayData = action.payload.data.count;
        },
        [deviceStatusAPI.fulfilled]: (state, action) => {
            state.deviceStatus = action.payload.device;
        },
        [eventDeviceTable.fulfilled]: (state, action) => {
            state.eventDeviceList = action.payload.data.count;
        },
    },
});

export const { setPagination } = main.actions;

export default main.reducer;
