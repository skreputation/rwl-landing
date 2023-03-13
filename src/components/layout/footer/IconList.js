import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { LinkedinIcon, GithubIcon, TwitterIcon, YoutubeIcon, FacebookIcon, InstagramIcon } from '../../../assets';
import { LanguageContext } from '../../../context/LanguageContext';

const IconListContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  & > *:not(:last-child) {
    margin-right: 10px;
  }

  svg {
    cursor: pointer;
    width: 40px;
    height: 40px;
    path {
      fill: ${({ isInverted, theme: { colors } }) => (!isInverted ? colors.white : colors.primaryColor)};
    }
  }
`;

const IconItem = styled.div`
  display: flex;
  align-items: center;
`;

const IconList = ({ isInverted }) => {
  const { language } = useContext(LanguageContext);
  /// ADD-LINKS
  const socialLinks = {
    TWITTER: {
      icon: <TwitterIcon />,
      itLink: 'https://twitter.com/Italia_Quadro',
      usLink: 'https://twitter.com/USA_Quadro'
    },
    FACEBOOK: {
      icon: <FacebookIcon />,
      itLink: 'https://www.facebook.com/redwinglabs/',
      usLink: 'https://www.facebook.com/redwinglabs/'
    },
    INSTAGRAM: {
      icon: <InstagramIcon />,
      itLink: 'https://www.instagram.com/italia_quadro/',
      usLink: 'https://www.instagram.com/usa_quadro/'
    },
    GITHUB: {
      icon: <GithubIcon />,
      itLink: 'https://github.com/redwinglabs-team',
      usLink: 'https://github.com/redwinglabs-team'
    },
    YOUTUBE: {
      icon: <YoutubeIcon />,
      itLink: 'https://www.youtube.com/channel/UCvyijjNa0s_y7tvpCy7fZCA',
      usLink: 'https://www.youtube.com/channel/UCvyijjNa0s_y7tvpCy7fZCA'
    },
    LINKEDIN: {
      icon: <LinkedinIcon />,
      itLink: 'https://www.linkedin.com/company/redwing-labs/',
      usLink: 'https://www.linkedin.com/company/redwing-labs/'
    }
  };
  return (
    <IconListContainer isInverted={isInverted}>
      {Object.values(socialLinks).map((social, index) => (
        <IconItem
          key={index}
          onClick={() => {
            window.open(language.toUpperCase() === 'IT' ? social.itLink : social.usLink, '_blank', 'noopener,noreferrer');
          }}
        >
          {social.icon}
        </IconItem>
      ))}
    </IconListContainer>
  );
};

export default IconList;
