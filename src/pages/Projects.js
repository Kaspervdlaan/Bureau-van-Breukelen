import React, {useEffect} from 'react';
import Project from "../components/Project";
import {useLocation} from "react-router-dom";
import Footer from "../components/Footer";


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
                title="Dopper x BureauvanBreukelen - 2022"
                image="h-screen bg-cover bg-no-repeat bg-[url('./assets/backgrounds/bg1.jpg')]" // PUT BACKGROUND IMAGE URL HERE
            />

            <Project
                name="projectTwo"
                title="Phatfour x BureauvanBreukelen - 2021"
                image="h-screen bg-cover bg-no-repeat bg-[url('./assets/backgrounds/project-one-bg.jpg')]"
            />

            <Project
                name="projectThree"
                title="Kartent x BureauvanBreukelen - 2020"
                image="h-screen bg-cover bg-no-repeat bg-[url('./assets/backgrounds/bg2.jpeg')]"
            />

            <Footer/>
        </>
    );
}

export default Projects;