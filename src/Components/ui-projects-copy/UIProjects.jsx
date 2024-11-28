// import React, { useState, useEffect, useMemo, useRef } from 'react';

// //styles
// import './ui-projects.scss';

// //imgs
// import MaskFrame from '../../assets/mask-frame.png';
// import MaskBG from '../../assets/mask-frame2.png';
// import MaskBG1 from '../../assets/personal-profile-fr.png';
// import MaskBG2 from '../../assets/personal-project-fr.png';
// import MaskBG3 from '../../assets/movie-deck-fr.png';
// import homeScreenBg from '../../assets/Home-screen-bg.png';

// // videos
// import personalProfile from '../../assets/personal-profile-video.mp4';
// import movieDeck from '../../assets/movie-deck-video.mp4';
// import personalProject from '../../assets/personal-project-video.mp4';
// import logoVideo from '../../assets/logo-video.mp4';


// export default function UIProjects({ Progress }) {
//     const sValue = (Progress.Progress + (Progress.Page - 5));
//     const [frameID, setFrameID] = useState(0)
//     const [itemID, setItemID] = useState(0)
//     const videoRef = useRef(null);
//     const videoRef2 = useRef(null);



//     useMemo(() => {
//         if (sValue >= 0.2 && sValue < 0.4) {
//             setItemID(0)
//         }
//         else if (sValue >= 0.4 && sValue < 0.6) {
//             setItemID(1)
//         }
//         else if (sValue >= 0.6 && sValue < 0.8) {
//             setItemID(2)
//         }
//         else if (sValue >= 0.8 && sValue < 1) {
//             setItemID(3)
//         }

//     }, [sValue])

//     useEffect(() => {
//         const videoElement = videoRef.current;
//         const videoElement2 = videoRef2.current;

//         if (videoElement && videoElement2) {
//             // Update video source dynamically
//             const videoSource =
//                 itemID === 0
//                     ? logoVideo
//                     : itemID === 1
//                         ? personalProfile
//                         : itemID === 2
//                             ? movieDeck
//                             : itemID === 3
//                                 ? personalProject
//                                 : "";

//             // Check if source needs updating
//             if (videoElement.src !== videoSource) {
//                 videoElement.src = videoSource;
//                 videoElement2.src = videoSource;

//                 // Load the new video source
//                 videoElement.load();
//                 videoElement2.load();

//                 // Add event listeners to ensure the video is ready before playing
//                 const handleCanPlay = () => {
//                     videoElement.play();
//                     videoElement2.play();
//                 };

//                 videoElement.addEventListener('canplay', handleCanPlay);
//                 videoElement2.addEventListener('canplay', handleCanPlay);

//                 // Cleanup event listeners on unmount
//                 return () => {
//                     videoElement.removeEventListener('canplay', handleCanPlay);
//                     videoElement2.removeEventListener('canplay', handleCanPlay);
//                 };
//             }
//         }
//     }, [itemID]);

//     useEffect(() => {

//         frameID === 0 ? setTimeout(() => {
//             setFrameID(1)
//         }, 400) :
//             frameID === 1 ? setTimeout(() => {
//                 setFrameID(2)
//             }, 400) :
//                 frameID === 2 ? setTimeout(() => {
//                     setFrameID(3)
//                 }, 400) :
//                     frameID === 3 && setTimeout(() => {
//                         setFrameID(0)
//                     }, 400)

//     }, [frameID])


//     return (
//         <div className="ui-projects-main-container"
//             style={{
//                 transform: sValue >= 0 && sValue < 1 ? 'translateY(0%)' :
//                     sValue >= 1 && "translateY(-100%)"

//             }}
//         >

//             <div className="bg-img"
//                 style={{
//                     backgroundImage: `url(${homeScreenBg})`
//                 }}
//             />

//             <div className="mask-section"
//                 style={{
//                     filter: sValue >= 0.2 && sValue < 0.9 && 'none'

//                 }}
//             >

//                 <div className="mask-container"
//                     style={{
//                         maskImage: `url(${MaskFrame})`,
//                         WebkitMaskImage: `url(${MaskFrame})`,
//                         maskSize: sValue >= 0.2 && sValue < 0.9 && '800vw',
//                         transform: sValue >= 0.2 && sValue < 0.9 && 'scale(1)'
//                     }}
//                 >
//                     <div className="slider-img">
//                         <div className="slide"
//                             style={{
//                                 transform: sValue < 0.2 ? `translate(-${frameID * 100}%)` :
//                                     sValue >= 0.2 && sValue < 0.9 ? `translate(0%)` :
//                                         sValue >= 0.9 ? `translate(-200%)` : `translate(-${frameID * 100}%)`,

//                                 opacity: sValue >= 0.2 && sValue < 0.9 && '0'
//                             }}
//                         >
//                             <img src={MaskBG} alt="" className="bg-mask-img" />
//                             <img src={MaskBG1} alt="" className="bg-mask-img" />
//                             <img src={MaskBG2} alt="" className="bg-mask-img" />
//                             <img src={MaskBG3} alt="" className="bg-mask-img" />
//                         </div>
//                     </div>
                    
//                     <video className='video-mask'
//                         ref={videoRef}
//                         muted
//                         loop
//                         preload="auto"
//                         autoPlay
//                         style={{
//                             opacity: sValue >= 0.2 && sValue < 0.9 ? '1' : '0'
//                         }}
//                     >
//                         <source type="video/mp4" />

//                     </video>
//                 </div>

//                 <p className="bottom-txt"
//                     style={{
//                         opacity: sValue >= 0.2 && sValue < 0.9 && '0'

//                     }}
//                 >PROJECTS</p>

//             </div>

//             <div className="heading"
//                 style={{
//                     opacity: sValue >= 0.2 && sValue < 0.9 && 1
//                 }}
//             >
//                 <p>3D Logo</p>
//                 <span>Design</span>
//             </div>

//             <div className="dark-layer" 
//             style={{
//                 opacity: sValue >= 0.2 && sValue < 0.4 ? '0' :
//                 sValue >= 0.4 && sValue < 0.6 ? '0.8' :
//                     sValue >= 0.6 && sValue < 0.8 ? '0.4' :
//                         sValue >= 0.8 && '0.8'

//             }}
//             />

//             <div className="right-nav"
//                 style={{
//                     transform: sValue >= 0.2 && sValue < 0.9 && 'translate(0)'
//                 }}
//             >
//                 <div className="blur-layer" />
//                 <div className="item-one">
//                     <img src={MaskBG} alt="" className="item-img"
//                         style={{
//                             opacity: itemID === 0 && '1',
//                             transform: itemID === 0 && 'scale(1.05)',
//                             filter: itemID === 0 && 'grayscale(0)'
//                         }}
//                     />
//                 </div>
//                 <div className="item-two">
//                     <img src={MaskBG1} alt="" className="item-img"
//                         style={{
//                             opacity: itemID === 1 && '1',
//                             transform: itemID === 1 && 'scale(1.05)',
//                             filter: itemID === 1 && 'grayscale(0)'
//                         }}
//                     />

//                 </div>
//                 <div className="item-three">
//                     <img src={MaskBG3} alt="" className="item-img"
//                         style={{
//                             opacity: itemID === 2 && '1',
//                             transform: itemID === 2 && 'scale(1.05)',
//                             filter: itemID === 2 && 'grayscale(0)'
//                         }}
//                     />

//                 </div>
//                 <div className="item-four">
//                     <img src={MaskBG2} alt="" className="item-img"
//                         style={{
//                             opacity: itemID === 3 && '1',
//                             transform: itemID === 3 && 'scale(1.05)',
//                             filter: itemID === 3 && 'grayscale(0)'
//                         }}
//                     />

//                 </div>

//             </div>

//             <div className="footer-section"
//                 style={{
//                     transform: sValue >= 0.2 && sValue < 0.9 && 'translate(0)'
//                 }}
//             >
//                 <p>3d Home Page{itemID}</p>
//                 <span>i have crafted Interactive pitch decks for various startups, but due to privacy concerns, I cant showcase my recent projects, here are some short project just to showcase my UI skills.</span>
//             </div>

//             <div className="bg-video"
//                 style={{
//                     opacity: sValue >= 0.2 && sValue < 0.9 && '1',
//                     mixBlendMode: sValue >= 0.2 && sValue < 0.4 ? 'overlay' :
//                         sValue >= 0.4 && sValue < 0.6 ? 'color-dodge' :
//                             sValue >= 0.6 && sValue < 0.8 ? 'hard-light' :
//                                 sValue >= 0.8 && 'normal'

//                 }}
//             >
//                 <video
//                     className='video-file'
//                     ref={videoRef2}
//                     muted
//                     loop
//                     preload="auto"
//                     autoPlay

//                 >
//                     <source src={logoVideo} type="video/mp4" />

//                 </video>
//             </div>

//         </div>
//     )
// }
