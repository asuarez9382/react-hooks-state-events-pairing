import video from "../data/video.js";
import Video from "./Video.js";
import Body from "./Body.js";
import Comments from "./Comments.js"
import { useState } from "react";

function App() {
  console.log("Here's your data:", video);

  const videoData = video

  const [upVotes, setUpVotes] = useState(videoData.upvotes)
  const [downVotes, setDownVotes] = useState(videoData.downvotes)
  const [isHidden, setIsHidden] = useState(false)

  function handleUpVote() {
    setUpVotes(upVotes + 1)
  }

  function handleDownVote() {
    setDownVotes(downVotes + 1)
  }

  function handleHideComments() {
    console.log("clicked!")
    setIsHidden(!isHidden)
  }



  return (
    <div className="App">
      <Video />
      <Body 
        videoData={videoData}
        upVotes={upVotes}
        downVotes={downVotes}
        onUpVote={handleUpVote}
        onDownVote={handleDownVote}
        onHideComments={handleHideComments}
        isHidden={isHidden}
      />
      <Comments 
        videoData={videoData}
        isHidden={isHidden}
      />
    </div>
  );
}

export default App;
