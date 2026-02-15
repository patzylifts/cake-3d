import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ChatButton from "./components/ChatButton.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
            <ChatButton/>
        </BrowserRouter>
    </React.StrictMode>
);
