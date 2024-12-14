import Body from "./Components/Body"
import { Provider } from "react-redux"
import appStore from "./utilis/appStore"
function App(){
  return(
    <div>
      
     <Provider store={appStore}>
     <Body />
     </Provider>
    </div>
  )
}
export default App