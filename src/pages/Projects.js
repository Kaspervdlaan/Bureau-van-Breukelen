import React, {useEffect} from 'react';
import Project from "../components/Project";
import {useLocation} from "react-router-dom";
import Footer from "../components/Footer";
import bg1 from "../assets/backgrounds/bg1.jpg"
import bg2 from "../assets/backgrounds/bg2.jpg"
import bg4 from "../assets/backgrounds/bg4.jpg"


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
                image={bg1}
            />

            <Project
                name="projectTwo"
                title="Phatfour x BureauvanBreukelen - 2021"
                image={bg2}
            />

            <Project
                name="projectThree"
                title="Kartent x BureauvanBreukelen - 2020"
                image={bg4}
                footer={true}
            />
        </>
    );
}

export default Projects;