//@ts-nocheck
import React from "react";
import "./form.styles.css";

const Form = () => {
  const handleClick = (e) => {
    console.log("clicked", e.target.value);
  };
  return (
    <div>
      Use this form
      <form>
        <label for="12AM">
          12pm
          <input type="checkbox" id={12} name="12AM" value={12} onClick={handleClick} />
        </label>
        <label for="1AM">
          1pm
          <input type="checkbox" id={1} name="1AM" value={1} onClick={handleClick} />
        </label>
        <label for="2AM">
          2pm
          <input type="checkbox" id={2} name="2AM" value={2} onClick={handleClick} />
        </label>
        <label for="3AM">
          3pm
          <input type="checkbox" id={3} name="3AM" value={3} onClick={handleClick} />
        </label>
      </form>
    </div>
  );
};

export default Form;
