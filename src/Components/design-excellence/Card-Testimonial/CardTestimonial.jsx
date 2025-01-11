import React from 'react';

//styles
import './card-testimonial.scss';

export default function CardTestimonial({ ITEM }) {
    const content_text = ITEM.contentText;
    const target = ITEM.highLights;

    const startIndex = content_text.indexOf(target)
    if (startIndex === -1) {
        return <p>{content_text}</p>
    }

    const before = content_text.substring(0, startIndex);
    const highlight = content_text.substring(startIndex, startIndex + target.length);
    const after = content_text.substring(startIndex + target.length);


    return (
        <div className="card-testimonial-main">
            <div className="inner-section">
                <div className="circle-img">
                    <div className="inner">
                        <img src={ITEM.imgURL} alt="" />
                    </div>
                </div>

                <h3>{ITEM.name}</h3>
                <p>{ITEM.details}</p>

                <div className="content-sec">
                    <p>
                        {before}
                        <span style={{ backgroundColor: "#DB06F3" , color:"#fff", padding:'0 0.2vw'}}>{highlight}</span>
                        {after}
                    </p>
                </div>

            </div>
        </div>
    )
}
