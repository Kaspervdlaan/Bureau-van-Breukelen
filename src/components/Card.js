import React from 'react';

function Card({ title, descOne, descTwo, url }) {
    return (
        <div className="h-screen relative">
            <div className="absolute bottom-20 left-0 bg-white shadow-2xl p-8 max-w-3xl bg-opacity-40 md:left-20">
                <h2 className="mb-3.5 text-3xl font-bold 2xl:text-4xl">{title}</h2>

                <h3 className="mb-2 text-xl 2xl:text-2xl">{descOne}</h3>
                <p className="mb-2 text-lg 2xl:text-xl">{descTwo}</p>

                <a href="">{url}</a>
            </div>
        </div>
    );
}

export default Card;