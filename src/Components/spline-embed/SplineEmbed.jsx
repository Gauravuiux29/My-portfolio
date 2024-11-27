import React, { useState, useEffect, Suspense, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

// Styles
import './spline-embed.scss';

// Assets
import loaderGif from '../../assets/loading-gif.gif';

// Dynamic import for Spline to improve performance
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function SplineEmbed() {
  const [isLoading, setIsLoading] = useState(true);

  // Intersection observer setup
  const { ref, inView } = useInView({
    triggerOnce: false, // Always re-trigger when coming into view
    threshold: 0.1,
  });

  // Stop loader after 2 seconds when inView
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setIsLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  // Spline Viewer component
  const SplineViewer = useCallback(() => (
    <Suspense fallback={<div className="loader">Loading...</div>}>
      <Spline
        scene="https://prod.spline.design/bPWMLwf2fIc6iFGr/scene.splinecode" // Replace with your Spline scene URL
        className="custom-canvas-class"
      />
    </Suspense>
  ), []);

  return (
    <div className="spline-embed-main-container" ref={ref}>
      {inView && (
        <>
          {isLoading ? (
            <div className="loader">
              <img src={loaderGif} alt="Loading..." className="loader-gif" loading="lazy" />
            </div>
          ) : (
            <SplineViewer />
          )}
        </>
      )}
    </div>
  );
}
