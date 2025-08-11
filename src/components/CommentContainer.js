import { useState } from "react";
import Comment from "./Comment"

const CommentContainer = ({ comments }) => {

  const [openReplies, setOpenReples] = useState({})

  const toggleReplies = (id) => {
    setOpenReples((prev) => ({
      ...prev,
      [id] : !prev[id]
    }))
  }

  return comments.map((comment) => {
    const { snippet, replies } = comment;
    const { topLevelComment, totalReplyCount } = snippet;

    return (<div key={comment.etag} className="my-4">
      <Comment info={topLevelComment} size={'10'} />

      {replies &&
        (<button className="ml-14 font-semibold text-blue-600 hover:bg-blue-100 py-1 px-4 rounded-2xl"
          onMouseDown={() => toggleReplies(comment.etag)} >⬇️ {totalReplyCount} {totalReplyCount > 1 ? 'replies' : 'reply'}</button>)}

      {openReplies[comment.etag] && (<div className="ml-14 border-l-2 border-l-gray-300 pl-3">
        {replies && replies.comments.map(reply => <Comment key={reply.etag} info={reply} size={'6'} />)}
      </div>)}

    </div>)
  })

}

export default CommentContainer
