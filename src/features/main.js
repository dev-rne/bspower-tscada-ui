import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const eventDataAPI = createAsyncThunk("eventAPI", async () => {
    const response = await axios.get("./data/eventConsole.json");
    return response.data;
});
export const deviceStatusAPI = createAsyncThunk("deviceAPI", async () => {
    const response = await axios.get("./data/deviceStatus.json");
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


export const main = createSlice({
    name: "main",
    initialState: {
        page: 'dashboard',
        eventData: [],
        deviceStatus:[],
        topList:[],
        emsList:[]
    },
    reducers: {
        setPagination: (state, action) => {
            state.page = action.payload;
        }
    },
    extraReducers: {
        [eventDataAPI.fulfilled]: (state, action) => {
            state.eventData = action.payload;
        },
        [deviceStatusAPI.fulfilled]: (state, action) => {
            state.deviceStatus = action.payload;
        },
        [statusTop10API.fulfilled]: (state, action) => {
            state.topList = action.payload;
        },
        [EMSStatusAPI.fulfilled]: (state, action) => {
            state.emsList = action.payload;
        }
    },
});

export const { setPagination } = main.actions;

export default main.reducer;
