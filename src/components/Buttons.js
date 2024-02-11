import React, { useState} from 'react'
import { Button } from 'semantic-ui-react'
import video from '../data/video'

function Buttons() {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);

  return (
    <div className='centered-text'>
      <Button onClick={() => setUpvotes(upvotes + 1)}>{upvotes} 👍</Button>
      <Button onClick={() => setDownvotes(downvotes + 1)}>{downvotes} 👎</Button>
    </div>
  );
}

export default Buttons;

// When a user clicks on the "👍" button, the number of upvotes for the video should increase


//When a user clicks on the "👎" button, the number of downvotes for the video should increase