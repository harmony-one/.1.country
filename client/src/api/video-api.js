import video1 from '../../assets/test-videos/h.mov'
import video2 from '../../assets/test-videos/h2.mov'
import video3 from '../../assets/test-videos/Harmony launches on Binance.mov'
import video4 from '../../assets/test-videos/Harmony launches.mov'

export const TEST_VIDEOS = [
  {
    url: video1,
    vanityUrl: 'testvideo-1',
    merchandiseId: undefined,
  },
  {
    url: video2,
    vanityUrl: 'testvideo-2',
    merchandiseId: '34342',
  },
  {
    url: video3,
    vanityUrl: 'testvideo-3',
    merchandiseId: '34234',
  },
  {
    url: video4,
    vanityUrl: 'testvideo-4',
    merchandiseId: undefined,
  }
]

export const getOwnerVideos = (name) => {
  return TEST_VIDEOS
}

export const getVideo = (vanityUrl) => {
  return TEST_VIDEOS.find(v => v.vanityUrl === vanityUrl)
}
