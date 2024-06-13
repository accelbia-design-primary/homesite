import { useEffect, useState } from "react";
import "./App.css";
// User device check
import CheckUserDevice from './assets/checkuserdevice/checkUserDevice';
import AnimatedCursor from "react-animated-cursor";
import Footer from "./assets/footer/Footer";
import Background from "./assets/bg/Background";
import Navbar from "./assets/navbar/Navbar";

const App = () => {
    const [isOpaque, setOpaque] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setOpaque(true);
            } else {
                setOpaque(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpaque]);

    return (
      <>
        <CheckUserDevice />
        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color='255, 255, 255'
          outerColor='255, 255, 255'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          showSystemCursor={false}
          style={{ zIndex: 1000 }}
        />
        <Background color='#003232'/>
        <Navbar/>
        <Footer/>
      </>
    );
}

export default App;