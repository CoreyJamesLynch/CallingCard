import React from 'react';
import me from '../../assets/me.jpeg';
import ProfileWrapper, {
  Profile,
  ProfilePic,
  ProfileHeader,
  ProfileSubHeader,
} from './ProfileStyles';

import IconBar from './IconBar';

const ProfileCard = () => {
  return (
    <ProfileWrapper>
      <Profile>
        <ProfilePic src={me} alt="Corey distracted" />
        <ProfileHeader>Corey Lynch</ProfileHeader>
        <ProfileSubHeader>Full-stack Developer from New York</ProfileSubHeader>
        <IconBar />
      </Profile>
    </ProfileWrapper>
  );
};

export default ProfileCard;
