import React from 'react'

export default function CloseFriend({user}) {
    return (
        <li className="sidebarFriend">
                       <img className="sidebarFriendImg" src={user.profilePicture} alt="firendImg" />
                       <span className="sidebarFirendName">{user.username}</span>
        </li>
    )
}
