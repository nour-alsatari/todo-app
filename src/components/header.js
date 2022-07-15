import React, { useEffect, useState, useContext } from "react";
import {SettingsContext} from "../context/settings";


const Header = () => {
  const state = useContext(SettingsContext);

  return (
    <>
      <header>
        <h1>To Do List: {state.incomplete} items pending</h1>
      </header>
    </>
  );
};

export default Header;
