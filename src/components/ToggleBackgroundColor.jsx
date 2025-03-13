import React, { useState } from "react";
import "../style_toggle.css";

const ToggleBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  const handleClick = () => {
    setBackgroundColor((prev) => (prev === "white" ? "#1b1b1b" : "white"));
    setTextColor((prev) => (prev === "#1b1b1b" ? "#ffa31a" : "#1b1b1b"));
    setButtonStyle((prev) => (prev === "white" ? "#1b1b1b" : "white"));
  };

  return (
    <div style={{ backgroundColor, color: textColor }}>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: buttonStyle,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        {backgroundColor === "#1b1b1b" ? "Black Theme" : "White Theme"}
      </button>

      <section className="content">
        <h1>
          Welcome To A <br />
          Real Word...
        </h1>
      </section>
    </div>
  );
};

export default ToggleBackgroundColor;
