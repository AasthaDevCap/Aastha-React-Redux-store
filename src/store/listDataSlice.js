import { createSlice } from "@reduxjs/toolkit";
const initialState={
    textdata:"",
    addList:[],
    pickedVal:"",
    onEditval:""
}

const addList=createSlice({
    name:"addlistdataslice",
    initialState,
    reducers:{
        inputChange(state,action){
            return(state={
                ...state,
                textdata:action.payload
            })
        },
        btnClick(state,action){
            return(state={
                ...state,
                addList:action.payload
            })
        },
        
        selectedEditValue(state,action){
            return(state={
                ...state,
                pickedVal:action.payload
            })
        },
        setEditVal(state,action){
            return(state={
                ...state,
                onEditval:action.payload
            })
        },
        

    }
});
export const {inputChange,btnClick,selectedEditValue,setEditVal}=addList.actions;
export default addList.reducer;