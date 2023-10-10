import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import indexReducer from "./redux/reducers/indexReducer";
import "bootstrap/dist/css/bootstrap.min.css";
const store = createStore(indexReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // {/* </React.StrictMode> */}
);

reportWebVitals();
