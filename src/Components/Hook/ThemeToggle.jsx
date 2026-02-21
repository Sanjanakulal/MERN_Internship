import React, { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)


  const handleToggle = () => setDark(!dark)
 

  return (
    <div
      style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        height: "100vh",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>

      <button
        onClick={handleToggle}
        style={{
          padding: "6px 12px",
          backgroundColor: "lightblue",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}