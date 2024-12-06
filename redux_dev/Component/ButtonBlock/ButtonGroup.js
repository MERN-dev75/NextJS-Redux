"use client"

import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./ButtonGroup.module.scss"; // Import the SCSS module
import { addContent } from "../../Redux/Content/action";

const ButtomBlockUI = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() !== "") {
      dispatch(addContent(inputValue))
      setInputValue("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.bottomLock}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter item"
          className={styles.input}
        />
        <button className={styles.addButton} onClick={addItem}>
          Add Item
        </button>
      </div>
    </div>
  );
};

export default ButtomBlockUI;
