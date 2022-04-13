import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const stationEventDataAPI = createAsyncThunk(
    "stationEventAPI",
    // async (page) => {
    //     const response = await axios.get("/rest/tnms/dashboard/event", {
    //         params: { station: page },
    //     });
    //     return response.data;
    // }
    async () => {
        const response = await axios.get("./data/event.json");
        return response.data;
    }
);

export const DeviceStatusAPI = createAsyncThunk("statusAPI", async () => {
    const response = await axios.get("./data/deviceEvents.json");
    return response.data;
});
export const DeviceManagementAPI = createAsyncThunk(
    "managementAPI",
    async () => {
        const response = await axios.get("./data/deviceStatus.json");
        return response.data;
    }
);
export const EMSStatusAPI = createAsyncThunk("emsAPI", async () => {
    const response = await axios.get("./data/deviceStatusList.json");
    return response.data;
});
export const eventTrendAPI = createAsyncThunk("eventTrendAPI", async () => {
    const response = await axios.get("./data/eventsTrend.json");
    return response.data;
});

export const station = createSlice({
    name: "station",
    initialState: {
        eventData: [],
        deviceStatus: [],
        deviceManagement: [],
        emsList: [],
        eventTrend: { critical: [], warn: [], major: [] },
    },
    reducers: {},
    extraReducers: {
        [stationEventDataAPI.fulfilled]: (state, action) => {
            state.eventData = action.payload.data.list;
        },
        [DeviceStatusAPI.fulfilled]: (state, action) => {
            state.deviceStatus = action.payload;
        },
        [DeviceManagementAPI.fulfilled]: (state, action) => {
            state.deviceManagement = action.payload;
        },
        [EMSStatusAPI.fulfilled]: (state, action) => {
            state.emsList = action.payload;
        },
        [eventTrendAPI.fulfilled]: (state, action) => {
            state.eventTrend = action.payload;
        },
    },
});

export default station.reducer;
