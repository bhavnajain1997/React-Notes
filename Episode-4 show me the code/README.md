# Episode-4 Talk is cheap, show me the code.
# Food Ordering App Structure

1. Header Component
  - Logo
  - Nav items
2. Body Component
  - Search Bar
  - Restaurant Container
    - Restaurant Card
     - Image
     - Name of Restaurant, Star rating, cuisines, Delivery time
3. Footer
  - Copyright
  - links
  - Address
  - Contact

/////////////////////////////////////////////////////////////////////

Props:- Props is the short form of the property.Property is something which you can pass to the components. 
In simple words, Props are just argument to a function.

** Note:-
1. React will basically take all this property all this props and it will wrap it inside an object.
2. When you pass dynamically passes some data to a component you passes as a props.

**
Destructing on the flies:-

const header = ({resName,cuisine}) =>{
    return(
    <h2>{resName}</h2>
    <h2>{cuisine}</h2>
    )
}

////////////////////////////////////////////////////////////////////////////////////

Config Driven UI :- A website is driven/designed by data. Controlling your UI how the UI looks like using Data/Config.

Where the Config comes from?
Config comes from backend.
Api -> Config

///////////////////////////////////////////////////////////////////////////////////
*Note:- React itself says that never use index as a key.
* Optional Chaining:- Allows us to access an Object's properties without having to check if the object or it's properties exist.
=> represented by '?'
=> new feature introduced in javascript ES2020.

***************************************************************************************************************************************************************************************************************************************************************************************************************************

# Episode-5 Let's get hooked

# There are two types of Export and Inport
1. Default Export / Default Import 

   export default Component;
   import Component from "path";

** Note :- A module cannot have a multiple default exports. **
2. Named Export  / Named Import:- If you export multiple things from the same file. 

   export const Component;
   import {Component} from "path";

# State Variable:-
Super Power of React Variable

React Hooks:- A React Hooks is a normal Javascript function,which is given to us by React.It is pre build the only things is that the function comes with some super power tht function has some logic return behind the scene in React.

React Hooks (Normal JS utility function)
useState():- Superpower State variables in react.useState is to create state variable that is why the name is useState.
New way of creating variables. 
   const [searchTxt] = useState();
If we have to create local variables in react,you need to useState variables.

useEffect():- 

* Render:- Whenever a state variable is updates React will re-renders the component. 
* Re-render :- The logic of updates is UI is known as re-rendering.

* Reconcillation Algorithm:- Reconcillation Algorithm is also known as React fiber.

* Virtual DOM:- It is not an actual DOM.It is representation of Actual DOM.






