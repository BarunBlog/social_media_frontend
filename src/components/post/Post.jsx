import { useState } from "react"
import "./post.css"
import { MoreVert } from "@mui/icons-material"


export default function Post(props) {

  const [like, setLike] = useState(props.likeCount)
  const [isLiked, setIsLiked] = useState(false)

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = () => {
    setLike(isLiked? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src={props.userImage} alt="" className="postProfileImg" />
                <span className="postUsername">{props.username}</span>
                <span className="postDate">{props.minAgo}</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{props.postText}</span>
            <img src={props.postImg} alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src={PF+"/like.png"} alt="" className="likeIcon" onClick={likeHandler}/>
                <img src={PF+"/heart.png"} alt="" className="likeIcon" onClick={likeHandler}/>
                <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{props.commentCount} comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
