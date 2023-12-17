import React from "react";

import '../css/IconTextButton.css'

export default function IconTextButton({icon, text}) {
    return(
        <button className="icon-text-btn">
            <div className="icon-btn-cont">
                {icon}
            </div>
            <p className="btn-text">{text}</p>
        </button>
    )
}