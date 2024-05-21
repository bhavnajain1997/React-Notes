import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA_NAME from "../mocks/mockRestMenu.json"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utilis/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
global.fetch = jest.fn(()=>
     Promise.resolve({
        json:()=>JSON.parse(Promise.resolve(MOCK_DATA_NAME)) ,
        
            
           
    })
)
test("Should load Restaurant Menu Component",async () => {
    await act(async () => render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header/>
           <RestaurantMenu />
          </Provider>
        </BrowserRouter>
    
    )) 
    const accordionHeader = screen.getByText("Whopper (6)")
    fireEvent.click(accordionHeader)
    
    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    const addBtn = screen.getAllByRole("button",{name : "Add +"})
    fireEvent.click(addBtn[0])
    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument()
})