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
        return ( <div style = {
                {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 9999,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: "2rem",
                    textAlign: "center"
                }


            } >
            <div className = "overlay" >
            <p > Device not supported. Please check back later. </p> </div> </div>
        );
    }

    return null;
}

export default CheckUserDevice;