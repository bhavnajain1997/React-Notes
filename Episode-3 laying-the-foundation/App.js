import React from "react"
import ReactDOM from "react-dom"

//Without JSX
const heading = React.createElement("h1",{id:"heading"},"Namaste React ");

//With JSX
//React Element
const jsxHeading = (
<h1 id="heading" className="head" tabIndex={5}>
    Namaste React Using JSX
    </h1>
    )
;
//////////////
const Title = () => (
    <h1 className="head">Hello world</h1>
);
// React Functional Component:-
// Component Composition
const HeadingComponent = () => (
    <div className="container">
      {Title()}  
     <Title/>
    <h1>Namaste React Functional Component</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)