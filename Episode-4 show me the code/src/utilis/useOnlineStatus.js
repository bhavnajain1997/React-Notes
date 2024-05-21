import { useEffect , useState } from "react";
const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState();

    // check if online

    useEffect(() => {
       window.addEventListener("onLine", () => {
        setOnlineStatus(true);
       })

       window.addEventListener("onLine", () => {
        setOnlineStatus(true);
       })
    },[])

    return onlineStatus;
}

export default useOnlineStatus;