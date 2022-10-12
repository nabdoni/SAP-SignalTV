import { useState } from 'react'
import './App.css'
import VideoPlayer from './components/VideoPlayer'


//blocker ! all modern browsers has a policy that deactivates autoplay on playlists, videos need to be started on mute

const App = () => {

  return (
    <div className="App">
      <VideoPlayer controls={false} modest={true} rel={false} mute={false} />
    </div>
  )
}

export default App
