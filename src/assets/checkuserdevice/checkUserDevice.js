import { useEffect, useState } from "react";
import "./checkUserDevice.css";

export const CheckUserDevice = () => {
    const [UserDevice, setUserDevice] = useState(null);

    useEffect(() => {
        const userAgent = navigator.userAgent;
        const isNotDesktop = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        setUserDevice(isNotDesktop ? "Mobile" : "Desktop");
    }, [UserDevice]);

    // if not desktop
    if (UserDevice !== "Desktop") {
        return ( 
            <div className = "overlay" >
                <div className = "overlay-content" >
                    <h1> Device Incompatible </h1> 
                    <h2> for some time... I'm working on it :(</h2> 
                    <h2> Till then, maybe use a desktop instead?</h2>
                    <h1>🥺👉👈</h1>
                </div>
            </div> 
        );
    }

    return null;
}

export default CheckUserDevice;