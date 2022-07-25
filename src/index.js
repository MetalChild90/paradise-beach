import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const loader = document.querySelector(".loader");

const hideLoader = () => loader.classList.add("loader--hide");

setTimeout(() => {
  root.render(
    <React.StrictMode>
      <App hideLoader={hideLoader} />
    </React.StrictMode>
  );
}, 7000);
