/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState } from 'react'
// import { VideoGrid } from 'react-fb-image-video-grid'
import { getOwnerVideos } from '../../api/video-api'

const OwnerVideos = ({ name }) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    setVideos(getOwnerVideos(name))
  }, [])
  console.log('mi vdieos.', videos)
  return (
    <div>
      Hola
      {/* {videos &&
        <VideoGrid>
          {videos.map((video, index) =>
            <div key={index}>
              <video src={video.url} />
            </div>
          )}
        </VideoGrid>} */}
    </div>
  )
}

export default OwnerVideos
