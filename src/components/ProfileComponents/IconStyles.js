import styled from 'styled-components';
import { Linkedin } from '@styled-icons/bootstrap/Linkedin';
import { Github } from '@styled-icons/bootstrap/Github';
import { Instagram } from '@styled-icons/bootstrap/Instagram';
import { Facebook } from '@styled-icons/entypo-social/';

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 45vw;
  height: 60px;
  margin: 55px 0 0 0;
  border-radius: 25px;
  background: rgb(46, 54, 48);
  box-shadow: 0 0 10px #000000;
`;

const LinkedInIcon = styled(Linkedin)`
  color: Green;
  height: 55px;
  width: 55px;
`;

const GithubIcon = styled(Github)`
  color: Green;
  height: 55px;
  width: 55px;
`;

const InstagramIcon = styled(Instagram)`
  color: Green;
  height: 55px;
  width: 55px;
`;

const FacebookIcon = styled(Facebook)`
  color: Green;
  height: 55px;
  width: 55px;
`;

export default Bar;
export { LinkedInIcon, GithubIcon, InstagramIcon, FacebookIcon };
