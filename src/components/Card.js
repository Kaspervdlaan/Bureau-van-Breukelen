import React from 'react';

function Card({ title, descOne, descTwo, url }) {
    return (
        <div className="h-screen relative">
            <div className="absolute bottom-20 left-20 shadow-2xl p-8 max-w-3xl bg-opacity-40">
                <h2 className="mb-3.5 text-3xl font-bold">{title}</h2>

                <h3 className="mb-2 text-lg">{descOne}</h3>
                <p className="mb-2">{descTwo}</p>

                <a href="">{url}</a>
            </div>
        </div>
    );
}

export default Card;