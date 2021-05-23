import React, { useState } from 'react';
import Select from "./components/Select";
import dropDownValues from './dropDownData.json';
import { AppContainer, OptionsWrapper, CheckBoxWrapper, Label, Input } from './AppComponents';

const App = () => {
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [isBgDark, setIsBgDark] = useState(false);
  const [extended, setExtended] = useState(false);
  const [options] = useState(dropDownValues);

  const toggleBgSwitch = () => {
    setBgColor(prev => prev==="#FFFFFF" ? "#191D2F" : "#FFFFFF");
    setIsBgDark(prev => !prev)
  }
  
  return (
    <AppContainer backgroundColor={bgColor}>
      <OptionsWrapper>
          <CheckBoxWrapper>
              <Input id="bg-color-input" value={isBgDark} type="checkbox" onChange={toggleBgSwitch} />
              <Label isBgDark={isBgDark} htmlFor="bg-color-input"> 
                Change to dark mode 
              </Label>
          </CheckBoxWrapper>
          <CheckBoxWrapper>
              <Input id="check-extended-input" value={extended} type="checkbox" onChange={() => setExtended(prev => !prev)} />
              <Label isBgDark={isBgDark} htmlFor="check-extended-input"> 
                Check this box to test how the select menu behaves with extended version 
              </Label>
          </CheckBoxWrapper>
      </OptionsWrapper>
      {/* Calling the Select component here */}
      <Select 
        isBgDark={isBgDark} 
        extended={extended} 
        options={options}
        defaultValue="Select"
        labelToDisplay="label" 
        handleChange={() => {}}
      />
  </AppContainer>
  );
}

export default App;
