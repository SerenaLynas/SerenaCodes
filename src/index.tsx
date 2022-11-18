import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);

const root = createRoot(rootEl);
root.render(<App />);