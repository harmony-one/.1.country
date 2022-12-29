import styled from 'styled-components'
import { FlexColumn } from '../Layout'

export const VideoPlayerDiv = styled(FlexColumn)`
  width: 100%;
  height: 100%;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .videoPlayer-content {
    z-index: 3;
    background: transparent;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between; // flex-end;
    align-items: flex-end;
    color: white;

    .videoPlayer-pay-icon {
      cursor: pointer;
      margin-right: 1em;
      margin-top: 1em;
      background-color: black;
      height: 1.5em;
      border-radius: 10px;
      padding-left: 0.35em;
      padding-right: 0.35em;
      padding-bottom: 0.2em;
      img {
        height: 1.8em;
        object-fit: scale-down;
      }
    }

    .videoPlayer-mute-icon {
      z-index: 4;
      position: relative;
      z-index: 10;
      cursor: pointer;
      margin-right: 1em;
      margin-bottom: 1em;
    }
  }
`
