import React from 'react';

// styles
import './cs-two.scss';

//imgs
import frame1 from '../../../assets/Frame-841.png';

export default function CSTwo() {
    return (
        <div className="cs-two-main-container">
            <a href="https://pitchcatalyst.com/" target="_blank" rel='noreferrer' >

                <div className="frame-one" >
                    <img src={frame1} alt="" className="frame1-img" loading='lazy' />
                </div>
            </a>
        </div>
    )
}
