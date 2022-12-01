import React from 'react';
import {Link} from "react-router-dom";

function Banner({ title, image }) {
    return (
        <div className="md:overflow-hidden md:max-h-[100vh] md:h-auto h-screen relative">
            <img className="h-full object-cover" src={image} alt=""/>
            <div className="absolute bottom-8 right-0 text-right p-4 max-w-3xl ">
                <Link to=""><h2 className="text-xl font-normal underline text-blue-700 2xl:text-2xl">{title}</h2></Link>
            </div>
        </div>
    );
}

export default Banner;