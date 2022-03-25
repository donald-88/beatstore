import { useState } from 'react'

const Miniplayer = () => {
  return (
    <div className="flex items-center justify-between fixed bottom-0 left-0 h-20 w-screen bg-custom-gray">
      <button className="ml-8 mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C2C4C3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-pause"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
      </button>
      <div className="flex-auto">
        <p className="text-2xl font-bold leading-5">Hello</p>
        <p className="text-xl leading-5">Hi</p>
      </div>
      <button className="mx-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C2C4C3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
      </button>
    </div>
  )
}

export default Miniplayer
