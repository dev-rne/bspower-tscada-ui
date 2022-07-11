import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// cctv 7개 리스트
export const cctvListData = createAsyncThunk("cctvAPI", async () => {
    const response = await axios.get("./data/occCctvList.json");
    return response.data;
});

export const eventDataAPI = createAsyncThunk("eventAPI", async () => {
    const response = await axios.get("/rest/tnms/dashboard/event?station=OCC");
    // const response = await axios.get("./data/event.json");
    return response.data;
});

export const deviceStatusAPI = createAsyncThunk("deviceAPI", async () => {
    // const response = await axios.get("./data/deviceStatus.json");
    const response = await axios.get("/rest/tnms/dashboard/device?station=OCC");
    return response.data;
});

export const occ = createSlice({
    name: "occ",
    initialState: {
        selectFloor: "0", // 0, 100, 200
        selectCctv: "4", // 1 ~ 7 1F : 4, 5,6,7  2F : 1, 2, 3
        floor_1: [],
        floor_2: [],
        rtspurl: "",
        eventData: [],
        todayData: [],
        deviceStatus: [],
        cctvList: { floor_1: [], floor_2: [] },
        unityReady: false,
    },
    reducers: {
        setFloorVal: (state, action) => {
            state.selectFloor = action.payload;
        },
        setCctvVal: (state, action) => {
            state.selectCctv = action.payload;
        },
        setFloor_1: (state, action) => {
            state.floor_1 = action.payload;
        },
        setFloor_2: (state, action) => {
            state.floor_2 = action.payload;
        },
        setRtspurl: (state, action) => {
            state.rtspurl = action.payload;
        },
        setUnityReady: (state) => {
            state.unityReady = true;
        },
    },
    extraReducers: {
        [eventDataAPI.fulfilled]: (state, action) => {
            state.eventData = action.payload.data.list;
        },
        [cctvListData.fulfilled]: (state, action) => {
            state.cctvList = action.payload;
            state.rtspurl = state.cctvList.floor_1[0].rtspurl;
        },
        [deviceStatusAPI.fulfilled]: (state, action) => {
            state.deviceStatus = action.payload.device;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setCctvVal,
    setFloorVal,
    setFloor_1,
    setFloor_2,
    setRtspurl,
    setUnityReady,
} = occ.actions;

export default occ.reducer;
