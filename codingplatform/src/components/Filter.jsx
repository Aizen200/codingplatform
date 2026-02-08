import React from 'react'

const Filter = () => {
  return (
    <div>
        <div className='flex flex-col bg-slate-500 h-32 w-32 gap-6'>
            {["easy","medium","hard"].map((x)=>(
                 <button className='bg-slate-50 border-collapse'>{x}</button>))}
        </div>
      
    </div>
  )
}

export default Filter
