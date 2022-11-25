import React from 'react';

function About({ title, descOne, descTwo }) {
    return (
        <>
            <div className="h-screen flex flex-col">
                <div className="m-auto max-w-4xl text-center ">
                    <h2 className="text-3xl mb-2">{title}</h2>
                    <p className="text-xl mb-2">{descOne}</p>
                    <p className="text-xl">{descTwo}</p>
                </div>
            </div>
        </>
    );
}

export default About;