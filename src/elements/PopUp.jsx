import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from 'html5-qrcode'


import Textbox from "./Textbox";
import '../css/PopUp.css'

export default function PopUp() {
    const [qrStatus, setQrStatus] = useState({
        url: '',
        isError: false,
        isFound: false
    })

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 245,
                height: 245
            },
            fps: 5,
        })
    
        scanner.render(success, error);
    
        function success(result) {
            scanner.clear()
            setQrStatus(prev => {
                let newUrl = result;
    
                return {
                    ...prev,
                    url: newUrl,
                    isFound: true
                }
            })
            console.log(qrStatus);
        }
    
        function error(error) {
            // console.error(error);
        }
    }, [])


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
                <div id="reader"></div>
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