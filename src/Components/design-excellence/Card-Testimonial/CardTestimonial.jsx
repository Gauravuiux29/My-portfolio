import React from 'react';

//styles
import './card-testimonial.scss';

export default function CardTestimonial ({ITEM}) {
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
                        {ITEM.contentText}
                    </p>
                </div>

            </div>
        </div>
    )
}
