import Link from 'next/link'

const Beatlist = ({beats}, props) => {
  return (
    <div>
      {beats.map((beat) => {
        return(
          <div key={beat.id} className="relative">
            <div className="flex flex-col bg-custom-darkGray h-96 w-full mt-2 p-8">
              <h2 className="text-4xl font-bold">{beat.name}</h2>
              <p className="text-xl">{beat.producer}</p>
              <button
                onClick={props.togglePlayback}
                className="absolute bottom-8 left-8 flex justify-center items-center h-12 w-12 pl-1 border rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C2C4C3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Beatlist
