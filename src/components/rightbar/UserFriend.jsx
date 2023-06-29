
export default function UserFriend(props){
    return (

        <div className="rightbarFollowing">
            <img src={props.profileImage} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">{props.username}</span>
        </div>
    )
}