import React from 'react'
import VideoPlayer from '../../components/video-player/VideoPlayer'
import { VideoReelDiv } from './VideoReel.styles'
import videoTest from '../../../assets/test-videos/h.mov'

const VideoReel = () => {
  return (
    <VideoReelDiv>
      <VideoPlayer video={videoTest} />
      {/* <video src={videoTest} autoPlay muted /> */}
    </VideoReelDiv>
  )
}

export default VideoReel
