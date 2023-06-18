import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post
          username="Isabella"
          userImage="/assets/person/1.jpeg"
          minAgo={5}
          postText="Hey! its my first train journey:)"
          postImg="/assets/post/1.jpeg"
          likeCount={82}
          commentCount={9}
        />

        <Post
          username="Tailor"
          userImage="/assets/person/2.jpeg"
          minAgo={50}
          postText="Hey there hope everyone doing great. I tried this new dish today."
          postImg="/assets/post/2.jpeg"
          likeCount={101}
          commentCount={15}
        />


        <Post
          username="Mark"
          userImage="/assets/person/3.jpeg"
          minAgo={40}
          postText="Sometimes you need to go for a long vacation"
          postImg="/assets/post/3.jpeg"
          likeCount={201}
          commentCount={54}
        />



        <Post
          username="Danial"
          userImage="/assets/person/4.jpeg"
          minAgo={10}
          postText="You should take this fruit for a healthy life"
          postImg="/assets/post/4.jpeg"
          likeCount={54}
          commentCount={9}
        />
      </div>
    </div>
  )
}
