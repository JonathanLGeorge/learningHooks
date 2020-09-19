import React, { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Song Name:</label>
      <input
        type="text"
        value={title}
        required
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input type="submit" value="add song" />
    </form>
  );
};

export default Form;
