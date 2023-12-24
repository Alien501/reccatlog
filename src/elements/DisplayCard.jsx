import React, { useState } from "react";

import '../css/DisplayCard.css'

export default function DisplayCard({cardTitle, cardUploaderName, cardYear, cardDept, cardType, cardLink}) {
    const [isCardClicked, setIsCardClicked] = useState(false)

    return(
        <div className="dis-card-container" onClick={() => setIsCardClicked(!isCardClicked)}>
            <div className="dis-card-title-container">
                {cardTitle}
            </div>
            <div className="dis-credit-container">
                By {cardUploaderName}
            </div>
            <div className="dis-tag-container">
                <div className="dis-tag">#{cardYear}</div>
                <div className="dis-tag">#{cardDept}</div>
                <div className="dis-tag">#{cardType}</div>
            </div>
            <div className="btn-container">
                {isCardClicked && <a href={cardLink} target="_" className="dis-btn-container">
                    View
                </a>}
            </div>
        </div>
    )
}