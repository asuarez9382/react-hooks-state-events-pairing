import React from "react";

function Body({ videoData, 
                upVotes, 
                setUpVotes, 
                downVotes, 
                setDownVotes,
                onUpVote,
                onDownVote,
                onHideComments,
                isHidden }) {


    return(
        <div className="body">
            <h1>{videoData.title}</h1>
            <span>{videoData.views} Views | Uploaded {videoData.createdAt}</span>
            <div className="buttons">
                <br></br>
                <button onClick={onUpVote}>{upVotes}👍</button>
                <button onClick={onDownVote}>{downVotes}👎</button>
                <br></br>
                <br></br>
                <button onClick={onHideComments}>{isHidden? "Show Comments" : "Hide Comments"}</button>
            </div>
        </div>
    )
}

export default Body;