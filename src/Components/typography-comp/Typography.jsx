import React, { useState, useEffect, useMemo } from 'react';

//styles
import './typography.scss';

//images
import CircleBlur from '../../assets/mask-circle.png';
import BgGroup from '../../assets/bg-group.png';
import MouseCursor from '../../assets/mouse-cursor.png';


export default function Typography({ Progress }) {
    const sValue = (Progress.Progress + (Progress.Page - 4));
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const [highLighter, setHighLighter] = useState(false);
    const [track, setTrack] = useState(false)


    useEffect(() => {
        const handleWindowMouseMove = event => {
            setCoords({
                x: event.clientX,
                y: event.clientY,
            });
        };
        window.addEventListener('mousemove', handleWindowMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleWindowMouseMove,
            );
        };
        // eslint-disable-next-line
    }, []);



    const txt = `I have crafted interactive pitch decks for various startups, but due to privacy concerns, I can't showcase my recent projects. Here are some short projects just to showcase my UI skills.`;

    // Create the typewriter function using useMemo
    const typeWriter = useMemo(() => {
        let i = 0; // Counter for the current character

        const actualText = () => {
            const element = document.querySelector('.text-c'); // Get the target element
            if (element && i < txt.length) {
                element.innerHTML += txt.charAt(i); // Append the current character
                i++;
                setTimeout(actualText, 40); // Call the function again after 80ms
            } else {
                setHighLighter(true)

                setTimeout(() => {
                    setTrack(true)
                }, 1400);

            }
        };

        return actualText;
        // eslint-disable-next-line
    }, [txt]);

    useEffect(() => {
        sValue >= 0 && typeWriter();
        // eslint-disable-next-line
    }, [typeWriter, sValue >= 0]);

    return (
        <div className="typography-main-container"
            style={{
                transform: sValue >= 0 && sValue < 1 ? 'translateY(0%)' : 
                sValue >= 1 && "translateY(-100%)"

            }}
        >
            <div className="mask-section"
                style={{
                    maskImage: `url(${CircleBlur})`,
                    WebkitMaskImage: `url(${CircleBlur})`,
                    WebkitMaskPosition: `${coords.x - 230}px ${(coords.y - 220)}px`,
                }}
            >
                <img src={CircleBlur} alt="" className="circle-ball-img"
                    style={{
                        left: `${coords.x - 220}px`,
                        top: `${(coords.y - 220)}px`,

                    }}
                />
                <div className="bg-color"
                    style={{
                        backgroundImage: `url(${BgGroup})`
                    }}
                />
            </div>

            <div className="text-contents"
                style={{
                    overflow: track && 'hidden'
                }}
            >
                <span className="bg-span" />
                <p className='text-c'></p>
                <p className='text-c2'
                    style={{
                        visibility: !highLighter && 'hidden'
                    }}
                >
                    <span className="hidden-span">i have crafted Interactive pitch decks for various</span> <span className="tc-span" style={{ opacity: highLighter && '1', transitionDelay: highLighter && '1.2s' }}>startups</span>, <span className="hidden-span"> but due to privacy concerns, I cant showcase my recent projects, here are some short project just to showcase</span> <span className="tc-span" style={{ opacity: highLighter && '1', transitionDelay: highLighter && '1.2s' }}>my UI skills.


                    </span>

                </p>

                <img
                    className="mouse-cursor-img"
                    style={{
                        opacity: highLighter && '1',
                        transform: !highLighter && 'translate(15vw, 15vw)',
                        transition: !track && '0.8s ease-in-out',
                        left: track && `${coords.x - 10}px`,
                        top: track && `${(coords.y - 240)}px`,
                    }}
                    src={MouseCursor}
                    alt=""
                />

            </div>

        </div>
    )
}
