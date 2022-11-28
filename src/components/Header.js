import React from 'react';
import { Link } from "react-router-dom";

function Header({ projectOne, projectTwo, projectThree, projectFour, projectFive, logo }) {

    return (
        <>
            <header className="z-10 top-0 left-0 w-screen fixed flex justify-between align-middle p-6">

                {/*  LOGO ELEMENT  */}

                <picture className="w-36">
                    <Link to="/"><img src={logo} alt=""/></Link>
                </picture>

                {/*  NAVIGATION ELEMENT  */}

                <nav className="flex gap-8 text-2xl">

                    {/*  NAVIGATION LINKS  */}

                    <Link to="/about" className="py-4 hover:underline ">About</Link>
                    <Link to="/" id="project-link" className="mr-5 p-4 hover:underline">Projects</Link>

                    {/*  PROJECT NAVIGATION ELEMENT  */}

                    <div id="project-nav" className="flex flex-col text-xl w-auto absolute top-20 right-14 gap-1 text-right">

                        {/*  PROJECT NAVIGATION LINKS  */}

                        {projectOne && <Link to="/#projectOne" className="hover:underline">{projectOne}</Link>}
                        {projectTwo && <Link to="/#projectTwo" className="hover:underline">{projectTwo}</Link>}
                        {projectThree && <Link to="/#projectThree" className="hover:underline">{projectThree}</Link>}


                        {/*{projectFour && <a href="#projectFour" className="hover:underline">{projectFour}</a>}*/}
                        {/*{projectFive && <a href="#projectFive" className="hover:underline">{projectFive}</a>}*/}
                    </div>

                </nav>

            </header>


        </>
    );
}

export default Header;