import { Posts, Users } from "../../dummyData"
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />

        {
          Posts.map((post) => {
            const user = Users.filter((user) => user.id === post.userId )[0]
            
            return (
              <Post
              key={post.id}
              username={user.username}
              userImage={user.profilePicture}
              minAgo={post.date}
              postText={post.desc}
              postImg={post.photo}
              likeCount={post.like}
              commentCount={post.comment}
            />
            )
          }
            
          )
        }

        {/* <Post
          username="Isabella"
          userImage="/assets/person/1.jpeg"
          minAgo={5}
          postText="Hey! its my first train journey:)"
          postImg="/assets/post/1.jpeg"
          likeCount={82}
          commentCount={9}
        /> */}
      </div>
    </div>
  )
}
