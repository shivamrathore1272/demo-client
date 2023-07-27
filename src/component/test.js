import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { initialData } from './dataFile'

const Test = () => {
    const {id }= useParams()
    const currentClient = initialData.clients.find((e) => e.clientId === id);
  return (
    <>
    {currentClient.stories.map((e,i)=>(
    <p key={e.id}>
        <Link
          id={`sel-client-story-${i}`}
          to={{ pathname: `/${id}/${e.id}` }}
          key={e.id}
        >
          <spain>Story Id: {e.id}</spain>
        </Link>
        {/* <span> </span> */}
        {/* <a
          href={`${AMP_URL}?clientId=${currentClient?.id}&clientContentId=${e.id}&title=${
            story.title
          }&url=${encodeURIComponent(window.location.href + '/' + e.id)}`}
        >
          {' '}
          amp
        </a> */}
      </p>))}
    </>
  )
}

export default Test