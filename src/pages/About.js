import React from 'react';
import Card from "../components/Card";
import Footer from "../components/Footer";

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
            <Footer/>
        </>
    );
}

export default About;