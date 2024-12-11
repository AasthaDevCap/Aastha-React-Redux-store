import { configureStore } from "@reduxjs/toolkit";
import addList from "../store/listDataSlice"
const store=configureStore({
    reducer:{
        listSlice:addList,
    }
});
export default store;