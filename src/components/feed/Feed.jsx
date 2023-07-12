import { useContext, useEffect, useState } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import axios from "axios";
import TimeAgo from 'timeago-react';
import { AuthContext } from "../../context/AuthContext";

export default function Feed(props) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext)

  useEffect(() => {

    const fetchNewsfeedData = async () => {
      const res = await axios.get("/posts/newsfeed/"+user._id)
      console.log(res.data);
      setPosts(res.data)
    }

    const fetchTimelineData = async (username) => {
      const res = await axios.get("/posts/timeline/"+username)
      console.log(res.data);
      setPosts(res.data)
    }
    
    if(props.isTimeLine){
      fetchTimelineData(props.username)
    } else {
      fetchNewsfeedData()
    }
    
  }, [props.isTimeLine, props.username, user._id])


  const addPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share onSharePost={addPost}/>

        {
          posts.map((post) => 
            <Post
              key={post._id}
              _id={post._id}
              username={post.userId.username}
              userImage={post.userId.profilePicture}
              minAgo={<TimeAgo datetime={post.createdAt} locale="en_US" />}
              postText={post.desc}
              postImg={post.img}
              likes={post.likes}
              likeCount={post.likes.length}
              commentCount={post.comment}
            />
          )
        }

      </div>
    </div>
  )
}
