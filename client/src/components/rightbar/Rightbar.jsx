import React from 'react'
import './rightbar.css'
import Online from './../online/Online'
import {Users} from './../../dummyData'
export default function Rightbar({profile}) {

    const HomeRightBar=()=>{
        return(
            <>
             <div className="brithdayContainer">
                   <img className="birthdayImg" src="/assets/gift.png" alt="" />
                   <span className="birthdayText">
                <b>Reham</b> and <b>3 other Firends</b> have their birthday today
                   </span>
               </div>
               <img className="rightbarAd" src="/assets/ad.png" alt="ad" />
               <h4 className="rightbarTitle">Online Friends</h4>
               <ul className="rightbarFriendList">
                   {Users.map(u=>(
                       <Online key={u.id} user={u}/>
                   ))}
               </ul>
            </>
        )
    }
    const ProfileRightBar=()=>{
        return (
            <>
            <h2 className="rightbarTitle">User Information</h2>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">NewYork</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Madrid</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">single</span>
                </div>

            </div>
            <h2 className="rightbarTitle">User Friends</h2>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">
                         jolya carter
                    </span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">
                         jolya carter
                    </span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">
                         jolya carter
                    </span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">
                         jolya carter
                    </span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">
                         jolya carter
                    </span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">
                         jolya carter
                    </span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">
                         jolya carter
                    </span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">
                         jolya carter
                    </span>
                </div>
            </div>

            </>
        )
    }
    return (
        <div className="rightbar">
           <div className="rightbarWrapper">
             {profile? <ProfileRightBar/> :<HomeRightBar/>}
             
           </div>
        </div>
    )
}
