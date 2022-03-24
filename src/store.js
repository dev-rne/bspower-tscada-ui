import { configureStore } from "@reduxjs/toolkit";
import occ from "./features/Occ";
import main from "./features/main";

export default configureStore({
    reducer: {
        occ,
        main
    },
});
