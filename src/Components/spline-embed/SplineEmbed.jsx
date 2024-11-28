import React, { Suspense, useCallback } from 'react';

// Styles
import './spline-embed.scss';

// Assets
import loaderGif from '../../assets/loading-gif.gif';

// Dynamic import for Spline to improve performance
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function SplineEmbed() {

  // Spline Viewer component

  const SplineViewer = useCallback(() => (
    <Suspense fallback={<div className="loader"><img src={loaderGif} alt="Loading-gif" className="loader-gif" loading="lazy" /></div>}>
      <Spline
        scene="https://prod.spline.design/bPWMLwf2fIc6iFGr/scene.splinecode" // Replace with your Spline scene URL
        className="custom-canvas-class"
      />
    </Suspense>
  ), []);

  return (
    <div className="spline-embed-main-container" >
      <SplineViewer />
    </div>
  );
}
