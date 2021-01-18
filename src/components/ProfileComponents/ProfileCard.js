import React from 'react';
import ProfileWrapper, {
  Profile,
  ProfilePic,
  ProfileHeader,
  ProfileSubHeader,
} from './ProfileStyles';
import Me from '../../assets/me.jpeg';

const ProfileCard = () => {
  return (
    <ProfileWrapper>
      <Profile>
        <ProfilePic src={Me} alt="Corey distracted" />
        <ProfileHeader>Corey Lynch</ProfileHeader>
        <ProfileSubHeader>Full-stack Developer from New York</ProfileSubHeader>
      </Profile>
    </ProfileWrapper>
  );
};

export default ProfileCard;
