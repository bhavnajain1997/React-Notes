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

# State React Variable:-
whenever state variables update, React triggers a reconcillation cycle(re-renders the component).
Super Power of React Variable

React Hooks:- A React Hooks is a normal Javascript function,which is given to us by React.It is pre build the only things is that the function comes with some super power that function has some logic return behind the scene in React.

React Hooks (Normal JS utility function)
useState():- Superpower State variables in react.useState is to create state variable that is why the name is useState.
New way of creating variables. 
   const [searchTxt] = useState();
If we have to create local variables in react,you need to useState variables.

useEffect():- UseEffect Hooks has own specific purpose.It take two arguments:-
1. Callback function 
2. Dependency array

* Render:- Whenever a state variable is updates React will re-renders the component. 
* Re-render :- The logic of updates is UI is known as re-rendering.

* Reconcillation Algorithm:- Reconcillation Algorithm is also known as React fiber.

* Virtual DOM:- It is not an actual DOM.It is representation of Actual DOM.


***************************************************************************************************************************************************************************************************************************************************************************************************************************

Episode-6 Exploring the world

* Monolith and Microservices:-
* Monolith:- When an app develop traditionally, they all are develop using monolith architecture.
* Microservices:- We have different services for different job.These all services combined together forms a big app.

** Two Approaches:- How UI & Web App Fetch the data from the backend:-

1. Load => API => Render the UI.
2. Load => Render => API => Re-render the UI with new data.

Ques:- Why React is fast?
Ans:- Virtual DOM is not making React fast. The React Fiber, the new reconcillation algorithm which finds out the difference b/w two virtual DOM and updates the DOM only when required and the portion of DOM which only that portion is required.That's why react is fast.

***************************************************************************************************************************************************************************************************************************************************************************************************************************

#Episode-7 - Finding the Path

Ques: - When is the useEffect called?
Ans:- The useEffect called after every render of that component because we put dependency array over here. So, this dependency array changes the behaviour of its render.

* Note:-
1. If no dependency array => useEffect is called on every render.
2. If dependency array is empty = [] => useEffect is called on only initial render(just once).
3. If we put some value in dependency array then it will only be called when the dependency changes.

* UseState() :- It is used for creating local state variable your functional component.

Note:-

App.js -> RootLevelComponent -> RoutingConfiguration

* Configuration :- Configuration means that some information define what will happen on a specific route.
* Router Provider :- Router Provider will actually Provider this routing configuration to our app.

      root.render(RouterProvider router = {Component})

Note:- React Router Dom is create a error page for us

Note:- Never use useState inside in If Else condition,For Loop.

Outlet:- Whenever their is a change in the path. This outlet will be filled with the chidren according to the path on what page we are.

* Two types of Routing in web Apps/React Apps:-
1. Client Side Routing
2. Server Side Routing

Link:- Link is a component which is given to us react-router-dom which is a special component and behind the scenes link is uses anchor tag.





