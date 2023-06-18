import "./post.css"
import { MoreVert } from "@mui/icons-material"


export default function Post(props) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src={props.userImage} alt="" className="postProfileImg" />
                <span className="postUsername">{props.username}</span>
                <span className="postDate">{props.minAgo} mins ago</span>
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
                <img src="assets/like.png" alt="" className="likeIcon" />
                <img src="assets/heart.png" alt="" className="likeIcon" />
                <span className="postLikeCounter">{props.likeCount} people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{props.commentCount} comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
