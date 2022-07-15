import React, { useEffect, useState, useContext } from "react";
import {SettingsContext} from "../context/settings";
import Form from "./form";
import List from "./list";

const ToDo = () => {
  const state = useContext(SettingsContext);


  function toggleComplete(id) {
    const items = state.list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    state.setList(items);
  }

  

  return (
    <>

      { !state.isHidden &&
      state.list.map((item) => (
        <div id = "todo-card"key={item.id}>
          <p>{item.text}</p>
          <p>
            <small>Assigned to: {item.assignee}</small>
          </p>
          <p>
            <small>Difficulty: {item.difficulty}</small>
          </p>
          <div onClick={() => toggleComplete(item.id)}>
            Complete: {item.complete.toString()}
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};

export default ToDo;
