import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEventData = createAsyncThunk("eventAPI", async () => {
    const response = await axios.get("./data/eventConsole.json");
    return response.data;
});

export const occ = createSlice({
    name: "occ",
    initialState: {
        selectFloor: "0", // 0, 100, 200
        selectCctv: "1", // 1 ~ 7 1F : 1,2,3  2F : 4, 5, 6, 7
        floor_1: [],
        floor_2: [],
        rtspurl: "",
        eventData: [],
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
        // eventAPI: async (state) => {
        //     let response = await axios.get("./data/eventConsole.json");
        //     console.log("data :: " + JSON.stringify(response));
        //     state.eventData = response.data;
        // },
    },
    extraReducers: {
        [fetchEventData.fulfilled]: (state, action) => {
            state.eventData = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setCctvVal, setFloorVal, setFloor_1, setFloor_2, setRtspurl } =
    occ.actions;

export default occ.reducer;
