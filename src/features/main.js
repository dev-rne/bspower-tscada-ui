import { createSlice } from "@reduxjs/toolkit";

export const main = createSlice({
    name: "main",
    initialState: {
        eventData: [],
        deviceStatus:[],
        topList:[]
    },
    reducers: {
        setEventData: (state, action) => {
            state.eventData = action.payload
        },
        setDeviceStatusData: (state, action) => {
            state.deviceStatus = action.payload;
        },
        setStatusTopListData: (state, action) => {
            state.topList = action.payload;
        },
    },
});
// Action creators are generated for each case reducer function
export const { setEventData, setDeviceStatusData, setStatusTopListData } = main.actions;

export default main.reducer;
