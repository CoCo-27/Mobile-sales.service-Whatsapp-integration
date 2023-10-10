import context from "./Context";
import React from "react";

const Provider = context.Provider;
function ContextProvider(props) {
  return (
    <Provider value={props.testContext}>
      {props.children}
      <div></div>
    </Provider>
  );
}

export default ContextProvider;
