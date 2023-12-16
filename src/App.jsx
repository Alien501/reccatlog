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

  function fabClicked() {
    console.log(isFabClicked);
    setIsFabClicked(prev => !prev)
  }

  return (
    <>
      <div className="head"></div>
      <Header />
      <div className={`search-top ${isSearchActive? 'active':''}`} onFocus={() => setIsSearchActive(true)} onBlur={() => setIsSearchActive(false)}>
        <Textbox 
          placeholder={'Search Something...'}
        />
        <IconButton />
      </div>
      <hr />

      <div className="drop-down-container">
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
      </div>
      <IconTextButton />
      <hr />

      <DisplayCard />
      <FAB 
        onClick={fabClicked}
      />
      {isFabClicked && <Overlay />}
      <PopUp />
    </>
  )
}

export default App
