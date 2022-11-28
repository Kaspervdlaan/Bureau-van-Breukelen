import React, {useEffect} from 'react';
import Project from "../components/Project";
import {useLocation} from "react-router-dom";


function Projects() {
    const location = useLocation();

    useEffect(()=> {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({behavior: "smooth"})
            }
        } else {
            window.scrollTo({top:0,left:0, behavior: "smooth"})
        }
    }, [location,])

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
                title="Andere titel"
                image="h-screen bg-cover bg-no-repeat bg-[url('./assets/backgrounds/project-one-bg.jpg')]"
                descOne="Hiha ho Joshua's website maken zo."
                descTwo="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
                url="eventueleurl.com"
            />

            <Project
                name="projectThree"
                title="Gekke zijspan PhatFour"
                image="h-screen bg-cover bg-no-repeat bg-[url('./assets/backgrounds/bg2.jpeg')]"
                descOne="Filmpje maken in de zon EN de sneeuw"
                descTwo="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                url="eventueleurl.com"
            />
        </>
    );
}

export default Projects;