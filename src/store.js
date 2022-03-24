import { configureStore } from "@reduxjs/toolkit";
import occ from "./features/Occ";

export default configureStore({
    reducer: {
        occ: occ,
    },
});
