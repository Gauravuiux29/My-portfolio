import React, { useState } from 'react';

//styles
import './live-project.scss';


// components
import CSOne from '../cs-one/CSOne';
import CSTwo from '../cs-two/CSTwo';
import CSThree from '../cs-three/CSThree';
import CSFour from '../cs-four/CSFour';

//images
import pj1Bg from '../../../assets/steve-johnson-5Oe8KFH5998-unsplash.png';
import pj2Bg from '../../../assets/sardar-faizan-H4D7JmRMsNk-unsplash.png';
import pj3Bg from '../../../assets/john-adams-1xIN4FMR78A-unsplash.png';
import pj4Bg from '../../../assets/Group-1000011072.png';



export default function LiveProject({ Progress }) {

    const [cardID, setCardID] = useState(0);

    const sValue = (Progress.Progress + (Progress.Page - 1));

    return (
        <div className="live-project-main-container"
            style={{
                transform: sValue > 3 && `rotateX(-85deg)`
            }}
        >

            <div className="bg-rect"
                style={{
                    backgroundColor:
                        cardID === 1 ? '#ffdbdb' :
                            cardID === 2 ? '#e4ff16' :
                                cardID === 3 ? '#002c5c' :
                                    cardID === 4 && '#ff4f4f'
                }}
            />

            <img src={pj1Bg} alt="" className="bg-one" loading='lazy'
                style={{
                    opacity: cardID === 1 && '0.5'
                }}
            />
            <img src={pj2Bg} alt="" className="bg-two" loading='lazy'
                style={{
                    opacity: cardID === 2 && '0.3'
                }}
            />
            <img src={pj3Bg} alt="" className="bg-three" loading='lazy'
                style={{
                    opacity: cardID === 3 && '0.5'
                }}
            />
            <img src={pj4Bg} alt="" className="bg-four" loading='lazy'
                style={{
                    opacity: cardID === 4 && '1'
                }}
            />

            <p className="live-project-text"
                style={{
                    border: cardID === 3 && '0.12vw solid #ffffffcd'
                }}
            >
                <span className='vector-span' />
                <span className="text-span"
                    style={{
                        color: cardID === 3 && '#ffffffcd',
                        fontWeight: cardID === 3 && '400'
                    }}
                >Live Projects</span>
            </p>


            <div
                className="project-one"
                onMouseOver={() => { setCardID(1) }}
                onMouseOut={() => { setCardID(0) }}
            ><CSOne /></div>
            <div
                className="project-two"
                onMouseOver={() => { setCardID(2) }}
                onMouseOut={() => { setCardID(0) }}
            ><CSTwo /></div>
            <div
                className="project-three"
                onMouseOver={() => { setCardID(3) }}
                onMouseOut={() => { setCardID(0) }}
            ><CSThree /></div>
            <div
                className="project-four"
                onMouseOver={() => { setCardID(4) }}
                onMouseOut={() => { setCardID(0) }}
            ><CSFour /></div>

        </div>
    )
}
