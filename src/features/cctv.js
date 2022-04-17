import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// cctv 7개 리스트
export const cctvListData = createAsyncThunk("cctvListAPI", async () => {
    // http://222.112.53.201:6507
    const response = await axios.get(
        // "http://222.112.53.201:6507/openapi/v1/devicelist"
        "http://115.95.137.19:6507/openapi/v1/devicelist"
        // "/rest/tnms/dashboard/cctv"
        // "/rest/tnms/dashboard/cctv"
    );
    return response.data;
});
export const cctvControl = createAsyncThunk("cctvControlAPI", async (obj) => {
    const response = await axios.get(
        // "http://222.112.53.201:6507/openapi/v1/" + obj.id + "/" + obj.type
        "http://115.95.137.19:6507/openapi/v1/" + obj.id + "/" + obj.type
    );
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
