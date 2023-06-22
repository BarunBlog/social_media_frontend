import OnlineFriend from "./OnlineFriend"
import "./rightbar.css"
import { Users } from "../../dummyData"

export default function Rightbar() {

  const onlineFriends = Users.map((user) =>
      < OnlineFriend
        key={user.id}
        profileImage={user.profilePicture}
        username={user.username}
      />
  )

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
        
        
        {onlineFriends}
        
      </div>
    </div>
  )
}
