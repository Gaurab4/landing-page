import React from 'react';

type Props = {
    name: string;
    position: string;
    description: string;
    imgSrc: string;
}

const AlumniCard = (props: Props) => {
    const { name, position, description, imgSrc } = props;

    return (
        <div className="card w-72 h-96 bg-cover bg-center relative" style={{ backgroundImage: `url(${imgSrc})` }}>
            <div className="absolute   bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 rounded-lg text-white">
                <p className="card-title text-lg">{name}</p>
                <p className="text-sm">{position}</p>
                <p className="text-sm font-light">{description}</p>
            </div>
        </div>
    );
}

export default AlumniCard;
