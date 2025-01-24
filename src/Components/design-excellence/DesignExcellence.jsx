import React, { useState, useEffect } from 'react';

//styles
import './design-excellence.scss';

//components
import CardTestimonial from './Card-Testimonial/CardTestimonial';

//data
import { CARD_DATA } from './Card-Testimonial/cardData';

//imgs
import bgVector from 'assets/wavy-background.png';
// import lineVector from 'assets/line-vector.png';
import coffeeIcon from 'assets/coffee-icon.png';


export default function DesignExcellence({ Progress }) {
    const sValue = (Progress.Progress + (Progress.Page - 5));
    const [cardID, setCardID] = useState(null)
    const [cardDelay, setCardDelay] = useState(false)
    const [isHover, setIsHover] = useState(false)

    // const cardArr = [...Array(6)]

    useEffect(() => {
        sValue < 0.5 && cardDelay && setCardDelay(false)
        // eslint-disable-next-line
    }, [sValue])
    return (
        <div className="design-excellence-main-container"
            style={{
                transform: sValue >= 0 && sValue < 1 ? 'translateY(0%)' :
                    sValue >= 1 && "translateY(-100%)",
                opacity: sValue < 0 && '0'

            }}
        >
            <div className="bright-circle"
                style={{
                    transform: sValue >= 0.5 && 'scale(1) translateY(-45vw)',
                    transitionDelay: sValue >= 0.5 && '0.8s'
                }}
            />

            <div className="main-heading"
                style={{
                    transform: sValue >= 0.5 && 'translateY(0)',
                    transitionDelay: sValue < 0.5 ? '0s' : '',

                }}
            >
                <p>Adventures In</p>
                <h3>Design Excellence</h3>
            </div>
            <div className="sub-heading"
                style={{
                    transform: sValue >= 0.5 && 'scale(0.8)',
                    transitionDelay: sValue < 0.5 ? '0s' : '',

                }}
            >
                <p>
                    <span>
                        Clients, Colleagues, And
                    </span>
                    <span className="img-span">
                        <img src={coffeeIcon} alt="" loading='lazy' />
                    </span>
                </p>
            </div>

            <img src={bgVector} alt="" loading='lazy' className='bg-vector' />

            <div className="testimonial-card-container">
                <div className="inner-card-container"

                    style={{
                        animation: sValue < 0.5 && 'none',
                        animationPlayState: isHover && 'paused',
                        WebkitAnimationPlayState: isHover && 'paused'

                    }}
                >

                    {
                        CARD_DATA.map((item, i) => {
                            return (
                                <div
                                    className="testimonial-card-main"
                                    key={i}
                                    onMouseOver={() => {
                                        setCardID(i)
                                        setCardDelay(true)
                                        setIsHover(true)
                                    }}
                                    onMouseOut={() => {
                                        setCardID(null)
                                        setIsHover(false)
                                    }}
                                    style={{
                                        transform: sValue > 0.5 && i % 2 === 0 && cardID !== i ? `rotate(15deg)` :
                                            sValue > 0.5 && i % 2 !== 0 && cardID !== i && `rotate(-15deg)`,

                                        transitionDelay: sValue < 0.5 && cardDelay ? '0s' :
                                            sValue > 0.5 && !cardDelay ? '1.2s' :
                                                cardDelay && '0s',

                                        marginLeft:
                                            sValue > 0.5 && i === 0 ? '-17.5%' :
                                                sValue > 0.5 && i === 1 ? '17.5%' :
                                                    sValue > 0.5 && i === 2 ? '-85%' :
                                                        sValue > 0.5 && i === 3 ? '-50%' :
                                                            sValue > 0.5 && i === 4 ? '50%' :
                                                                sValue > 0.5 && i === 5 ? '85%' :
                                                                    sValue > 0.5 && i === 6 ? '117%' :
                                                                        sValue > 0.5 && i === 7 ? '152%' :
                                                                            sValue > 0.5 && i === 8 ? '185%' :
                                                                                sValue > 0.5 && i === 9 ? '220%' :
                                                                                    "140%",

                                        // sValue > 0.5 && i === 5 ? '85%' : "140%",

                                        // backgroundColor: i % 2 === 0 ? `#fff` : `#333`,

                                        zIndex: i === cardID && '1'


                                    }}
                                ><CardTestimonial ITEM={item} /></div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}
