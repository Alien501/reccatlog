import React from "react";

import '../css/DropDown.css'

export default function DropDown({optionList, name, onOptionChange}){
    const optionElements = optionList.map((ele, key) => <option key={key} value={ele}>{ele.toUpperCase()}</option>)

    return(
        <select name={name} id="select-ele" onChange={(e) => onOptionChange(e)}>
            {optionElements}
        </select>
    )
}