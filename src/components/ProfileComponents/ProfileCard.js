import React from 'react';
import ProfileWrapper, { Profile, ProfilePic } from './ProfileStyles';
import Me from '../../assets/me.jpeg';

const ProfileCard = () => {
  return (
    <ProfileWrapper>
      <Profile>
        <ProfilePic src={Me} alt="Corey distracted" />
        <h1>Corey Lynch</h1>
      </Profile>
    </ProfileWrapper>
  );
};

export default ProfileCard;
