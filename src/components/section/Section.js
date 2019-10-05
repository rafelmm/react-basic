import React from 'react';

const Section = ({id, title, children}) => {

    return (
        <div id={id} className="section">
            <h1>{title}</h1>
            <p>
                {children}
            </p>
        </div>
    )
}

export default Section;