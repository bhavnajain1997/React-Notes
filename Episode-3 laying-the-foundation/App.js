import React from "react"
import ReactDOM from "react-dom"

//Without JSX
const heading = React.createElement("h1",{id:"heading"},"Namaste React ");

//With JSX

const jsxHeading = <h1 id="heading">Namaste React Using JSX</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading)