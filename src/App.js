import React, { useState, useEffect } from 'react';
import './App.scss';

import SplineEmbed from './Components/spline-embed/SplineEmbed';
import WhatIDo from './Components/what-i-do/What-I-Do';
import Stickyroll from "@stickyroll/react/stickyroll";
import JumpIntoJourney from './Components/jump-into-journey/Jump-Into-Journey';
import CaseStudy from './Components/case-study/CaseStudy';
import Typography from './Components/typography-comp/Typography';
import UIProjects from './Components/ui-projects/UIProjects';

function App() {
  const [progress, setProgress] = useState({
    Progress: '',
    Page: '',
    Index: ''
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="App">
      <p
        style={{
          position: 'fixed',
          top: '0', right: '0',
          fontSize: '1.5rem',
          color: '#fff',
          zIndex: '10'
        }}>
        {(progress.Progress + (progress.Page - 1))}
        {/* {progress.Progress} */}
      </p>
      {(progress.Progress + (progress.Page - 1)) < 1 &&
        <SplineEmbed />
      }
      <div className='scrollable-section'>

        <Stickyroll
          pages={5} factor={6}
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



