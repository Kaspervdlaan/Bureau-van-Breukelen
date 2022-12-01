import React from 'react';
import Banner from "./Banner";

function Project({ title, name, image } ) {
    return (
        <main id={name} className={image}>
            <Banner
                title={title}
            />
        </main>
    );
}

export default Project;