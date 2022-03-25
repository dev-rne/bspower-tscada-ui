import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// cctv 7개 리스트
export const cctvListData = createAsyncThunk("cctvListAPI", async () => {
    const response = await axios.get("/openapi/v1/devicelist");
    return response.data;
});
export const cctvControl = createAsyncThunk("cctvControlAPI", async (obj) => {
    const response = await axios.get("/openapi/v1/" + obj.id + "/" + obj.type);
    return response.data;
});

export const cctv = createSlice({
    name: "cctv",
    initialState: {
        cctvList: [],
    },
    reducers: {},
    extraReducers: {
        [cctvListData.fulfilled]: (state, action) => {
            state.cctvList = action.payload.result;
        },
        [cctvControl.fulfilled]: (state, action) => {
            console.log("cctvControl");
        },
    },
});

// Action creators are generated for each case reducer function
// export const { setCctvVal, setFloorVal, setFloor_1, setFloor_2, setRtspurl } =
//     cctv.actions;

export default cctv.reducer;
