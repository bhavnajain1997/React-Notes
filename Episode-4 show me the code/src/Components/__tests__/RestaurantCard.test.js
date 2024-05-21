import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/restCardMock.json";
import "@testing-library/jest-dom"
test("Should render RestaurantCard Component",() => {
    render(<RestaurantCard resData = {MOCK_DATA}/>)

   const foodName = screen.getByText("Chinese Wok")
   expect(foodName).toBeInTheDocument();
})
test("should render Restaurant Card with promoted label", ()=>{
    // Homework-test HOC- withpromotedlabel()
    render (<RestaurantCard/>)
    const promote = screen.getAllByLabelText("Promoted")
    expect(promote).toBeInTheDocument();
})