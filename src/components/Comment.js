import React from 'react'
import { Header } from 'semantic-ui-react'
import video from "../data/video.js"



function Comment() {
const { comments } = video

const commentTags = comments.map((obj) => (
        <div className='centered-text' key={obj.id}>
          <Header as='h4'>{obj.user}</Header>
          <p>{obj.comment}</p>
        </div>
      ))

  return (
    <div>
      {commentTags}
    </div>
  );
}

export default Comment;
