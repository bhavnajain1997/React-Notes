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

***************************************************************************************************************************************************************************************************************************************************************************************************************************

# Episode-5 Let's get hooked

React Hooks:- 

# There are two types of Export and Inport
1. Default Export / Default Import 

   export default Component;
   import Component from "path";

** Note :- A module cannot have a multiple default exports. **
2. Named Export  / Named Import:- If you export multiple things from the same file. 

   export const Component;
   import {Component} from "path";





