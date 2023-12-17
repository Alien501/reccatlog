import { useState } from 'react'

import './App.css'
import Header from './elements/Header'
import Textbox from './elements/Textbox'
import IconButton from './elements/IconButton'
import DropDown from './elements/DropDown'
import IconTextButton from './elements/IconTextButton'
import DisplayCard from './elements/DisplayCard'
import FAB from './elements/FAB'
import Overlay from './elements/Overlay'
import PopUp from './elements/PopUp'

function App() {
  const [isSearchActive, setIsSearchActive] = useState(false)
  const [isFabClicked, setIsFabClicked] = useState(false)

  const [searchBoxContent, setSearchBoxContent] = useState('')
  const [newContentText, setNewContentText] = useState({
    rollno: '012345',
    title: '',
    link: ''
  })

  function onPopChange(event) {
    setNewContentText(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value 
      }
    })
  }

  function onTextEnter(event){
      setSearchBoxContent(prev => event.target.value);
  }

  function fabClicked() {
    setIsFabClicked(prev => !prev)
  }


  return (
    <>
      <div className="head"></div>
      <Header />
      <div className={`search-top ${isSearchActive? 'active':''}`} onFocus={() => setIsSearchActive(true)} onBlur={() => setIsSearchActive(false)}>
        <Textbox 
          placeholder={'Search Something...'}
          status={true}
          onTextEnter={onTextEnter}
          name={'searchq'}
          textBoxContent={searchBoxContent}
        />
        <IconButton 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search btn-icon" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>}
        />
      </div>
      <hr />

      <div className="drop-down-container">
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
      </div>
      <IconTextButton 
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filter icon" viewBox="0 0 16 16">
        <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
        </svg>}
        text={'Filter'}
      />
      <hr />

      <DisplayCard />
      <FAB 
        onClick={fabClicked}
      />
      {isFabClicked && <Overlay />}
      {isFabClicked && 
        <PopUp onCloseClick={fabClicked}
          onChange={onPopChange}
          textValue={newContentText}
        />   
      }
    </>
  )
}

export default App
