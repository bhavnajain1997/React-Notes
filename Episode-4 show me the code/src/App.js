import React, { lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
//import Grocery from "./Components/Grocery";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {useState, useEffect} from 'react';
import UserContext from "./utilis/UserContext";
import { Provider } from "react-redux";
import appStore from "./utilis/appStore";
import Cart from "./Components/Cart";



const Grocery = lazy(() => import("./Components/Grocery"))
const AppLayout = () => {

  // authentication code return
  const [userName, setUserName] = useState();

  useEffect(() => {
 // Make an api call and send username and password
 const data = {
  name : 'Bhavna Jain'
 };
 setUserName(data.name)
  }, [])
  return  (
    <Provider store = {appStore()}>
    <UserContext.Provider value = {{loggedInUser: userName, setUserName}}> 
     <div className="app">
      <Header />
      <Outlet />
     </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout/>,
    children : [
      {
        path : '/',
        element : <Body/>
      },
      {
        path : '/about',
        element : <About/>,
        
      },
      {
        path : '/contact',
        element : <Contact/>,
      },
      {
        path : '/grocery',
        element : <Suspense fallback = {<h1>Loading.....</h1>}><Grocery/></Suspense>,
      },
      {
        path : '/restaurants/:resId',
        element : <RestaurantMenu/>,
      },
      {
        path : '/cart',
        element : <Cart/>
      }
    ],
    errorElement : <Error/>,
  }
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);
