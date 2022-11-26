import React from 'react';
import Project from "../components/Project";

function Projects() {
    return (
        <>

            <Project
                name="projectOne"
                title="Dopper watertap"
                image="h-screen bg-cover bg-no-repeat bg-[url('./assets/backgrounds/bg1.jpg')]" // PUT BACKGROUND IMAGE URL HERE
                descOne="Voor al je dorstige  dagen."
                descTwo="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
                url="eventueleurl.com"
            />

            <Project
                name="projectTwo"
                title="ANdere titel"
                image="h-screen bg-cover bg-no-repeat bg-[url('./assets/backgrounds/project-one-bg.jpg')]"
                descOne="higo de puta de put"
                descTwo="haidflkas kldfhdk l dfs kls fhkljls ekj ilkdj fidf"
                url="eventueleurl.com"
            />

            <Project
                name="projectThree"
                title="nog meer titels"
                image="h-screen bg-cover bg-no-repeat bg-[url('./assets/backgrounds/bg2.jpeg')]"
                descOne="higo de puta de put"
                descTwo="haidflkas kldfhdk l dfs kls fhkljls ekj ilkdj fidf"
                url="eventueleurl.com"
            />
        </>
    );
}

export default Projects;