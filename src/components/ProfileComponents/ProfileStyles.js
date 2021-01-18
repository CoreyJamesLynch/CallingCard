import styled from 'styled-components';

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const Profile = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 10px #000000;
  border-radius: 5px;
  text-align: center;
  color: rgb(171, 217, 190);
  width: 50vw;
  min-height: 100vh;
  padding: 30px 40px;
`;
export default ProfileWrapper;
export { Profile };
