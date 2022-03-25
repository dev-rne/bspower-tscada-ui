import { configureStore } from "@reduxjs/toolkit";
import occ from "./features/Occ";
import main from "./features/main";
import station from './features/station'

export default configureStore({
    reducer: {
        occ,
        main,
        station
    },
});
