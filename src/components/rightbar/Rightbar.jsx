import OnlineFriend from "./OnlineFriend"
import "./rightbar.css"
import { Users } from "../../dummyData"
import UserFriend from "./UserFriend";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@mui/icons-material";

export default function Rightbar(props) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user: currentuser} = useContext(AuthContext)

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
          <img src={PF+"/gift.png"} alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Mila Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        
        <img src={PF+"/ad.png"} alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        
        
        {onlineFriends}
      </>
    )
  }

  const ProfileRightbar = ({user}) => {

    const [friends, setFriends] = useState([])
    const [followed, setFollowed] = useState(false)

    useEffect(() => {
      setFollowed(currentuser.followings.includes(user?._id))
    }, [user._id])

    useEffect(() => {
      const getFriends = async () => {
        try{
          const res = await axios.get("/user/friends/"+user._id)
          setFriends(res.data);
        } catch (err){
          console.log(err);
        }
      }

      getFriends()
    }, [user._id])

    const userFriends = friends.map((friend) =>
      <Link to={"/profile/"+friend.username} style={{textDecoration: "none", color: "black"}}>
        <UserFriend
          key={friend._id}
          profileImage={friend.profilePicture}
          username={friend.username}
        />
      </Link>
    )

    const handleClick = async () => {
      try{
        if(followed){
          await axios.put("/user/"+user._id+"/unfollow", {
            userId: currentuser._id
          });
        } else {
          await axios.put("/user/"+user._id+"/follow", {
            userId: currentuser._id
          });
        }
      }catch (err) {
        console.log(err);
      }

      setFollowed(!followed)
    }


    return (
      <>
        {user.username !== currentuser.username && (
            <button className="rightbarFollowButton" onClick={handleClick}>
              {followed ? "Unfollow" : "Follow"}
              {followed ? <Remove /> :<Add />}
            </button>
        )}

        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">{user.relationship}</span>
          </div>

          <h4 className="rightbarTitle">User frinds</h4>
          <div className="rightbarFollowings">

            {userFriends}

          </div>
        </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {props.isProfile ? <ProfileRightbar user={props.userData} /> : <HomeRightbar />}
       
        
      </div>
    </div>
  )
}
