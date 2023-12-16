import React, { useState } from "react";

import '../css/DisplayCard.css'

export default function DisplayCard() {
    const [isCardClicked, setIsCardClicked] = useState(false)

    return(
        <div className="dis-card-container" onClick={() => setIsCardClicked(!isCardClicked)}>
            <div className="dis-card-title-container">
                This is the longest title
            </div>
            <div className="dis-credit-container">
                By User Name
            </div>
            <div className="dis-tag-container">
                <div className="dis-tag">#Tag 1</div>
                <div className="dis-tag">#Tag 1</div>
                <div className="dis-tag">#Tag 1</div>
            </div>
            <div className="btn-container">
                {isCardClicked && <a href="https://lrc-get.vercel.app/" target="_" className="dis-btn-container">
                    View
                </a>}
            </div>
        </div>
    )
}