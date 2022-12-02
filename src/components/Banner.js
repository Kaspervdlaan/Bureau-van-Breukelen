import React from 'react';
import {Link} from "react-router-dom";
import Footer from "./Footer";

function Banner({ title, image, footer }) {
    return (
        <>
        <div className="md:overflow-hidden md:max-h-[100vh] md:h-auto h-screen relative flex">
            <img className="h-full w-full object-cover" src={image} alt=""/>
            <div className="absolute bottom-8 right-8 text-right p-4 max-w-3xl ">
                <Link to=""><h2 className="text-xl font-normal underline text-blue-700 2xl:text-4xl">{title}</h2></Link>
            </div>

        </div>

        {footer && <Footer/>}
        </>
    );
}

export default Banner;