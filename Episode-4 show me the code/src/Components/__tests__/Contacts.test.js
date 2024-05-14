import {render, screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact Us page Test Cases", () => {
      test("Should load contact us component", ()=>{
            render(<Contact/>);
           const head = screen.getByRole("heading");
           // Assertion
           
           expect(head).toBeInTheDocument();
      })
      
      test("Should load button inside contact component", ()=>{
            render(<Contact/>);
           const button = screen.getByText("Submit");
           // Assertion
           
           expect(button).toBeInTheDocument();
      })
      
      test("Should load input name inside contact component", ()=>{
            render(<Contact/>);
           const inputName = screen.getByPlaceholderText("name");
           // Assertion
           
           expect(inputName).toBeInTheDocument();
      })
      
      test("Should load 2 input boxes on the Contact component",() => {
            render(<Contact/>)
            // Querying
            const inputBoxes = screen.getAllByRole("textbox")
      
            //Assertion
            expect(inputBoxes.length).toBe(2)
      })
})
