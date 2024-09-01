import React from "react";
import './footer.css'
import { SocialIcon } from "react-social-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="col">
                <p style={
                    {
                        color: "rgba(255, 255, 255, 0.5)",
                        fontWeight: "300"
                    }
                
                }>© 2024 accelbia.design</p>

                <form action="" className="subscribe">
                    <h4 style={
                        {
                            color: "rgba(255, 255, 255, 0.5)",
                            fontWeight: "300"
                        }
                    }> Wanna stay posted?</h4>

                    <input type="email" name="email" id="email" placeholder="Email Address" />
                    <button type="button">Subscribe</button>
                </form>

                <div className="social">
                    <SocialIcon url="https://x.com/accelbia_design" target="_blank" bgColor="#fff" fgColor="#000" style={{
                        height: 30,
                        width: 30
                    }}/>
                    <SocialIcon url="https://www.facebook.com/accelbia.design/" target="_blank" bgColor="#fff" fgColor="#000" style={{
                        height: 30,
                        width: 30
                    }}/>
                    <SocialIcon url="https://instagram.com/accelbia.design" target="_blank" bgColor="#fff" fgColor="#000" style={{
                        height: 30,
                        width: 30
                    }}/>
                    <SocialIcon url="https://www.linkedin.com/company/accelbia-design/" target="_blank" bgColor="#fff" fgColor="#000" style={{
                        height: 30,
                        width: 30
                    }}/>
                    <SocialIcon url="https://www.youtube.com/@accelbia.design" bgColor="#fff" fgColor="#000" style={{
                        height: 30,
                        width: 30
                    }}/>
                </div>

            </div>
            <div className="col">
                <h4>Legal</h4>
                <ul id="legal">
                    <li><a href="/">Terms & Conditions</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="/">Cookie Policy</a></li>
                    <li><a href="/">Accessibility</a></li>
                    <li><a href="/">Disclaimer</a></li>
                </ul>
            </div>

            <div className="col">
                <h4>Company</h4>
                <ul id="company">
                    <li><a href="/">About us</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Explore</a></li>
                    <li><a href="/">Work with us</a></li>
                    <li><a href="/">Blog</a></li>
                </ul>
            </div>

            <div className="col">
                <h4>Support</h4>
                <ul id="support">
                    <li><a href="/">FAQ</a></li>
                    <li><a href="/">Help</a></li>
                    <li><a href="/">Support</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Consultation</a></li>
                </ul>
            </div>
        </footer>);
}

export default Footer;