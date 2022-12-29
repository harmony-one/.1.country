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
    align-items: center;
    color: white;

    .videoPlayer-top {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      height: 3em;

      .videoPlayer-top-close {
        cursor: pointer;
        color: #525252;
        margin-top: 1em;
        margin-left: 1em;
        z-index: 4;
        font-size: 1.5em;
      }
      
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
    }

    .videoPlayer-bottom {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-content: flex-end;
      align-items: flex-end;

      .videoPlayer-mute-icon {
        background-color: #525252;
        border-radius: 50px;
        z-index: 4;
        position: relative;
        cursor: pointer;
        margin-right: 1em;
        margin-bottom: 1em;
        padding: 0.2em 0.2em 0em;
        
        svg {
          font-size: 1.2rem;
          margin: 0 auto;
        }
      }
    }
    
  }
`
