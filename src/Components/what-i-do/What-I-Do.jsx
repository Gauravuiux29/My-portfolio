import React, { useState, useEffect } from 'react';

//styles
import './What-I-Do.scss';

// imgs
// import WhatIDoText from '../../assets/what-i-do.png';
import WhatIDoText from 'assets/what-i-do.png';

import CircleOne from 'assets/Ellipse-8.png';
import CircleTwo from 'assets/Ellipse-7.png';
import CircleThree from 'assets/Ellipse-5.png';
import CentreCircle from 'assets/centre-circle-frame.png';
import RobotArm from 'assets/Robot-Arm.png';


export default function WhatIDo({ Progress }) {
  const sValue = (Progress.Progress + (Progress.Page - 1));

  const [catagId, setCatagId] = useState(0)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="wid-main-container"
      style={{
        transform:
          // sValue >= 0 && sValue < 0.8 ? `translate(0%, ${Math.max(0, (35 - sValue * 100))}%)` :
          sValue >= 0 && sValue < 0.8 ? `translate(0%, 0%)` :

            sValue >= 0.8 && 'translateX(-100%)',
        transition: sValue >= 0.4 && '0.8s ease-in-out'
      }}
    >
      <img src={WhatIDoText} alt="" className="whatido-text-img"

        style={{
          opacity: sValue > 0 && '1',
          transform: sValue > 0.4 && `translate(0vw, 0vh) scale(0.8)`,
        }}
      />

      <div className="wheel-container"
        style={{
          transform: `translateY(${Math.max(0, 100 - (sValue * 155))}vw)`

        }}
      >
        <img src={CircleOne} alt="" className="circle-one" loading='lazy' />
        <img src={CircleTwo} alt="" className="circle-two" loading='lazy' />
        <img src={CircleThree} alt="" className="circle-three" loading='lazy' />

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
            style={{
              background: catagId === 1 && 'linear-gradient(0deg, #DD90FF 0%, #DD90FF 100%)'
            }}
          />
          <div className="creative-problem-main"
            style={{
              background: catagId === 2 && 'linear-gradient(0deg, #DD90FF 0%, #DD90FF 100%)'
            }}
          />
          <div className="deadline-commitment-main"
            style={{
              background: catagId === 4 && 'linear-gradient(0deg, #DD90FF 0%, #DD90FF 100%)'
            }}
          />
          <div className="growth-focused-main"
            style={{
              background: catagId === 3 && 'linear-gradient(0deg, #DD90FF 0%, #DD90FF 100%)'
            }}
          />

          {/* ----------------------COPY------------------------ */}

          <div className="ui-enhancement-copy"
            onMouseOver={() => { setCatagId(1) }}
            onMouseOut={() => { setCatagId(0) }}
          />
          <div className="creative-problem-copy"
            onMouseOver={() => { setCatagId(2) }}
            onMouseOut={() => { setCatagId(0) }}
          />
          <div className="deadline-commitment-copy"
            onMouseOver={() => { setCatagId(4) }}
            onMouseOut={() => { setCatagId(0) }}
          />
          <div className="growth-focused-copy "
            onMouseOver={() => { setCatagId(3) }}
            onMouseOut={() => { setCatagId(0) }}
          />

          {/* __________________________________________________ */}


          <div className="middle-circle" />
          <div className="centre-circle-inner">
            <img src={CentreCircle} alt="" className="centre-circle-img" loading='lazy' />

          </div>
          <img src={RobotArm} alt="" className="robot-arm-img" loading='lazy'
            style={{
              transform: catagId === 1 ? `rotate(-55deg)` :
                catagId === 2 ? `rotate(-15deg)` :
                  catagId === 3 ? `rotate(20deg)` :
                    catagId === 4 ? `rotate(60deg)` : ''
            }}
          />


        </div>


        {/* -------------------------------------------- */}

        <div className="centre-circle-container centre-circle-container-copy">

          <div className="ui-enhancement-main ui-enhancement-copy"
            style={{
              borderLeft: catagId === 1 && '1px solid #DD90FF',
              borderRight: catagId === 1 && '1px solid #DD90FF',
              opacity: sValue > 0.65 && 1
            }}
          />
          <div className="creative-problem-main creative-problem-copy"
            style={{
              borderLeft: catagId === 2 && '1px solid #DD90FF',
              borderRight: catagId === 2 && '1px solid #DD90FF',
              opacity: sValue > 0.65 && 1

            }}
          />
          <div className="growth-focused-main growth-focused-copy"
            style={{
              borderLeft: catagId === 3 && '1px solid #DD90FF',
              borderRight: catagId === 3 && '1px solid #DD90FF',
              opacity: sValue > 0.65 && 1

            }}
          />
          <div className="deadline-commitment-main deadline-commitment-copy"
            style={{
              borderLeft: catagId === 4 && '1px solid #DD90FF',
              borderRight: catagId === 4 && '1px solid #DD90FF',
              opacity: sValue > 0.65 && 1

            }}
          />


        </div>
      </div>
    </div>
  )
}
