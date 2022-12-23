import React from "react";
import ReactDOM from "react-dom/client";
import Pet from "./Pet.jsx";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Hazel" animal="cat" breed="tuxedo" />
      <Pet name="Ochi" animal="dog" breed="mixed" />
      <Pet name="Roach" animal="horse" breed="mare" />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
