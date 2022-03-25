import { configureStore } from "@reduxjs/toolkit";
import occ from "./features/occ";
import main from "./features/main";
import cctv from "./features/cctv";
import station from "./features/station";

export default configureStore({
    reducer: {
        occ,
        main,
        cctv,
        station,
    },
});
