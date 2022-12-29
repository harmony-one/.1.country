/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState } from 'react'
import { ImageGrid } from 'react-fb-image-video-grid'
import { getOwnerVideos } from '../../api/video-api'
import { useHistory } from 'react-router-dom'
import { Title } from '../../components/Text'

const OwnerVideos = ({ name }) => {
  const [videos, setVideos] = useState([])
  const history = useHistory()

  useEffect(() => {
    setVideos(getOwnerVideos(name))
  }, [])
  console.log('mi vdieos.', videos, videos.length)

  const watchVideo = (vanityUrl) => {
    history.push(`/video/${vanityUrl}`)
  }

  return (
    <>
      {videos.length > 1 &&
        <div className=''>
          <Title style={{ textAlign: 'center' }}>
            My videos
          </Title>
          <ImageGrid showModal={false}>
            {videos.map((video, index) =>
              <video key={index} onClick={() => watchVideo(video.vanityUrl)}>
                <source
                  type='video/mp4'
                  src={video.url}
                />
              </video>
            )}
          </ImageGrid>
        </div>}
    </>
  )
}

export default OwnerVideos
