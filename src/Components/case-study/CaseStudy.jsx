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
                transform: sValue >= 2 && sValue < 3 ? `translateX(0)` :
                    sValue > 3 && `translateY(-100%)`
            }}
        >
            <div className="case-study-one"
                style={{
                    // transform: 'translate(-50vw)'
                    transform: `${Math.min(150, (sValue - 2.2) * 300)}` > 0 && `translate(-${Math.min(150, (sValue - 2.2) * 300)}%)`
                }}
            >
                <CSOne Progress={Progress} />
            </div>
            <div className="case-study-two"
                style={{
                    // transform: 'translate(50vw)'
                    transform: `${Math.min(150, (sValue - 2.2) * 300)}` > 0 && `translate(${Math.min(150, (sValue - 2.2) * 300)}%)`

                }}
            >
                <CSTwo />
            </div>
            <div className="live-project-section"
                style={{
                    transform: `${Math.min(80, (sValue - 2.5) * 260)}` > 0 && `translateY(-${Math.min(100, (sValue - 2.5) * 260)}%)`
                }}
            >
                <LiveProject Progress={Progress} />
            </div>

        </div>
    )
}
