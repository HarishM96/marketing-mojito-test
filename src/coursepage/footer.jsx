import React from 'react';
import Logo from '/Logo.webp';
import { ImFacebook2 } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
    return (
        <div className='footer-body'>
            <div className='join-us'>
                <h2>We'd love to have you join us!</h2>
                <div className='email-box'>
                    <input type="Email" placeholder='Email' className='email-input' />
                    <button> SUBSCRIBE </button>
                </div>
            </div>

            <div className='footer-logo'>
                <img src={Logo} alt="footer-logo" height="50px" width="150px" />
                <div className='socila-media'>
                    <h3> Follow Us </h3>
                    <div className='scl-mda-container'>
                        <div className='scl-mda'>
                            <ImFacebook2 />
                        </div>
                        <div className='scl-mda'>
                            <BsLinkedin />
                        </div>
                        <div className='scl-mda'>
                            <PiInstagramLogoFill />
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer-details-container'>
                <div>
                    <p className='details-head'> Ensueno For </p>
                    <p className='details-sub'> Students </p>
                    <p className='details-sub'> Institution </p>
                    <p className='details-sub'> Corporates </p>
                </div>
                <div>
                    <p className='details-head'> Build For </p>
                    <p className='details-sub'> Students </p>
                    <p className='details-sub'> Universities </p>
                    <p className='details-sub'> Corporates </p>
                </div>
                <div>
                    <p className='details-head'> Solution </p>
                    <p className='details-sub'> Training </p>
                    <p className='details-sub'> Skills </p>
                </div>
                <div>
                    <p className='details-head'> Company </p>
                    <p className='details-sub'> Pricing </p>
                    <p className='details-sub'> Learning </p>
                    <p className='details-sub' > About </p>
                    <p className='details-sub'> Careers </p>
                </div>
            </div>

            <div className='footer-details-container'>
                <div>
                    <p className='details-head'> Phone Us </p>
                    <p className='details-sub'> +91 95826 28000 </p>
                </div>
                <div>
                    <p className='details-head'> Email us </p>
                    <p className='details-sub'> Info@ensuenolearning.com </p>
                </div>
                <div>
                    <p className='details-head'> Registered Office </p>
                    <p className='details-sub'> 126, The Summit Business Park, Andheri <br/> Kurla Rd, Andheri East, Mumbai, Maharashtra 400093 </p>
                </div>
            </div>
            <div className='copyright'>
                <p> Copyright 2022 X EnsuenoLearning.com. All rights reserved. </p>
            </div>
        </div>
    )
}

export default Footer;