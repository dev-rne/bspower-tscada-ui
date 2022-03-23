import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import "antd/dist/antd.variable.min.css";
import "antd/dist/antd.dark.min.css";
import "@style/index.scss";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);
