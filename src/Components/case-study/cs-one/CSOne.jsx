import React from 'react';

// styles
import './cs-one.scss';

//imgs
import frame1 from '../../../assets/Frame-1171276723.png';
import frame2 from '../../../assets/Component-85.png';

export default function CSOne({Progres}) {

    return (
        <div className="cs-one-main-container">
            <div className="frame-one" >
                <img src={frame1} alt="" className="frame1-img" loading='lazy'/>
            </div>
            <div className="frame-two" >
                <img src={frame2} alt="" className="frame2-img" loading='lazy'/>
            </div>
        </div>
    )
}
