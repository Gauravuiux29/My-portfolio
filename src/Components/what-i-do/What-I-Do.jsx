import React from 'react';

//styles
import './What-I-Do.scss';

// imgs
import WhatIDoText from '../../assets/what-i-do.png';
import CircleOne from '../../assets/Ellipse-8.png';
import CircleTwo from '../../assets/Ellipse-7.png';
import CircleThree from '../../assets/Ellipse-5.png';
import CentreCircle from '../../assets/centre-circle-frame.png';


export default function WhatIDo({ Progress }) {
  const sValue = (Progress.Progress + (Progress.Page - 1));

  return (
    <div className="wid-main-container"
      style={{
        position: sValue > 0 && sValue < 2 ? 'fixed' :
          sValue >= 2 && 'absolute',
        top: sValue > 0 && '0',
        left: sValue > 0 && '0',
        transform: sValue >= 0.5 && 'translateX(-100%)'
      }}
    >
      <img src={WhatIDoText} alt="" className="whatido-text-img"

        style={{
          transform: sValue <= 0.1 ? `translate(45vw,45vh) scale(1)` :
            sValue > 0.1 && `translate(0vw,0vh) scale(0.8)`

        }}
      />

      <div className="wheel-container"
        style={{
          transform: sValue > 0.1 && `translate(0vw,0vh)`

        }}
      >
        <img src={CircleOne} alt="" className="circle-one" />
        <img src={CircleTwo} alt="" className="circle-two" />
        <img src={CircleThree} alt="" className="circle-three" />

        <div className="centre-circle-container">
          <div className="middle-circle"/>
          <div className="centre-circle-inner">
            <img src={CentreCircle} alt="" className="centre-circle-img" />

          </div>
        </div>
      </div>
    </div>
  )
}
