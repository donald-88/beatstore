const Button2 = (props) =>{
  return(
    <div className="absolute bottom-0 left-0 w-full pl-8 pr-8 pb-4">
      <button onClick={props.onClick}
        className="text-3xl font-thunder font-bold rounded-full bg-custom-darkGray h-14 w-full">
        {props.title}
      </button>
    </div>
  )
}

export default Button2
