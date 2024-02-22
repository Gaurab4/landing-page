import React from 'react'
import StudentAckCard from './stundent-ack-card/page'
import TitleText from '../../title-text-common/page'

type Props = {
    
}

const StudentAckPage = (props: Props) => {

  return (
    <>

      {/* Title Section */}
        <TitleText title={'What are students are saying'}/>

        {/* Ack Card Section */}
        <div className='flex gap-x-20'>
        <StudentAckCard
            topText={'I valued working with professors on interesting projects for my final project requirement. Being given the opportunity to build them from scratch and have them serve useful purposes made the work fulfilling while also emulating real-world software development. '}
            bottomTextName={'Mohammad D'}
            bottomText={'Case Western Reserve University'}
        />
        <StudentAckCard
            topText={'The Career Management Center of CSU is a great resource. Fort Collins is a beautiful city, and CSU has an amazing campus.'}
            bottomTextName={'Winston K'}
            bottomText={'Case Western Reserve University'}
        />
        <StudentAckCard
            topText={'Going to CWRU gives you exposure to so many opportunities. The career centre mentored me through the interview process, and I already have a job at EY after graduation.'}
            bottomTextName={'Daniel O'}
            bottomText={'Case Western Reserve University'}
        />
        </div>

    </>
    
  )
}

export default StudentAckPage