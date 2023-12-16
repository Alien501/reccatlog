import React, { useState } from "react";
import QrReader from 'react-qr-scanner'


import Textbox from "./Textbox";
import '../css/PopUp.css'

export default function PopUp() {
    const [qrStatus, setQrStatus] = useState({
        url: '',
        isError: false,
        isFound: false
    })

    const ps = {
        height: 245,
        width: 245
    }

    function handleQrError() {
        setQrStatus(prev => {
            let newErrorStatus = true

            return {
                ...prev,
                isError: false
            }
        })
    }

    function handleScan(data) {
        // console.log(data != null? data.text:'Null');
        setQrStatus(prev => {
            let newUlr = data != null? data.text:'Null'
            return {
                ...prev,
                url: newUlr,
                isFound: newUlr != 'Null'? true: false
            }
        })

        
    }

    return(
        <div className="pop-up-container">
            {!qrStatus.isFound && <div className="qr-container">
                <QrReader
                    delay={0}
                    style={ps}
                    onError={handleQrError}
                    onScan={handleScan}
                />
            </div>}
            {qrStatus.isFound && qrStatus.url}
            <Textbox
                placeholder={'Title'}
            />
            <Textbox
                placeholder={'Google Drive Link'}
            />
        </div>
    )
}