import styled from 'styled-components';

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 0 0;
`;

const Profile = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: inset 0 0 10px #000000;
  border-radius: 5px;
  text-align: center;
  color: rgb(12, 199, 89);
  width: 50vw;
  min-height: 90vh;
  padding: 30px 40px;
`;

const ProfilePic = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 150px;
  box-shadow: 0 0 5px #000000;
  margin: auto;
`;

const ProfileHeader = styled.p`
  font-size: 80px;
  font-weight: 300;
  margin: 0;
`;

const ProfileSubHeader = styled.p`
  font-size: 30px;
  font-weight: 300;
  color: rgb(252, 186, 71);
`;

export default ProfileWrapper;
export { Profile, ProfilePic, ProfileHeader, ProfileSubHeader };
