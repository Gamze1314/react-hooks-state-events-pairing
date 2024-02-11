import React, { useState } from "react";
import Video from "./Video";
import Title from "./Title";
import Buttons from './Buttons'
import HideButton from "./HideButton";
import Comment from "./Comment";

function App() {

  const [ hideComments , setHideComments ] = useState(true)

  return (
    <React.Fragment>
    <Video />
    <Title />
    <Buttons />
    <HideButton hideComments={hideComments} setHideComments={setHideComments} />
    {hideComments ? <Comment /> : null}
    </React.Fragment>
  )

}

export default App;
