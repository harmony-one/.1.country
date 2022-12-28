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
      margin-right: 1em;
      margin-top: 1em;
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
