import { configureStore } from "@reduxjs/toolkit";
import sub03 from "./features/sub03";
import main from "./features/main";

export default configureStore({
    reducer: {
        sub03: sub03,
        main
    },
});
