

export default function OnlineFriend(props) {
    return (
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            
            <div className="rightbarProfileImgContainer">
              <img src={props.profileImage} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
          
            <span className="rightbarUsername">{props.username}</span>
          </li>
        </ul>
    )
}