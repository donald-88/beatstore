import Searchbar from '../components/dom/searchbar'
import Beatlist from '../components/dom/beatlist'
import Miniplayer from '../components/dom/miniplayer'
import { useState } from 'react'


export const getStaticProps = async () => {

  const res = await fetch('http://localhost:8000/beats')
  const data = await res.json()

  return {
    props: { beats: data}
  }
}

const Store = ({beats}) => {

////////////////////Miniplayer////////////////////////////
  const [miniplayer, setMiniplayer] = useState(false) ///
  const handleMiniplayer = () =>{                    ///
    setMiniplayer(true)                             ///
  }                                                ///
/////////////////////////////////////////////////////

///////////////////BeatIndex/////////////////////////////
  const [beatIndex, setBeatIndex] = useState(-1)      ///
  const onBeatSelect = (index) =>{                   ///
    setBeatIndex(index)                             ///
  }                                                ///
/////////////////////////////////////////////////////

  return (
    <div>
      <div className="p-8">
        <h1 className="text-7xl">FIND YOUR SOUND</h1>
        <Searchbar/>
      </div>
      <Beatlist beats={beats} handleMiniplayer={handleMiniplayer} onBeatSelect={onBeatSelect}/>
      {miniplayer && <Miniplayer/>}
    </div>
  )
}

export default Store
