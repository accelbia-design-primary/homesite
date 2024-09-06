import React from "react";
import { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./footer/Footer"
import Navbar from "./navbar/Navbar";
import Background from "./bg/Background";


export const HomePage = () => {

    
    // Navbar opacity change on scroll
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
    return(
        <>
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
    )
}