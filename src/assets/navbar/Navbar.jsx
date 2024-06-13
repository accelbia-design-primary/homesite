import './Navbar.css';
import { useState, useEffect } from 'react';
import NavLogo from './navlogo/NavLogo';

const Navbar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight);
        }

        const handleScroll = () => {
            setScrollY(window.scrollY);
        }

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        }
    }
    , [screenWidth, screenHeight, scrollY]);

    return (<>
        <nav className='navbar' style={
            {
                transition: 'all 0.5s ease',
                backgroundColor: scrollY > 10 ? 'rgba(0, 0, 0, 0.3)' : 'transparent',
                backdropFilter: scrollY > 10 ? 'blur(10px)' : 'none',
                borderBottom: scrollY > 10 ? 'none': '1px solid rgba(255, 255, 255, 0.2)',
            }
        }>
            <NavLogo/>
            <div className="navbar-right" style={
                {
                    flexDirection: scrollY < 10 ? 'column' : 'row',
                }
            }>
                <button type="button" id='about'>About</button>
                <button type="button" id="contact">Contact</button>
                <button type="button" id="explore">Explore</button>
                <button type="button" id="work_with_us">Work With Us</button>
                <button type="button" id="blog">Blog</button>
            </div>
        </nav>
    </>);
}

export default Navbar;