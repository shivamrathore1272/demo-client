import React from 'react'
import { Link } from 'react-router-dom'
import {initialData} from './dataFile'

const Demo = () => {
    
  return (
    <>
    {
    initialData.clients.map((e)=>(
   <Link to={{ pathname: `/${e.clientId}` }} key={e.clientId} id={`sel-${e.clientId}`}>
      <p id={`sel-child-${e.clientId}`}>
        {e.clientName} ({e.clientId})
      </p>
    </Link>
))}
    </>
  )
}

export default Demo