import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const eventDataAPI = createAsyncThunk("eventAPI", async () => {
    const response = await axios.get("/rest/tnms/dashboard/event");
    return response.data;
});

export const todayEventAPI = createAsyncThunk("todayAPI", async () => {
    const response = await axios.get("/rest/tnms/dashboard/evtCount");
    return response.data;
});

export const stationStatusAPI = createAsyncThunk("stationAPI", async () => {
    const response = await axios.get("/rest/tnms/dashboard/evtCount/station");
    return response.data;
});

export const deviceStatusAPI = createAsyncThunk("deviceAPI", async () => {
    const response = await axios.get("./data/deviceStatus.json");
    return response.data;
});
export const eventDeviceTable = createAsyncThunk("eventDeviceAPI", async () => {
    const response = await axios.get("./data/eventDeviceTable.json");
    return response.data;
});


export const main = createSlice({
    name: "main",
    initialState: {
        page: "dashboard",
        eventData: [],
        deviceStatus: [],
        stationList:[],
        todayData:[],
        eventDeviceList: [],
        eventTrend: { critical: [], warn: [], major: [] },
    },
    reducers: {
        setPagination: (state, action) => {
            state.page = action.payload;
        },
    },
    extraReducers: {
        [eventDataAPI.fulfilled]: (state, action) => {
            state.eventData = action.payload.data.list;
        },
        [todayEventAPI.fulfilled]: (state, action) => {
            state.todayData = action.payload.data.count;
        },
        [stationStatusAPI.fulfilled]: (state, action) => {
            state.stationList = action.payload;
        },
        [deviceStatusAPI.fulfilled]: (state, action) => {
            state.deviceStatus = action.payload;
        },
        [eventDeviceTable.fulfilled]: (state, action) => {
            state.eventDeviceList = action.payload;
        },
    },
});

export const { setPagination } = main.actions;

export default main.reducer;
