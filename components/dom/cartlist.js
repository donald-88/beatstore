
const Cartlist = (props) => {
  return (
    <div className="flex justify-between w-full h-24 rounded-2xl bg-custom-darkGray mt-3">
      <div className="h-full w-24 bg-custom-white"></div>
      <div className="flex flex-col flex-auto justify-center items-start p-6">
        <h2 className="text-xl leading-5 font-bold">Queen's Freestyle</h2>
        <p className="leading-5 font-thin">Eiht88</p>
        <h2 className="text-xl leading-5 font-bold">$30</h2>
      </div>
      <div
        onClick={props.deleteCart}
        className="flex items-center justify-center w-14">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C2C4C3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
      </div>
    </div>
  )
}

export default Cartlist
