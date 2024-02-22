import React from 'react'

type Props = {
    topText:string;
    bottomTextName:string;
    bottomText:string;
}

const StudentAckCard = (props: Props) => {
    const {topText ,bottomTextName ,bottomText} = props
  return (
    <div className="card w-96 bg-[#F8F8FF] shadow-xl ">
    <div className="card-body">
      
      {/* Main Text */}
      <div className='h-40'>
      <p>{topText}</p>
      </div>

      {/* Divider */}
      <div className="flex flex-col w-full">
          <div className="divider"></div> 
      </div>

      {/* Last Text Part */}
      <div>
      <p className='text-lg font-bold'>{bottomTextName}</p>
      <p> {bottomText} </p>
      </div>
      
    </div>
  </div>
  )
}

export default StudentAckCard