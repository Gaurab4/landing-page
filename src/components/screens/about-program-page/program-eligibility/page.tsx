import React from 'react'

type Props = {}

const ProgramEligible = (props: Props) => {
  return (
    <div className='flex mt-16 pl-20'>
        {/* Left Side  */}

    <div className='w-1/2 h-full '>
        <p className='font-[600] text-2xl mb-5'>Program Timeline</p>
        <ul className="timeline timeline-vertical w-[20px]">
        <li>
            <div className="timeline-start h-[80px]"></div>
            <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
                
            <hr/>
        </li>

        <li>
            <hr/>
            <div className="timeline-start  h-[80px]"></div>
            <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>   
            </div>
        </li>
        </ul>
    </div>

        {/* Right Side */}

        <div className='w-1/2 h-full'>

        </div>
    </div>
  )
}

export default ProgramEligible;