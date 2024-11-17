import React, { useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

// styles
import './spline-embed.scss';

export default function SplineEmbed() {
  const splineContainerRef = useRef(null);

  useEffect(() => {
    const canvas = splineContainerRef.current.querySelector('canvas');
    if (canvas) {
      canvas.classList.add('custom-canvas-class');
    }
  }, []);

  return (
    <div className='spline-embed-main-container' ref={splineContainerRef}>
    
      <Spline scene='https://prod.spline.design/bPWMLwf2fIc6iFGr/scene.splinecode' />

    </div>
  )
}


