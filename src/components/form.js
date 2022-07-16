import {
  Card,
  Button,
  FormGroup,
  InputGroup,
  Switch,
  Elevation,
  ButtonGroup,
  AnchorButton,
} from "@blueprintjs/core";

import React, { useEffect, useState, useContext } from "react";
import useForm from "../hooks/form.js";
import { SettingsContext } from "../context/settings";

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

  useEffect(() => {
    localStorage.setItem("hide", JSON.stringify(state.isHidden));
  }, [state.isHidden]);

  return (
    <>
      <FormGroup id="form">
        <form onSubmit={handleSubmit}>
          <Card id="form-card" elevation={Elevation.TWO}>
            <h2>Add To Do Item</h2>
            <label>
              <span>To Do Item</span>
              <InputGroup
                onChange={handleChange}
                name="text"
                type="text"
                placeholder="Item Details"
              />
            </label>

            <label>
              <span>Assigned To</span>
              <InputGroup
                onChange={handleChange}
                name="assignee"
                type="text"
                placeholder="Assignee Name"
              />
            </label>
            <div className="settings">
              <div>
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
                  <Button fill="true" type="submit">
                    add item
                  </Button>
                </label>
              </div>
              <div className="displaySettings">
                <label>
                  <Switch
                    className="displaySettings"
                    checked={state.isHidden}
                    label="show complete"
                    onChange={() => {
                      state.setisHidden(!state.isHidden);
                    }}
                  />
                </label>
              </div>
            </div>
          </Card>
        </form>
      </FormGroup>
      <div></div>
    </>
  );
};

export default Form;
