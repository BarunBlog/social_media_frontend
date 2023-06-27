import OnlineFriend from "./OnlineFriend"
import "./rightbar.css"
import { Users } from "../../dummyData"

export default function Rightbar(props) {

  console.log(props);

  const onlineFriends = Users.map((user) =>
      < OnlineFriend
        key={user.id}
        profileImage={user.profilePicture}
        username={user.username}
      />
  )

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Mila Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        
        
        {onlineFriends}
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Fom:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>

          <h4 className="rightbarTitle">User frinds</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>

            <div className="rightbarFollowing">
              <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>

            <div className="rightbarFollowing">
              <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>

            <div className="rightbarFollowing">
              <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>

            <div className="rightbarFollowing">
              <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>

            <div className="rightbarFollowing">
              <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>

            <div className="rightbarFollowing">
              <img src="assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {props.isProfile ? <ProfileRightbar /> : <HomeRightbar />}
       
        
      </div>
    </div>
  )
}
