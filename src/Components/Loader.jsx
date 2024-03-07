import React from 'react'

const Loader = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <div id='load' className='w-32 h-32 rounded-full border-2 border-[#ddd] border-t-[#333]'></div>
    </div>
  )
}

export default Loader
