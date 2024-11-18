import React from 'react';

//styles
import './case-study.scss';

//components
import LiveProject from './live-project-comp/LiveProject';
import CSOne from './cs-one/CSOne';
import CSTwo from './cs-two/CSTwo';


export default function CaseStudy({ Progress }) {
    const sValue = (Progress.Progress + (Progress.Page - 1));
    return (
        <div className="case-study-main-container"
            style={{
                // position: sValue >= 4 && 'absolute',
                top: sValue > 0 && '0',
                left: sValue > 0 && '0',
                transform: sValue >= 2 && sValue < 4 ? `translateX(0)` :
                    sValue > 3 && `translateY(-100%)`
            }}
        >
            <div className="case-study-one"
                style={{
                    // transform: 'translate(-50vw)'
                    transform: `${Math.min(150, (sValue - 2.4) * 140)}` > 0 && `translate(-${Math.min(150, (sValue - 2.4) * 140)}%)`
                }}
            >
                <CSOne />
            </div>
            <div className="case-study-two"
                style={{
                    // transform: 'translate(50vw)'
                    transform: `${Math.min(150, (sValue - 2.4) * 140)}` > 0 && `translate(${Math.min(150, (sValue - 2.4) * 140)}%)`

                }}
            >
                <CSTwo />
            </div>
            <div className="live-project-section"
                style={{
                    transform: `${Math.min(80, (sValue - 3.1) * 140)}` > 0 && `translateY(-${Math.min(100, (sValue - 3.1) * 140)}%)`
                }}
            >
                <LiveProject />
            </div>

        </div>
    )
}
