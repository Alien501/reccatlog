import React, { useState } from "react";

import '../css/Textbox.css'

export default function Textbox({name ,placeholder, status, onTextEnter, textBoxContent}) {
    return(
        {...!status? 
            <input name={name} type="text" className="text-box" placeholder={placeholder} disabled/>: 
            <input name={name} type="text" className="text-box" placeholder={placeholder} value={textBoxContent} onChange={onTextEnter}/>
        }
    )
}