import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './routes/home/Home'
import VideoReel from './routes/video-reel/VideoReel'

const Routes = () => {
  console.log('routes')
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route path='/video' render={() => <VideoReel />} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
