import React from 'react';

//styles
import './contact-us.scss';

//imgs
import lineVector from 'assets/line-vector.png';
import Robort from 'assets/robot-90s.png';
import WhatsApp from 'assets/whatsapp.png';
import Insta from 'assets/instagram.png';
import LinkedIn from 'assets/linkedin.png';
import Behance from 'assets/behance.png';


export default function ContactUs({ Progress }) {
    const sValue = (Progress.Progress + (Progress.Page - 5.5));

    return (
        <div className="contact-us-main-container"
            style={{
                opacity: sValue < 0 && '0'

            }}
        >
            <img src={lineVector} alt="" loading='lazy' className='line-vector'
                style={{
                    transform: sValue >= 0.5 && 'translateY(-40%)',
                    opacity: sValue >= 0.5 && '0.6',

                }}
            />

            <div className="robot-img-sec"
                style={{
                    transform: sValue >= 0.5 && 'translate(0vw, 0vw)',

                }}
            >
                <img src={Robort} alt="" className="robot-img" />

            </div>
            <div className="content-sec"
                style={{
                    transition: sValue >= 0.5 && `1.2s cubic-bezier(0, .02, 0, .99)`,
                    transform: sValue >= 0.5 && 'translateY(0vw)',
                    opacity: sValue >= 0.5 && '1',
                    transitionDelay: sValue >= 0.5 && '2.4s',


                }}
            >
                <p>I'll transform your UI <br />into an experience.</p>
            </div>

            <div className="btn-container">
                <button className='btn btn1'
                    style={{
                        transition: sValue >= 0.5 && '0.4s cubic-bezier(0, .02, 0, .99)',
                        transitionDelay: sValue >= 0.5 && '1.5s',
                        opacity: sValue >= 0.5 && '1',
                    }}
                >
                    <div className="inner">
                        Get in touch with me!
                    </div>
                </button>

                <button className='btn'
                    style={{
                        transition: sValue >= 0.5 && '0.4s cubic-bezier(0, .02, 0, .99)',
                        transitionDelay: sValue >= 0.5 && '1.8s',
                        transform: sValue >= 0.5 && 'scale(1)',
                    }}
                >
                    <a href="https://wa.me/8423569668?text=Hi! I’d like to discuss a design project. Please let me know how we can move forward" target="_blank" rel="noreferrer" >
                        <img src={WhatsApp} alt="" className="whatsapp-icon" />
                    </a>
                </button>
                <button className='btn'
                    style={{
                        transition: sValue >= 0.5 && '0.4s cubic-bezier(0, .02, 0, .99)',
                        transitionDelay: sValue >= 0.5 && '2.2s',
                        transform: sValue >= 0.5 && 'scale(1)',
                    }}
                >
                    <a href="https://www.linkedin.com/in/gauravsrivastava29" target="_blank" rel="noreferrer" >
                        <img src={LinkedIn} alt="" className="whatsapp-icon" />
                    </a>
                </button>
                <button className='btn'
                    style={{
                        transition: sValue >= 0.5 && '0.4s cubic-bezier(0, .02, 0, .99)',
                        transitionDelay: sValue >= 0.5 && '2.4s',
                        transform: sValue >= 0.5 && 'scale(1)',
                    }}
                >
                    <a href="https://www.instagram.com/grv.design_?igsh=ajM4bGcwZ3ljN3Zq" target="_blank" rel="noreferrer" >
                        <img src={Insta} alt="" className="whatsapp-icon" />
                    </a>
                </button>
                <button className='btn'
                    style={{
                        transition: sValue >= 0.5 && '0.4s cubic-bezier(0, .02, 0, .99)',
                        transitionDelay: sValue >= 0.5 && '2.6s',
                        transform: sValue >= 0.5 && 'scale(1)',
                    }}
                >
                    <a href="https://www.behance.net/gauravdesignss" target="_blank" rel="noreferrer" >
                        <img src={Behance} alt="" className="whatsapp-icon" />
                    </a>
                </button>

            </div>

        </div>
    )
}
