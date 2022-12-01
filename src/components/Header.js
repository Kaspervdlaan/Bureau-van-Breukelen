import React, {useState} from 'react';
import { Link } from "react-router-dom";

function Header({ projectOne, projectTwo, projectThree, projectFour, projectFive, logo }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="z-10 top-0 left-0 w-screen fixed flex justify-between items-center p-4 ">

                {/*  LOGO ELEMENT  */}

                <picture className="w-24 z-20 md:w-36 2xl:w-36 ">
                    <Link to="/"><img src={logo} alt=""/></Link>
                </picture>

                {/*  NAVIGATION ELEMENT  */}

                <nav className="gap-8 text-2xl hidden md:flex 2xl:text-3xl">

                    {/*  NAVIGATION LINKS  */}

                    <Link to="/about" className="py-4 hover:underline ">About</Link>
                    <Link to="/" id="project-link" className="mr-8 p-4 hover:underline">Projects</Link>

                    {/*  PROJECT NAVIGATION ELEMENT  */}

                    <div id="project-nav" className="flex flex-col text-xl w-auto absolute top-24 right-16 gap-1 text-right 2xl:text-2xl 2xl:top-24">

                        {/*  PROJECT NAVIGATION LINKS  */}

                        {projectOne && <Link to="/#projectOne" className="hover:underline">{projectOne}</Link>}
                        {projectTwo && <Link to="/#projectTwo" className="hover:underline">{projectTwo}</Link>}
                        {projectThree && <Link to="/#projectThree" className="hover:underline">{projectThree}</Link>}


                        {/*{projectFour && <a href="#projectFour" className="hover:underline">{projectFour}</a>}*/}
                        {/*{projectFive && <a href="#projectFive" className="hover:underline">{projectFive}</a>}*/}
                    </div>

                </nav>

                <nav className="flex md:hidden">
                    <div onClick={() => setIsMenuOpen((prev) => !prev)} className="space-y-2 cursor-pointer absolute top-10 right-10">
                        <span className="block w-8 h-0.5 bg-gray-600"></span>
                        <span className="block w-8 h-0.5 bg-gray-600"></span>
                        <span className="block w-5 h-0.5 bg-gray-600"></span>
                    </div>




                <div className={isMenuOpen ? "showMobileMenu " : "hideMobileMenu"} >

                    <Link onClick={() => setIsMenuOpen((prev) => !prev)} to="/about" className="hover:underline ">About</Link>
                    <Link onClick={() => setIsMenuOpen((prev) => !prev)} to="/" id="project-link" className="hover:underline">Projects</Link>

                    <svg onClick={() => setIsMenuOpen(false)}
                        className="h-8 w-8 text-gray-600 top-9 right-10 absolute cursor-pointer"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>


                    {/*<Link to="/#projectOne" className="hover:underline">{projectOne}</Link>*/}
                    {/*<Link to="/#projectTwo" className="hover:underline">{projectTwo}</Link>*/}
                    {/*<Link to="/#projectThree" className="hover:underline">{projectThree}</Link>*/}
                </div>
            </nav>
            </header>


        </>
    );
}

export default Header;