/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react'
import { VideoPlayerDiv } from './VideoPlayer.styles'
import ApplePayLogo from '../../../assets/images/logos/Apple Pay Logo White 2.png'

const VideoPlayer = ({ video }) => {
  const [muted, setMuted] = useState(false)
  const [isPlayed, setIsPlayed] = useState(true)
  const videoRef = useRef(null)

  const muteVideo = (e) => {
    e.stopPropagation()
    setMuted(current => !current)
  }

  const pauseVideo = (e) => {
    const video = videoRef.current
    if (isPlayed) {
      video.pause()
      setIsPlayed(false)
    } else {
      video.play()
      setIsPlayed(true)
    }
  }

  // to allow autoplay with video unmuted
  const videoLoaded = (e) => {
    const video = videoRef.current
    video.play()
    setIsPlayed(true)
  }

  return (
    <VideoPlayerDiv>
      <video
        ref={videoRef}
        src={video}
        // autoPlay
        loop
        muted={muted}
        onLoadedData={videoLoaded}
      />
      <div className='videoPlayer-content' onClick={pauseVideo}>
        <div className='videoPlayer-pay-icon'>
          <img src={ApplePayLogo} alt='Apple Pay' />
        </div>
        <div className='videoPlayer-mute-icon' onClick={muteVideo}>Mute</div>
      </div>
    </VideoPlayerDiv>
  )
}

export default VideoPlayer
