import React from 'react';

//styles
import './Jump-Into-Journey.scss';

//imgs
import MaskBGImg from '../../assets/mask-bg.png';
import MaskText from '../../assets/text-mask.png';
import CircleVector from '../../assets/Ellipse-15.png';
import TriangleVector from '../../assets/triangle-vector.png';
import Robot from '../../assets/robot.png';
import Stage from '../../assets/stage.png';


export default function JumpIntoJourney({ Progress }) {
    const sValue = (Progress.Progress + (Progress.Page - 1));

    return (
        <div className="jump-into-journey-main-container"
            style={{
                transform: sValue >= 0.8 && sValue < 2 ? `translateX(0)` :
                    sValue > 2 && `translateY(-100%)`
            }}
        >

            <div className="jump-into-journey-main-text"
                style={{
                    transform: sValue > 1 && `translateX(-${(sValue - 1) * 140}%)`,

                }}
            >
                <div className="fr-1">
                    <div className="top-fr">
                        <p className='jump-text'>J<span className="dot-span" /><span className='text-span'>UMP</span></p>
                        <p className='other-text'>into my journey with these</p>
                    </div>
                    <div className="bottom-fr"
                        style={{
                            WebkitMaskImage: `url(${MaskText})`,
                            maskImage: `url(${MaskText})`
                        }}
                    >
                        <img src={MaskBGImg} alt="" className="mask-bg" loading='lazy'/>
                    </div>
                </div>
                <div className="fr-2">
                    <div className="circle-div">
                        <img src={CircleVector} alt="" className="vector-img" loading='lazy'/>
                        <div className="inner-circle" />
                    </div>
                    <p>where</p>
                    {/* <p>{1 - (sValue - 1)}</p> */}
                </div>


            </div>

            <div className="design-section"
                style={{
                    transform: sValue > 1 && `translate(-${Math.min(70, (sValue - 1) * 100)}%, -${Math.min(15, (sValue - 1) * 22)}%)`,
                    // transform: sValue > 1 && `translate(-200%, -40%) scale(0.7)`,
                }}
            >

                <div className="design-text"
                    style={{
                        transform: sValue > 1 && `translateY(${Math.min(28, ((sValue - 1) * 40))}%) scale(${Math.max(0.7, (1 - (sValue - 1)))})`,
                    }}
                >
                    <p className="upper-text">meets a</p>
                    <p className="lower-text">DESIGN</p>
                </div>
                <div className="robot-container"
                    style={{
                        // transform: sValue > 1 && `rotate(-18deg) translate(-${Math.min(134, (sValue - 1) * 120)}%, -${Math.min(158, (sValue - 1) * 140)}%)`,

                    }}
                >
                    <img src={Robot} alt="" className="robot-img" loading='lazy'
                        style={{
                            transition: sValue > 2 && '1.2s',
                            transform: sValue > 2 && `rotate(0deg)`
                            // transform: `rotate(0deg)`

                        }}
                    />

                    <img src={Stage} alt="" className="stage-img" loading='lazy'
                        style={{
                            transition: sValue > 2 && '1.2s',
                            transform: sValue > 2 && `rotate(0deg)`
                        }}
                    />

                    <div className="triangle-mask-div">
                        <div className="text-div">
                            <p>DASH OF</p><br />
                            <p><b>DRAMA</b></p>

                        </div>
                        <div className="mask-img"
                            style={{
                                WebkitMaskImage: `url(${TriangleVector})`,
                                maskImage: `url(${TriangleVector})`,
                                transform: sValue > 1 && sValue < 2 ? 'translate(0%, 0%) rotate(2deg)' :
                                    sValue > 2 && 'rotate(-25deg) translate(-13%, -26.5%)'
                                // transform: 'rotate(-25deg) translate(-13%, -26.5%) '
                            }}
                        >

                            <img src={MaskBGImg} alt="" className="mask-bg" loading='lazy'
                                style={{
                                }}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
