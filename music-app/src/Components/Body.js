import Header from "./Header";
import Login from "./Login";
import {createBrowserRouter} from "react-router-dom";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Login/>
    },

  ])

    return(
        <div className="bg-gradient-to-br from-black  ">
                        <img className="fixed -z-10 w-screen" src="https://cdn.vox-cdn.com/thumbor/SvB3nl3s-M9kxP6Z62zLVVul8GI=/0x0:2040x1360/2040x1360/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/25378910/STK088_SPOTIFY_CVIRGINIA_D.jpg"/>

            <div className=" w-screen h-screen  ">
            <Header/>
            <Login/>
        </div>
        </div>
        
    )
}

export default Body