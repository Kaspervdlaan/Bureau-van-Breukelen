import React from 'react';
import Banner from "./Banner";



function Project({ title, name, image } ) {
    return (
        <main id={name}>
            <Banner
                title={title}
                image={image}
            />
        </main>
    );
}

export default Project;