import React, { useState } from "react";

export const ButtonCounter = ({ name, onClicked }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    onClicked && onClicked(count);
  };

  return (
    <button onClick={() => handleClick()} class="btn btn-primary">
      {name} - You clicked me {count} times
    </button>
  );
};
