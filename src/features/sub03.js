import { createSlice } from "@reduxjs/toolkit";

export const sub03 = createSlice({
    name: "sub03",
    initialState: {
        selectFloor: "0", // 0, 100, 200
        selectCctv: "1", // 1 ~ 7 1F : 1,2,3  2F : 4, 5, 6, 7
    },
    reducers: {
        setFloorVal: (state, action) => {
            state.selectFloor = action.payload;
        },
        setCctvVal: (state, action) => {
            state.selectCctv = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setCctvVal, setFloorVal } = sub03.actions;

export default sub03.reducer;
