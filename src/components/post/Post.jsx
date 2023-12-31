import { useContext, useEffect, useState } from "react"
import "./post.css"
import { MoreVert } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios";

export default function Post(props) {

  const [like, setLike] = useState(props.likeCount)
  const [isLiked, setIsLiked] = useState(false)

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext)
  
  useEffect(() => {
    setIsLiked(props.likes.includes(user._id))
  }, [props.likes, user._id])

  const likeHandler = () => {

    try {
      axios.put("/posts/"+props._id+"/like", {userId: user._id});
    } catch (err) {
      console.log(err)
    }

    setLike(isLiked? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
              <Link to={'profile/'+props.username}>
                <img src={props.userImage || PF + "/person/sample_profile.jpg"} alt="" className="postProfileImg" />
              </Link>
              
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
