import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestListData.json"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})
test("Should Search Res list for burger text input", async() =>{
    await act(async () => render(
    <BrowserRouter>
       <Body/>
    </BrowserRouter>
    ))
    
   const searchBtn = screen.getByRole("button",{name : "Search"});
   const searchInput = screen.getByTestId("searchInput");
   fireEvent.change(searchInput, {target: {value: "burger"}})
   fireEvent.click(searchBtn)
   //screem should load 4 cards

   const cards = screen.getAllByTestId("resCard")
   expect(searchBtn).toBeInTheDocument();
   expect(cards.length).toBe(1)
})

