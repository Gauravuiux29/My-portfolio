import React, { useState,Suspense, useCallback, useRef, useEffect } from 'react';

// Styles
import './spline-embed.scss';

// Assets
import loaderGif from 'assets/loading-gif.gif';

// Dynamic import for Spline to improve performance
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function SplineEmbed({ Query }) {
  const containerRef = useRef(null);
  const [isWideScreen, setIsWideScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth < 800);
    };

    // Check the initial window width
    handleResize();

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const canvas = containerRef.current?.querySelector('canvas');

      if (canvas) {
        // console.log('Canvas detected!');

        // Access and log the aspect ratio of the canvas
        // const aspectRatio = canvas.style
        // Modify the canvas aspect ratio if needed
        // canvas.style.aspectRatio = '16 / 9'; // Example change

        // Disconnect the observer after finding the canvas
        observer.disconnect();
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current, { childList: true, subtree: true });
    }

    // Cleanup observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  // Spline Viewer component
  // console.log(isWideScreen)

  const SplineViewer = useCallback(() => (
    <Suspense fallback={<div className="loader"><img src={loaderGif} alt="Loading-gif" className="loader-gif" loading="lazy" /></div>}>

      {
        !isWideScreen ?
          <Spline
            scene="https://prod.spline.design/ET-4e4xcpbscKb2k/scene.splinecode"
            className="custom-canvas-class"
          /> :
          <Spline
            scene="https://prod.spline.design/bPWMLwf2fIc6iFGr/scene.splinecode"
            className="custom-canvas-class"
          />

      }
    </Suspense>
    // eslint-disable-next-line
  ), []);

  return (
    <div className="spline-embed-main-container" ref={containerRef}>
      <SplineViewer />
    </div>
  );
}
