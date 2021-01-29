import React from 'react';
import Bar, {
  LinkedInIcon,
  GithubIcon,
  InstagramIcon,
  MediumSquareIcon,
} from './IconStyles';

const IconBar = () => {
  return (
    <>
      <Bar>
        <a href="https://www.linkedin.com/in/corey-james-lynch/">
          <LinkedInIcon />
        </a>
        <a href="https://www.instagram.com/bearinawolfpack/">
          <GithubIcon />
        </a>
        <a href="https://twitter.com/CoreyJamesLynch">
          <InstagramIcon />
        </a>
        <a href="https://github.com/CoreyJamesLynch">
          <MediumSquareIcon />
        </a>
      </Bar>
    </>
  );
};

export default IconBar;
