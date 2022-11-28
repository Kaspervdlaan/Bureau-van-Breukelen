import React from 'react';
import Card from "../components/Card";

function About({title, descOne, descTwo}) {
    return (
        <>
            <div className="h-screen flex flex-col bg-[url('./assets/backgrounds/bg2.jpeg')] bg-cover bg-no-repeat">
                <Card
                    title={title}
                    descOne={descOne}
                    descTwo={descTwo}
                />
            </div>
            {/*<div className="m-auto max-w-4xl text-center ">*/}
            {/*    <h2 className="text-3xl mb-2">{title}</h2>*/}
            {/*    <p className="text-xl mb-2">{descOne}</p>*/}
            {/*    <p className="text-xl">{descTwo}</p>*/}
            {/*</div>*/}

        </>
    );
}

export default About;