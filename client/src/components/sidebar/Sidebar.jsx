import { Bookmark, Chat, Event, HelpOutline, PeopleAlt, RssFeed, School, Videocam, WorkOutline } from '@material-ui/icons'
import React from 'react'
import './sidebar.css'
import CloseFriend from './../closeFriend/CloseFriend'
import {Users} from './../../dummyData'
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">
                            Feeds
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                    <span className="sidebarListItemText">
                            Chat
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Videocam className="sidebarIcon"/>
                    <span className="sidebarListItemText">
                            Videos
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <PeopleAlt className="sidebarIcon"/>
                    <span className="sidebarListItemText">
                            Groups
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"/>
                    <span className="sidebarListItemText">
                            Bookmarks
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon"/>
                    <span className="sidebarListItemText">
                            Questions
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                    <span className="sidebarListItemText">
                          Event
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon"/>
                    <span className="sidebarListItemText">
                         jobs
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon"/>
                    <span className="sidebarListItemText">
                            Courses
                        </span>
                    </li>
                </ul>
               <button className="sidebarButton">Show More</button>
               <hr className="sidebarHr"/>
               <ul className="sidebarFriendList">
                  {Users.map(u=>(
                      <CloseFriend key={u.id} user={u}/>
                  ))}
               </ul>
            </div>
        </div>
    )
}
