import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { matchPathname } from '../../utils/UtilStrings';
import Label from './Label';

const Item = styled.div`
  color: ${({ colorInverted, theme: { colors } }) => (colorInverted ? colors.primaryColor : colors.white)};
  font-size: 14px;
  text-decoration: none;
  text-transform: capitalize;
  background: transparent;
  cursor: pointer;
  font-family: ${({ theme: { fontFamily }, textRegular }) => (textRegular ? fontFamily.regular : fontFamily.bold)};

  .underline {
    width: ${({ isHover }) => (isHover ? '100%' : 0)};
    transition: width 0.3s;
    background: ${({ colorInverted, theme: { colors } }) => (colorInverted ? colors.primaryColor : colors.red)};
    height: 3px;
  }

  .is-underlined {
    width: 100%;
    background: ${({ colorInverted, theme: { colors } }) => (colorInverted ? colors.primaryColor : colors.red)};
    height: 3px;
  }
`;
const HeaderItem = ({ children, style, colorInverted, onClick }) => {
  const [isHover, setIsHover] = useState(false);

  const isActive = () => {
    const { pathname } = window.location;

    return pathname === children.link || (children?.hasChildren && matchPathname(children.link));
  };
  return (
    <Item
      colorInverted={colorInverted}
      isHover={isHover}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={style}
      onClick={onClick}
    >
      <>
        <Label fontFamily={isActive() ? 'bold' : 'regular'} className="nowrap">
          {children.title}
        </Label>
        <div className={isActive() ? 'is-underlined' : 'underline'} />
      </>
    </Item>
  );
};

export default HeaderItem;
