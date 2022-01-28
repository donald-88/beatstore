import React from 'react'
import PropTypes from 'prop-types'

const Button1 = (props) => {
  return (
    <div>
      <button
        className="border-solid bg-custom-white border-2 p-2 mt-4 rounded-xl hover:bg-black">
        <p className="text-black font-bold hover:text-custom-white">{props.name}</p>
      </button>
    </div>
  )
}

export default Button1
