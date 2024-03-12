import { useEffect , useState } from "react";
const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    // check if online

    useEffect(() => {
       window.addEventListener("offLine", () => {
        setOnlineStatus(false);
       })

       window.addEventListener("offLine", () => {
        setOnlineStatus(false);
       })
    },[])

    return onlineStatus;
}

export default useOnlineStatus;