import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from 'html5-qrcode'

import DropDown from "./DropDown";
import Textbox from "./Textbox";
import '../css/PopUp.css'
import IconTextButton from "./IconTextButton";
import IconButton from "./IconButton";

export default function PopUp({onCloseClick, onChange, textValue, deptList, yearList, semList, typeList, onDropdownChange}) {
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
        }
    
        function error(error) {
            // console.error(error);
        }
    }, [])

    
    return(
        <div className="pop-up-container">
            <div className="instruction-container">Scan QR Code your ID <br />Card to Upload file</div>
            {!qrStatus.isFound && <div className="qr-container">
                <div id="reader"></div>
            </div>}
            {qrStatus.isFound && qrStatus.url}
            <div className="roll-container">220701317</div>
            <Textbox
                placeholder={'Title'}
                status={qrStatus.isFound}
                name={'title'}
                onTextEnter={onChange}
                textBoxContent={textValue.url}
            />
            <Textbox
                placeholder={'Google Drive Link'}
                status={qrStatus.isFound}
                name={'link'}
                onTextEnter={onChange}
                textBoxContent={textValue.link}
            />

            <div className="drop-down-container">
                <DropDown onOptionChange={onDropdownChange} optionList={deptList} name={'dept'}/>
                <DropDown onOptionChange={onDropdownChange} optionList={yearList} name={'year'}/>
                <DropDown onOptionChange={onDropdownChange} optionList={semList} name={'sem'}/>
                <DropDown onOptionChange={onDropdownChange} optionList={typeList} name={'type'}/>
            </div>

            <IconTextButton 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
              </svg>}
              text={'Upload'}
            />
            <IconButton 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
              </svg>}
              onClick={onCloseClick}
            />
        </div>
    )
}