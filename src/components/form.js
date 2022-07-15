import React, { useEffect, useState, useContext } from "react";
import useForm from "../hooks/form.js";
import {SettingsContext} from "../context/settings";

import { v4 as uuid } from "uuid";

const Form = () => {
  const { handleChange, handleSubmit } = useForm(addItem);
  const state = useContext(SettingsContext);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    state.setList([...state.list, item]);
  }

  function deleteItem(id) {
    const items = state.list.filter((item) => item.id !== id);
    state.setList(items);
  }

    useEffect(() => {
        let incompleteCount = state.list.filter((item) => !item.complete).length;
        state.setIncomplete(incompleteCount);
        document.title = `To Do List: ${state.incomplete}`;
        console.log(state.list);
      }, [state.list]);
    
      return (
        <>
          <form onSubmit={handleSubmit}>
            <h2>Add To Do Item</h2>
    
            <label>
              <span>To Do Item</span>
              <input
                onChange={handleChange}
                name="text"
                type="text"
                placeholder="Item Details"
              />
            </label>
    
            <label>
              <span>Assigned To</span>
              <input
                onChange={handleChange}
                name="assignee"
                type="text"
                placeholder="Assignee Name"
              />
            </label>
    
            <label>
              <span>Difficulty</span>
              <input
                onChange={handleChange}
                defaultValue={3}
                type="range"
                min={1}
                max={5}
                name="difficulty"
              />
            </label>
    
            <label>
              <button type="submit">Add Item</button>
            </label>
          </form>
    
         
        </>
      );
    };
  

  

export default Form;
