import { useState } from "react";
export default function TodoInput(props) {
  const { val, setVal, handleAddTodos } = props;
  return (
    <header>
      <input
        placeholder="Enter Todo..."
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleAddTodos(val);
          setVal("");
        }}
      >
        Add{" "}
      </button>
    </header>
  );
}
