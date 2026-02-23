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
      <p>{dark ? "Theme is vital to a story for many reasons but arguably the most important is that it is through thematic ideas that a writer most creates resonance and emotion in an audience. " : " Theme is the inferred stance taken on the central topic or message of a story.Themes are used to communicate important ideas and messages about issues that face the characters and the setting of a narrative."}</p>

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