import React from 'react';
import Card from "./Card";


function Project({ title, descOne, descTwo, url, name, image } ) {
    return (
        <main id={name} className={image}>
            <Card
                title={title}
                descOne={descOne}
                descTwo={descTwo}
                url={url}
            />
        </main>
    );
}

export default Project;