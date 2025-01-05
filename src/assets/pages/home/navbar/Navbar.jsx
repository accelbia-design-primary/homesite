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

    const button_redirect = (e) => {
        const button = e.target.id;
        switch (button) {
            case 'about':
                window.location.href = '/about';
                break;
            case 'contact':
                window.location.href = '/contact';
                break;
            case 'explore':
                window.location.href = '/explore';
                break;
            case 'work_with_us':
                window.location.href = '/work_with_us';
                break;
            case 'blog':
                window.location.href = 'https://blog.accelbia.design';
                break;
            default:
                break;
        }
    }


    return (<>
        <nav className='navbar' style={
            {
                transition: 'all 0.5s ease',
                backgroundColor: scrollY > 10 ? 'rgba(0, 0, 0, 0.3)' : 'transparent',
                backdropFilter: scrollY > 10 ? 'blur(10px)' : 'none',
                borderBottom: scrollY > 10 ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
            }
        }>
            <NavLogo />
            <div className="navbar-right" style={
                {
                    flexDirection: scrollY < 10 ? 'column' : 'row',
                }
            }>
                <button type="button" id='about' onClick={button_redirect}>About</button>
                <button type="button" id="contact" onClick={button_redirect}>Contact</button>
                <button type="button" id="explore" onClick={button_redirect}>Explore</button>
                <button type="button" id="work_with_us" onClick={button_redirect}>Work With Us</button>
                <button type="button" id="blog" onClick={button_redirect}>Blog</button>
            </div>
        </nav>
    </>);
}

export default Navbar;