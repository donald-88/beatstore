import Searchbar from '../components/dom/searchbar'
import Beatlist from '../components/dom/beatlist'
import { useState } from 'react'


export const getStaticProps = async () => {

  const res = await fetch('http://localhost:8000/beats')
  const data = await res.json()

  return {
    props: { beats: data}
  }
}

const Store = ({beats}) => {
  return (
    <div>
      <div className="p-8">
        <h1 className="text-7xl">FIND YOUR SOUND</h1>
        <Searchbar/>
      </div>
      <Beatlist beats={beats}/>
    </div>
  )
}

export default Store
