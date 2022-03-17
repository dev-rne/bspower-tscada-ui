import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import "antd/dist/antd.variable.min.css";
import "antd/dist/antd.dark.min.css";
import "@style/index.scss";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
