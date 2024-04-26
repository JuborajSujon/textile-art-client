import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
      </>
    </HelmetProvider>
  </React.StrictMode>
);
