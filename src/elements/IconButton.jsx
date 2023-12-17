import React from "react";

import '../css/IconButton.css'

export default function IconButton({icon, onClick}) {
    return(
        <button className="icon-btn" onClick={() => onClick()}>
            {icon}
        </button>
    )
}