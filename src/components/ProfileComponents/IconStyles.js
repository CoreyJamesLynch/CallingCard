import styled from 'styled-components';
import { Linkedin } from '@styled-icons/bootstrap/Linkedin';
import { Github } from '@styled-icons/bootstrap/Github';
import { Instagram } from '@styled-icons/bootstrap/Instagram';
import { MediumSquare } from '@styled-icons/boxicons-logos/MediumSquare';

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 45vw;
  height: 60px;
  margin: 55px 0 0 0;
  border-radius: 25px;
`;

const LinkedInIcon = styled(Linkedin)`
  color: #0072b1;
  height: 55px;
  width: 55px;
`;

const GithubIcon = styled(Github)`
  color: #fff;
  height: 55px;
  width: 55px;
`;

const InstagramIcon = styled(Instagram)`
  color: rgb(46, 54, 48);
  border-radius: 25px;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  height: 55px;
  width: 55px;
`;

const MediumSquareIcon = styled(MediumSquare)`
  color: #fff;
  height: 55px;
  width: 55px;
`;

export default Bar;
export { LinkedInIcon, GithubIcon, InstagramIcon, MediumSquareIcon };
