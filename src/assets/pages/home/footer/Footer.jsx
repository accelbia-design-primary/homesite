import React from "react";
import './footer.css'
import { SocialIcon } from "react-social-icons";
import axios from "axios";

const Footer = () => {

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }


    async function subscribe() {
        const email = document.getElementById('email').value;
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        try {
            const response = await axios.post(
                'https://znmvv7ntri.execute-api.us-east-1.amazonaws.com/dev/subscriber-feed',
                { email },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.status === 200) {
                alert('You have been successfully subscribed.');
            } else {
                console.error('Error:', response.data);
                alert('Subscription failed. Please try again.');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again.');
        }
    }

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
                    <button type="button" onClick={subscribe}>Subscribe</button>
                </form>

                <div className="social">
                    <SocialIcon url="https://x.com/accelbia_design" target="_blank" bgColor="#fff" fgColor="#000" style={{
                        height: 30,
                        width: 30
                    }} />
                    <SocialIcon url="https://www.facebook.com/accelbia.design/" target="_blank" bgColor="#fff" fgColor="#000" style={{
                        height: 30,
                        width: 30
                    }} />
                    <SocialIcon url="https://instagram.com/accelbia.design" target="_blank" bgColor="#fff" fgColor="#000" style={{
                        height: 30,
                        width: 30
                    }} />
                    <SocialIcon url="https://www.linkedin.com/company/accelbia-design/" target="_blank" bgColor="#fff" fgColor="#000" style={{
                        height: 30,
                        width: 30
                    }} />
                    <SocialIcon url="https://www.youtube.com/@accelbia.design" bgColor="#fff" fgColor="#000" style={{
                        height: 30,
                        width: 30
                    }} />
                </div>

            </div>
            <div className="col">
                <h4>Legal</h4>
                <ul id="legal">
                    <li><a href="/" key={'t&c'}>Terms & Conditions</a></li>
                    <li><a href="/" key={'privacy'}>Privacy Policy</a></li>
                    <li><a href="/" key={'cookie'}>Cookie Policy</a></li>
                    <li><a href="/" key={'accessibility'}>Accessibility</a></li>
                    <li><a href="/" key={'disclaimer'}>Disclaimer</a></li>
                </ul>
            </div>

            <div className="col">
                <h4>Company</h4>
                <ul id="company">
                    <li><a href="/" key={'about'}>About</a></li>
                    <li><a href="/" key={'contact'}>Contact</a></li>
                    <li><a href="/" key={'explore'}>Explore</a></li>
                    <li><a href="/" key={'work_with_us'}>Work With Us</a></li>
                    <li><a href="https://blog.accelbia.design/" key={'blog'}>Blog</a></li>
                </ul>
            </div>

            <div className="col">
                <h4>Support</h4>
                <ul id="support">
                    <li><a href="/" key={'faq'}>FAQ</a></li>
                    <li><a href="/" key={'support'}>Support</a></li>
                    <li><a href="/" key={'services'}>Services</a></li>
                    <li><a href="/" key={'consultation'}>Consultation</a></li>
                    <li><a href="/" key={'feedback'}>Feedback</a></li>
                </ul>
            </div>
        </footer>);
}

export default Footer;