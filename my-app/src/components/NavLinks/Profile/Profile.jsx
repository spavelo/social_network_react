import React from 'react'
import './Profile.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    // debugger
    return (
        <div className="profile">
            <ProfileInfo profile={props.profile}
                        status={props.status}
                         updateStatus={props.updateStatus}

            />
            <MyPostsContainer />
        </div>
    )
}

export default Profile