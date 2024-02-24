
import React from 'react'
import MyFormFirst from './form-one/page';
import TitleText from '@/components/title-text-common/page';

type Props = {}

const Formpage = (props: Props) => {
  return (
        <div className='bg-[#FAF9FF] w-full  h-[90%]   justify-center flex'>
            <div className=' '>
              <div className='justify-center flex'>
              <TitleText title={'Fill this form to check your eligibility'}/>
              </div>
              <div>
              <MyFormFirst/>
              </div>
        
            </div>
        
        </div>

  )
}

export default Formpage;