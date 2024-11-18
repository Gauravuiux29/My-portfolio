import React from 'react';

// styles
import './cs-four.scss';

//imgs
import frame1 from '../../../assets/Frame-844.png';

export default function CSFour() {
    return (
        <div className="cs-four-main-container">
            <div className="frame-one" >
                <img src={frame1} alt="" className="frame1-img" loading='lazy'/>
            </div>
        </div>
    )
}
