import {fireEvent,render,screen} from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import appStore from "../../utilis/appStore"
test("Should load Header Component with a login button",() =>{
 render(
 <BrowserRouter>
 <Provider store={appStore()} >
     <Header/>
  </Provider>
</BrowserRouter>
 );
   // Querying
   const loginBtn = screen.getByRole("button", {name : "Login"});
   // Assertion
   
   expect(loginBtn).toBeInTheDocument();
})

test("Should render Header Component with a Cart Items 0", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore()} >
        <Header/>
     </Provider>
   </BrowserRouter>
    );

    // Querying
   const cartItem = screen.getByText("Cart - (0 items)");
   // Assertion
   
   expect(cartItem).toBeInTheDocument();
})
test("Should change Login Button to Logout on click",()=>{
  render(
    <BrowserRouter>
    <Provider store={appStore()} >
        <Header/>
     </Provider>
   </BrowserRouter>
    );
  const loginButton = screen.getByRole("button",{name : "Login"});
  fireEvent.click(loginButton)
  const logoutButton = screen.getByRole("button", {name : "Logout"});

  expect(logoutButton).toBeInTheDocument();
})