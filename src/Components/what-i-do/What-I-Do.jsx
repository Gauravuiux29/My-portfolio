import React, { useState } from 'react';

//styles
import './What-I-Do.scss';

// imgs
import WhatIDoText from '../../assets/what-i-do.png';
import CircleOne from '../../assets/Ellipse-8.png';
import CircleTwo from '../../assets/Ellipse-7.png';
import CircleThree from '../../assets/Ellipse-5.png';
import CentreCircle from '../../assets/centre-circle-frame.png';
import RobotArm from '../../assets/Robot-Arm.png';


export default function WhatIDo({ Progress }) {
  const sValue = (Progress.Progress + (Progress.Page - 1));

  const [catagId, setCatagId] = useState(0)

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
          <p className='ui-enhancement-text inner-text'
            style={{
              color: catagId === 1 && '#000'
            }}
          >UI-Enhancement</p>
          <p className='creative-problem-text inner-text'
            style={{
              color: catagId === 2 && '#000'
            }}
          >Creative <br />Problem Solving</p>
          <p className="growth-focused-text inner-text"
            style={{
              color: catagId === 3 && '#000'
            }}
          >Growth <br /> Focused Strategy</p>
          <p className="deadline-commitment-text inner-text"
            style={{
              color: catagId === 4 && '#000'
            }}
          >Deadline <br /> Commitment</p>

          <div className="ui-enhancement-main"
            onMouseOver={() => { setCatagId(1) }}
            onMouseOut={() => { setCatagId(0) }}
          />
          <div className="creative-problem-main"
            onMouseOver={() => { setCatagId(2) }}
            onMouseOut={() => { setCatagId(0) }}
          />
          <div className="deadline-commitment-main"
            onMouseOver={() => { setCatagId(4) }}
            onMouseOut={() => { setCatagId(0) }}
          />
          <div className="growth-focused-main"
            onMouseOver={() => { setCatagId(3) }}
            onMouseOut={() => { setCatagId(0) }}
          />




          <div className="middle-circle" />
          <div className="centre-circle-inner">
            <img src={CentreCircle} alt="" className="centre-circle-img" />

          </div>
          <img src={RobotArm} alt="" className="robot-arm-img" />


        </div>





        <div className="centre-circle-container centre-circle-container-copy">

          <div className="ui-enhancement-main ui-enhancement-copy"
            style={{
              borderLeft: catagId === 1 && '1px solid #B2FF00',
              borderRight: catagId === 1 && '1px solid #B2FF00'
            }}
          />
          <div className="creative-problem-main creative-problem-copy"
            style={{
              borderLeft: catagId === 2 && '1px solid #B2FF00',
              borderRight: catagId === 2 && '1px solid #B2FF00'
            }}
          />
          <div className="growth-focused-main growth-focused-copy"
            style={{
              borderLeft: catagId === 3 && '1px solid #B2FF00',
              borderRight: catagId === 3 && '1px solid #B2FF00'
            }}
          />
          <div className="deadline-commitment-main deadline-commitment-copy"
            style={{
              borderLeft: catagId === 4 && '1px solid #B2FF00',
              borderRight: catagId === 4 && '1px solid #B2FF00'
            }}
          />


        </div>
      </div>
    </div>
  )
}
