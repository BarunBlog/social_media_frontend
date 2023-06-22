import React from 'react'

export default function CloseFriends(props) {
  return (
    <ul className="sidebarFriendList">
        <li className="sidebarFriend">
        <img src={props.profilePicture} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{props.username}</span>
        </li>
    </ul>
  )
}
