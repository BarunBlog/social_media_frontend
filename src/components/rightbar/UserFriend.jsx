
export default function UserFriend(props){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (

        <div className="rightbarFollowing">
            <img src={props.profileImage || PF+"/person/sample_profile.jpg"} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">{props.username}</span>
        </div>
    )
}