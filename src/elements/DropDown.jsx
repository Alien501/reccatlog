import React from "react";

import '../css/DropDown.css'

export default function DropDown(){
    return(
        <select name="something" id="select-ele">
            <option value="def" selected>Dept</option>
            <option value="cs">CSE</option>
            <option value="it">IT</option>
            <option value="csd">CSD</option>
        </select>
    )
}