import { configureStore } from "@reduxjs/toolkit";
import sub03 from "./features/sub03";

export default configureStore({
    reducer: {
        sub03: sub03,
    },
});
