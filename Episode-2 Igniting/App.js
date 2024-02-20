import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => when we render this object it will be converted in Html Element => HTML Element(render)
// Simple way without JSX
// const heading = React.createElement("h1",{id:"heading"},"Namaste React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//with JSX : - JSX is not HTML in Javascript.JSX is a HTML-like or XML-like syntax.
//JSX - (transpiled before it reaches the JS Engine.) -> PARCEL -> BABEL(Babel is converted this code quickly that react will understand).


// JSX => React.createElement
// const heading = (
// <h1 className = "heading" tabIndex="5">
//     Namaste React using React!
//     </h1>);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// React Functional Component
// Arrow function
// const Title =() => (
//     <h1 className="head" tabIndex= "5">
//         Namaste React using JSX
//     </h1>  
// );

// Normal Function
const number = 1000;
const Title = function () {
    return (
      <h1 className="head" tabIndex= "5">
        Namaste React using JSX.</h1>
    );
};
const HeadingComponent = () => (
    <div id= "container">
        <Title />
        <h2>{number}</h2> 
         <h1>Namaste React Functional Component.</h1>
    </div>
    

);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)
     