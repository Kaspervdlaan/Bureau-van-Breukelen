import React from 'react';
import Card from "./Card";

function Project({ title, descOne, descTwo, url, name, image } ) {
    return (
        <main id={name} className="h-screen bg-project-two-bg bg-cover bg-no-repeat">
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