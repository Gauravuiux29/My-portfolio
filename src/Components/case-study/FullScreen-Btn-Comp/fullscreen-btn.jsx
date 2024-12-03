import React, { useState, useEffect } from 'react';


//Styles
import './fullscreen-btn.scss';

export default function FullScreenBtn({
    IsScreenSmall,
    SetIsScreenSmall,
}) {

    const [isFullScreen, setIsFullScreen] = useState(false);


    const handleFullScreen = () => {
        const elem = document.documentElement;
        if (!document.fullscreenElement) {

            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                // Firefox
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                // Chrome, Safari, and Opera
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                // IE/Edge
                elem.msRequestFullscreen();
            }
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }

    };



    // Event listener to detect full-screen changes
    useEffect(() => {
        const handleFullScreenChange = () => {
            setIsFullScreen(!!document.fullscreenElement); // Update state based on fullscreen status
        };

        // Add event listeners for full-screen change
        document.addEventListener('fullscreenchange', handleFullScreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullScreenChange); // Chrome, Safari, Opera
        document.addEventListener('mozfullscreenchange', handleFullScreenChange); // Firefox
        document.addEventListener('MSFullscreenChange', handleFullScreenChange); // IE/Edge

        // Clean up event listeners on unmount
        return () => {
            document.removeEventListener('fullscreenchange', handleFullScreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
            document.removeEventListener('MSFullscreenChange', handleFullScreenChange);
        };
        // eslint-disable-next-line
    }, []);



    const handleResize = () => {
        SetIsScreenSmall(window.innerWidth < 920);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div
            className="fullscreen-btn-main-container"

        >
            <button className="fullscreen-btn"
                onClick={handleFullScreen}

            >
                {isFullScreen ? 'Exit Fullscreen' : 'Go Fullscreen'}

            </button>
        </div>
    )
}
