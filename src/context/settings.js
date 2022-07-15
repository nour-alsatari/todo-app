import React, { useState } from "react";

export const SettingsContext = React.createContext();

export default function SettingsProvider(props) {
  //state
  const [isHidden, setisHidden] = useState(false); // Display or Hide completed items (boolean).
  const [numerOfItemsDisplayed, setnumerOfItemsDisplayed] = useState(5); // Number of items to display per screen (number).
  const [sortField, setsortField] = useState("descending"); // Default sort field (string).
  const [incomplete, setIncomplete] = useState([]);
  const [list, setList] = useState([]);


  //Manually set (hard code) those state settings in the context provider’s state, they should not be changeable.??

  const state = { setisHidden,isHidden, numerOfItemsDisplayed, sortField,setsortField, incomplete, setIncomplete, list, setList};
  return (
    <>
      <SettingsContext.Provider value={state}>
        {props.children}
      </SettingsContext.Provider>
    </>
  );
}
