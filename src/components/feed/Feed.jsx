import { useEffect, useState } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import axios from "axios";
import TimeAgo from 'timeago-react';

export default function Feed(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const fetchNewsfeedData = async () => {
      const res = await axios.get("/posts/newsfeed/6482130ff0018e511ed5e3dc")
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
    
  }, [props.isTimeLine, props.username])

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />

        {
          posts.map((post) => 
            <Post
              key={post._id}
              username={post.userId.username}
              userImage={post.userId.profilePicture}
              minAgo={<TimeAgo datetime={post.createdAt} locale="en_US" />}
              postText={post.desc}
              postImg={post.img}
              likeCount={post.likes.length}
              commentCount={post.comment}
            />
          )
        }

      </div>
    </div>
  )
}
