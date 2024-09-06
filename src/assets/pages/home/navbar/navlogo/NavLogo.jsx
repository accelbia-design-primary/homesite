import { useEffect, useState } from "react";
import './NavLogo.css';
const NavLogo = () => {
    const [isTop, setIsTop] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsTop(false);
            } else {
                setIsTop(true);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isTop]);

    return (
        <div className="logo">
        <a href="/" className="navbar-logo" style={
            {
                fontSize: isTop ? '8rem' : '1.5rem',
            }
        }>
            <span style={
                {
                    color: isTop ? '#3cb6ab' : '#fff',
                }
            }
            id="accelbia">accelbia</span>
            <span 
            className={isTop? 'logo-at-top' : 'logo-scrolled'}
            id="design">.design</span>
        </a>
        </div>
    );
}

export default NavLogo;