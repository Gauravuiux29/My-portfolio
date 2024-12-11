import React from 'react';

// styles
import './cs-three.scss';

//imgs
import frame1 from '../../../assets/Frame-1171276725.png';

export default function CSThree() {
    return (
        <div className="cs-three-main-container">

            {/* <a href="https://rentainance.pitchcatalyst.com/" target="_blank" rel='noreferrer' >  </a> */}

            <div className="frame-one" >
                <img src={frame1} alt="" className="frame1-img" loading='lazy' />
            </div>
        </div>
    )
}
