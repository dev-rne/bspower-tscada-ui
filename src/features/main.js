import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const eventDataAPI = createAsyncThunk("eventAPI", async () => {
    const response = await axios.get("/rest/tnms/dashboard/event");
    return response.data;
});

export const todayEventAPI = createAsyncThunk("todayAPI", async () => {
    const response = await axios.get("/rest/tnms/dashboard/evtCount");
    console.log(response.data);
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
export const statusTop10API = createAsyncThunk("top10API", async () => {
    const response = await axios.get("./data/toplist.json");
    return response.data;
});
export const EMSStatusAPI = createAsyncThunk("emsAPI", async () => {
    const response = await axios.get("./data/deviceStatusList.json");
    return response.data;
});
export const eventTrendAPI = createAsyncThunk("eventTrendAPI", async () => {
    const response = await axios.get("./data/eventsTrend.json");
    return response.data;
});

export const main = createSlice({
    name: "main",
    initialState: {
        page: "dashboard",
        eventData: [],
        deviceStatus: [],
        topList: [],
        todayData:[],
        emsList: [],
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
        [deviceStatusAPI.fulfilled]: (state, action) => {
            state.deviceStatus = action.payload;
        },
        [statusTop10API.fulfilled]: (state, action) => {
            state.topList = action.payload;
        },
        [EMSStatusAPI.fulfilled]: (state, action) => {
            state.emsList = action.payload;
        },
        [eventTrendAPI.fulfilled]: (state, action) => {
            state.eventTrend = action.payload;
        },
        [eventDeviceTable.fulfilled]: (state, action) => {
            state.eventDeviceList = action.payload;
        },
    },
});

export const { setPagination } = main.actions;

export default main.reducer;
