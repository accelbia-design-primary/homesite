import { useEffect, useState } from "react";
import "./App.css";
// User device check
import CheckUserDevice from './assets/pages/incompatible-device/incompatible-device';
import HomePage from "./assets/pages/home/home";

const App = () => {

    // Check if user is on a mobile device or desktop
    const [UserDevice, setUserDevice] = useState(null);
    useEffect(() => {
        const userAgent = navigator.userAgent;
        const isNotDesktop = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        setUserDevice(isNotDesktop ? "Mobile" : "Desktop");
    }, [UserDevice]);


    if (UserDevice !== "Desktop") {
      return (
        <CheckUserDevice />
      )
    }

    return (
        <HomePage/>
    );
}

export default App;