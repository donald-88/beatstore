import Textinput from './textinput'

const Searchbar = (props) => {
  return (
    <div className="relative">
      <Textinput placeholder="Search type beat"/>
      <span className="absolute top-2 right-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C2C4C3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      </span>
    </div>
  )
}

export default Searchbar
