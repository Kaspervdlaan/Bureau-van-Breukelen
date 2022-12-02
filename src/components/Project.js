import React from 'react';
import Banner from "./Banner";
import Footer from "./Footer";



function Project({ title, name, image, footer } ) {
    return (
        <main id={name}>
            <Banner
                title={title}
                image={image}
                footer={footer}
            />

        </main>
    );
}

export default Project;