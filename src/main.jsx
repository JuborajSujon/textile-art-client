import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <>
        <h1 className="text-3xl font-bold underline font-raleway">
          Hello world!
        </h1>
        <p className="font-chakraPetch">This is a paragraph</p>
      </>
    </HelmetProvider>
  </React.StrictMode>
);
