const Textinput = (props) => {
  return (
    <div className="flex mt-4">
      <div className="relative w-full">
        <input
          className="rounded-lg border border-custom-white bg-black placeholder-custom-white text-lg xt-lg h-10 w-full pl-4" placeholder={props.placeholder}>
        </input>
      </div>
    </div>
  )
}

export default Textinput
