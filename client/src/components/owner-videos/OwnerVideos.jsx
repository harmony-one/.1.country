/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState } from 'react'
import { VideoGrid } from 'react-fb-image-video-grid'
import { getOwnerVideos } from '../../api/video-api'

const OwnerVideos = ({ name }) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    setVideos(getOwnerVideos(name))
  }, [])
  console.log('mi vdieos.', videos)
  return (
    <div>
      {videos.length > 1 &&
        <VideoGrid>
          {videos.map((video, index) =>
            <video controls key={index}>
              <source
                type='video/mp4'
                src={video.url}
              />
            </video>
          )}
        </VideoGrid>}
    </div>
  )
}

export default OwnerVideos
