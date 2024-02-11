import React from 'react'
import { Header } from 'semantic-ui-react'
import video from '../data/video.js'

console.log(video)
function Title() {
  return (
    <div>
    <Header className='centered-text' as='h1'>{video.title}</Header>
    <p className='centered-text'>{video.views} Views || Uploaded {video.createdAt}</p>
    </div>
  )
}


export default Title