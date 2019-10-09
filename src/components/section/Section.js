import React from 'react';
import Fade from 'react-reveal/Fade';
import './Section.css';
const Section = ({id, title, children, scrollInTop, enableFade}) => {
    const duration = enableFade?1000:0;
    return (
        <Fade bottom spy={scrollInTop} duration={duration}>
            <div id={id} className="section" >
                <h1>{title}</h1>
                <p>
                    {children}
                </p>
            </div>
        </Fade>
    )
}

export default Section;