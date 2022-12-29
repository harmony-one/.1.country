import React, { useEffect, useState } from 'react'
import VideoPlayer from '../../components/video-player/VideoPlayer'
import { useParams } from 'react-router-dom'
import { getVideo } from '../../api/video-api'

import { VideoReelDiv } from './VideoReel.styles'

const VideoReel = () => {
  const [videos, setVideos] = useState(null)
  const { vanityUrl } = useParams()

  useEffect(() => {
    setVideos(getVideo(vanityUrl))
  }, [])

  return (
    <VideoReelDiv>
      {videos && <VideoPlayer video={videos} />}
    </VideoReelDiv>
  )
}

export default VideoReel
