import React from "react";

import '../css/Textbox.css'

export default function Textbox({placeholder}) {
    return(
        <input type="text" className="text-box" placeholder={placeholder}/>
    )
}