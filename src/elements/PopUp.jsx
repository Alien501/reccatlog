import React, { useEffect, useState } from "react";

import DropDown from "./DropDown";
import Textbox from "./Textbox";
import '../css/PopUp.css'
import IconTextButton from "./IconTextButton";
import IconButton from "./IconButton";

import { submitLink } from "../db/db";

export default function PopUp({onCloseClick, onChange, textValue, deptList, yearList, semList, typeList, onDropdownChange, rollNo, dp}) {
    const [rollStatus, setRollStatus] = useState(true)
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        setShowButton(prev => {
            let {dept, sem, type, year} = dp
            dept = (dept == undefined || dept == 'dept')? 'na': dept
            sem = (sem == undefined || sem == 'sem')? 'na': sem
            type = (type == undefined || type == 'type')? 'na': type
            year = (year == undefined || year == 'year')? 'na': year

            if(textValue.link.includes('https://drive.google.com/file/') && !(dept == 'na' || sem == 'na' || type == 'na' || year == 'na')){
                return true
            }

            return false
        })
    }, [textValue, onDropdownChange])

    async function onSubmit() {
        const res = await submitLink({
            title: textValue.title,
            rollNo: rollNo,
            type: dp.type,
            year: dp.year,
            sem: dp.sem,
            link: textValue.link,
            dept: dp.dept
        })

        console.log(res.data);
    }
    
    return(
        <div className="pop-up-container">
            <p className="warn">!!! Only Enter Google Drive Link !!!</p>
            <div className="roll-container">{rollNo}</div>
            <Textbox
                placeholder={'Title'}
                status={rollStatus}
                name={'title'}
                onTextEnter={onChange}
                textBoxContent={textValue.title}
            />
            <Textbox
                placeholder={'Google Drive Link'}
                status={rollStatus}
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

            {showButton && <IconTextButton 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
              </svg>}
              text={'Upload'}
              onClick={onSubmit}
            />}
            <IconButton 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
              </svg>}
              onClick={onCloseClick}
            />
        </div>
    )
}