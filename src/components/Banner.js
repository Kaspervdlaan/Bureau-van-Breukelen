import React from 'react';
import {Link} from "react-router-dom";

function Card({ title, color }) {
    return (
        <div className="h-screen relative">
            <div className="absolute bottom-8 right-0 text-right p-4 max-w-3xl ">
                <Link to=""><h2 className="text-lg font-normal text-blue-700 2xl:text-xl">{title}</h2></Link>
            </div>
        </div>
    );
}

export default Card;