import OnlineFriend from "./OnlineFriend"
import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Mila Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        
        <OnlineFriend
          profileImage="/assets/person/4.jpeg"
          username="Mila"
        />

        <OnlineFriend
          profileImage="/assets/person/5.jpeg"
          username="Peter mark"
        />

        <OnlineFriend
          profileImage="/assets/person/2.jpeg"
          username="Shake Willium"
        />

        <OnlineFriend
          profileImage="/assets/person/7.jpeg"
          username="John Cenah"
        />

        <OnlineFriend
          profileImage="/assets/person/6.jpeg"
          username="Jenifer Carter"
        />

        <OnlineFriend
          profileImage="/assets/person/1.jpeg"
          username="Ema"
        />

        <OnlineFriend
          profileImage="/assets/person/9.jpeg"
          username="John Carter"
        />
      </div>
    </div>
  )
}
