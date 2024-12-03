import React, { useState, useEffect, useRef } from 'react';
import './App.scss';

import SplineEmbed from './Components/spline-embed/SplineEmbed';
import WhatIDo from './Components/what-i-do/What-I-Do';
import Stickyroll from "@stickyroll/react/stickyroll";
import JumpIntoJourney from './Components/jump-into-journey/Jump-Into-Journey';
import CaseStudy from './Components/case-study/CaseStudy';
import Typography from './Components/typography-comp/Typography';
import UIProjects from './Components/ui-projects/UIProjects';
import FullScreenBtn from './Components/FullScreen-Btn-Comp/fullscreen-btn';
import PhoneRotationComp from './Components/Phone-Rotation-Comp/phone-rotation-comp';

//images
import muteIcon from './assets/mute-icon.png';
import unMuteIcon from './assets/unmute-icon.png';
import bgAudio from './assets/bg-audio.mpeg'

function App() {
  const [isScreenSmall, setIsScreenSmall] = useState();

  let mediaQuery = window.matchMedia(`(max-width: 480px)`);
  const [query, setQuery] = useState(mediaQuery.matches);


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setQuery(mediaQuery.matches)

    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line
  }, [mediaQuery]);


  const [progress, setProgress] = useState({
    Progress: '',
    Page: '',
    Index: ''
  })
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null)



  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.warn("Play failed due to browser restrictions", error);
          });
        }
      }
      document.removeEventListener("click", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      const newMutedState = !isMuted;
      setIsMuted(newMutedState);
      audioRef.current.muted = newMutedState;

      if (!newMutedState) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.warn("Play failed due to browser restrictions", error);
          });
        }
      }
    }
  };

  const totalPages = 5; // Replace with the number of pages in your Stickyroll
  const calculatedProgress = (progress.Progress + progress.Page - 1) / totalPages;

  return (
    <div className="App" >

      <div className="full-screen-btn"
        style={{
          display: !isScreenSmall && 'none'
        }}
      >
        <FullScreenBtn
          IsScreenSmall={isScreenSmall}
          SetIsScreenSmall={setIsScreenSmall}
        />
      </div>

      <div className="phone-rotation-indication-div"
          // onClick={handleOnLoadPhoneRotateEven}
          style={{
            display: !query && "none"
          }}
        >
          <PhoneRotationComp />
        </div>

      <div className='audio-container'>
        <audio ref={audioRef} muted loop preload="auto" >
          <source src={bgAudio} type="audio/mpeg" />
        </audio>

        <div className='mute-btn'
          onClick={toggleMute}
          style={{
            backgroundImage: `url(${isMuted ? muteIcon : unMuteIcon})`
          }}
        />

      </div>

      <div className='hr-scroll-bar'
        style={{
          display: calculatedProgress < 0 && 'none',
        }}
      >
        <p className='bar-calc'>{Number(calculatedProgress * 100).toFixed(0)}%</p>
        <div className='bar'
          style={{
            transform: `scaleX(${calculatedProgress})`
          }}
        />
      </div>

      {/* <p
        style={{
          position: 'fixed',
          top: '0', right: '8%',
          fontSize: '1.5rem',
          color: '#fff',
          zIndex: '10'
        }}>
        {(progress.Progress + (progress.Page - 1))} <br />
      </p> */}

      {
        (progress.Progress + (progress.Page - 1)) < 1 && <SplineEmbed />
      }

      <div className='scrollable-section'>
        <Stickyroll
          pages={5} factor={4}
          onProgress={(progress, page, index) => {
            setProgress({
              Progress: progress,
              Page: page,
              Index: index
            })
          }}
        >
          <WhatIDo Progress={progress} />
          <JumpIntoJourney Progress={progress} />
          <CaseStudy Progress={progress} />
          <Typography Progress={progress} />
          <UIProjects Progress={progress} />
        </Stickyroll>
      </div>

    </div>
  );
}

export default App;



