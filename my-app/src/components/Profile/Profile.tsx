import React, {FC} from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../types/types";
import {ContactsType} from "../../redux/profile-reducer";

type PropsType = {
    authorizedUserId: boolean,
    isOwner: boolean,
    status: string,
    profile: ProfileType,
    savePhotoProfile: (file: File) => void,
    updateStatusProfile: (status: string) => void,
    saveProfileInfo: (profile: ProfileType) => Promise<any>,
    aboutMe: string,
    contacts: Array<ContactsType>,
}

const Profile: FC<PropsType> = (props) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo savePhotoProfile={props.savePhotoProfile}
                         authorizedUserId={props.authorizedUserId}
                         isOwner={props.isOwner}
                         status={props.status}
                         profile={props.profile}
                         updateStatusProfile={props.updateStatusProfile}
                         saveProfileInfo={props.saveProfileInfo}
                         aboutMe={props.aboutMe}
                         contacts={props.contacts}
            />
            <MyPostsContainer></MyPostsContainer>
        </div>
    );
}

export default Profile;