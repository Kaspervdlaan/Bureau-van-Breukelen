import React from 'react';
import Project from "../components/Project";

function Projects() {
    return (
        <>
            <Project
                name="projectOne"
                title="Nakwatch Ultra 2000"
                descOne="Voor als als je de tijd en de weg kwijt bent."
                descTwo="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
                url="eventueleurl.com"
            />

            <Project
                name="projectTwo"
                title="ANdere titel"
                descOne="higo de puta de put"
                descTwo="haidflkas kldfhdk l dfs kls fhkljls ekj ilkdj fidf"
                url="eventueleurl.com"
            />

            <Project
                name="projectThree"
                title="nog meer titels"
                descOne="higo de puta de put"
                descTwo="haidflkas kldfhdk l dfs kls fhkljls ekj ilkdj fidf"
                url="eventueleurl.com"
            />
        </>
    );
}

export default Projects;