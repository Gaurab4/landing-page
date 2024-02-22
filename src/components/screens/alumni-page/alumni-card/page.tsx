import React from 'react'
import Image from 'next/image'
type Props = {
    name:string;
    position:string;
    description:string;
    imgSrc:string;
}

const AlumniCard = (props: Props) => {
    const {name , position , description,imgSrc} = props;
  return (
    <>
    <div className="card w-72 h-96 bg-base-100 shadow-xl">
        <figure ><Image src={imgSrc} width='96' height='96' alt="Alumni" /></figure>
        <div className="card-body  items-center">
            <p className="card-title text-lg ">{name}</p>
            <p className='text-sm'>{position}</p>
            <p className='text-sm font-light'>{description}</p>
        </div>
    </div>
    </>
  )
}

export default AlumniCard