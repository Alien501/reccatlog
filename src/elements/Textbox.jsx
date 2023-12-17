import React from "react";

import '../css/Textbox.css'

export default function Textbox({placeholder, status}) {
    console.log(status);
    return(
        {...!status? <input type="text" className="text-box" placeholder={placeholder} disabled/>: <input type="text" className="text-box" placeholder={placeholder} />}
    )
}