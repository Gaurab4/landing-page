import React from 'react'

type Props = {
    title:string;
}

const TitleText = (props: Props) => {
    const {title} = props
  return (
    <div className='mt-28 mb-16  justify-center flex'>
    <p className='text-3xl font-bold '>{title}</p>
    </div>
  )
}

export default TitleText;