import React from "react";

function Comments({ videoData, isHidden, onHideComments }) {


    return(
        <div>
            {!isHidden? 
            <div>
                <h2>Commments</h2>
                <h3>{videoData.comments[0]['user']}</h3>
                <h3 className="commentText">{videoData.comments[0]['comment']}</h3>
                <h3>{videoData.comments[1]['user']}</h3>
                <h3 className="commentText">{videoData.comments[1]['comment']}</h3>
            </div>
            : ""
            }
        </div>
        
    )
}

export default Comments;