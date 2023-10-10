import React from 'react'
import context from './context'
const Provider = context.Provider;
console.log(context)
function ContextProvider(props) {
    return (
        <Provider value={props.testData} >
            <div>
                 {props.children}
            </div>
        </Provider>

    )
}

export default ContextProvider