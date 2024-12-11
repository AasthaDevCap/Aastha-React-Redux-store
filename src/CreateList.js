import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { inputChange,btnClick,editData, selectedEditValue, setEditVal} from "./store/listDataSlice";

const CreateList = () => {
    const dispatch=useDispatch();
    const storeValue=useSelector((state)=>state.listSlice);
    const onTextChange=(e)=>{
        dispatch(inputChange(e.target.value))
    }
    const onAddclick=()=>{
        let newData=[...storeValue?.addList,storeValue?.textdata];
        dispatch(btnClick(newData));
        dispatch(inputChange(""));

    }

    const onBtnDelete=(test)=>{
        let updateData=storeValue?.addList.filter((item)=>{
            return item !=test
        });
        dispatch(btnClick(updateData));
    }
    const onEdit=(item)=>{
        dispatch(selectedEditValue(item));
        dispatch(setEditVal(item));
    }
    const onSave = () => {
        const editedUpdate = storeValue?.addList.map((item) => {
            if (item === storeValue?.pickedVal) {
                return storeValue?.onEditval;
            }
            return item; 
        });
        dispatch(btnClick(editedUpdate));
        dispatch(selectedEditValue(""));
        dispatch(setEditVal(""));

    };
    const onEditChange=(item)=>{
        dispatch(setEditVal(item));

    }

    return (
        <>
        <p>Updated list:{storeValue?.addList.map((item)=>{
            let consition=storeValue.pickedVal==item;
            return(
                consition ?
                <ul>
                    <li> 
                    <input value={storeValue?.onEditval} onChange={(e)=>onEditChange(e.target.value)}/>
                    <button onClick={()=>{onBtnDelete(item)}} style={{marginLeft:"30px"}}>Delete</button>
                    <button onClick={onSave} style={{marginLeft:"30px"}}>Save</button>
                    </li>
                </ul> : <ul> 
                    <li>{item}
                    <button onClick={()=>{onBtnDelete(item)}} style={{marginLeft:"30px"}}>Delete</button>
                    <button onClick={()=>{onEdit(item)}} style={{marginLeft:"30px"}}>Edit</button>
                    </li>
                    </ul>
            )
        })}</p>
        <input
        value={storeValue?.textdata}
        onChange={(e)=>onTextChange(e)}
        style={{marginBottom:"10px"}}
        />
        <button onClick={onAddclick}>Add</button>
        </>
    )

}

export default CreateList;