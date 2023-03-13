/* eslint-disable react/forbid-prop-types */
import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { LanguageContext } from '../../context/LanguageContext';
import useWindowSize from '../../hooks/useWindowSize';
import { capitalizeFirstLetter, translate as translateText } from '../../translator';
import { theme } from '../../styles/theme';

const getConfiguration = (configuration, size, type) => {
  return theme?.[configuration]?.[size]?.[type] || -1;
};

const STYText = styled.span`
  display: flex;

  font-size: ${({ size, fontSize }) => (!fontSize ? getConfiguration('fontSizes', size, 'desktop') : fontSize)}px;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel - 1}px`}) {
    font-size: ${({ size, fontSize }) => (!fontSize ? getConfiguration('fontSizes', size, 'tablet') : fontSize)}px;
  }
  @media (max-width: ${({ theme: { mediaQueries }, mobilePixel }) => (mobilePixel ? `${mobilePixel - 1}px` : `${mediaQueries.mobilePixel - 1}px`)}) {
    font-size: ${({ size, fontSize }) => (!fontSize ? getConfiguration('fontSizes', size, 'mobile') : fontSize)}px;
  }

  z-index: 1;
  &.w-100 {
    width: 100%;
  }
  &.line-height {
    line-height: 1.5;
  }
  &.w-unset {
    width: unset;
  }
  &.fit-content {
    width: fit-content;
  }
  &.uppercase {
    text-transform: uppercase;
  }

  &.capitalize {
    text-transform: capitalize;
  }

  &.text-center {
    text-align: center;
  }
  &.text-left {
    text-align: left;
  }

  &.align-fs {
    align-items: flex-start;
  }

  &.justify-ce {
    justify-content: center;
  }

  &.block {
    display: block;
  }

  &.nowrap {
    white-space: nowrap;
  }
  &.f-wrap {
    flex-wrap: wrap;
  }

  &.pointer {
    cursor: pointer;
  }
  &.margined-label {
    margin-left: auto;
    margin-right: auto;
    padding: 16px 120px;
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
      padding: 24px;
    }
  }
`;

const Label = ({
  id,
  className,
  translate = true,
  children,
  fontFamily = 'light',
  size,
  fontSize,
  color,
  style,
  onClick,
  desktopPixel,
  mobilePixel,
  desktopClassName,
  tabletClassName,
  mobileClassName,
  desktopStyle,
  tabletStyle,
  mobileStyle
}) => {
  const { language } = useContext(LanguageContext);
  const [width] = useWindowSize();

  const getClassName = () => {
    let classname = className;
    if (width >= (desktopPixel || theme.mediaQueries.desktopPixel) && desktopClassName) {
      classname = `${classname} ${desktopClassName} `;
    }
    if (width < (desktopPixel || theme.mediaQueries.desktopPixel) && width >= theme.mediaQueries.mobilePixel && tabletClassName) {
      classname = `${classname} ${tabletClassName} `;
    }
    if (width < (mobilePixel || theme.mediaQueries.mobilePixel) && mobileClassName) {
      classname = `${classname} ${mobileClassName} `;
    }
    return classname;
  };
  return (
    <STYText
      id={id}
      className={getClassName()}
      onClick={onClick}
      fontSize={fontSize}
      size={size}
      style={{
        color,
        fontFamily: theme.fontFamily[fontFamily],
        ...style,
        ...(width >= (desktopPixel || theme.mediaQueries.desktopPixel) && desktopStyle),
        ...(width < (desktopPixel || theme.mediaQueries.desktopPixel) && width >= theme.mediaQueries.mobilePixel && tabletStyle),
        ...(width < (mobilePixel || theme.mediaQueries.mobilePixel) && mobileStyle)
      }}
    >
      {typeof children === 'string' && translate ? capitalizeFirstLetter(translateText(children, language)) : children}
    </STYText>
  );
};

export default Label;

export const AlternateFontFamilyLabel = ({ children }) => {
  const { language } = useContext(LanguageContext);
  const alternateFontWeight = () => {
    const translatedText = translateText(children, language);
    const sp = translatedText.split(' ');

    // eslint-disable-next-line array-callback-return
    const alternateTitle = sp.map((tl, index) => {
      if (tl === '&')
        return (
          <Label key={index} fontFamily="bold" className="capitalize">
            &nbsp;{tl}&nbsp;
          </Label>
        );
      if (sp[index - 1] === '&')
        return (
          <Label key={index} fontFamily="regular" className="capitalize">
            {tl}&nbsp;
          </Label>
        );
      if (index % 2 === 0)
        return (
          <Label key={index} fontFamily="bold" className="capitalize">
            {tl}&nbsp;
          </Label>
        );
      return (
        <Label key={index} fontFamily="regular" className="capitalize">
          {tl}&nbsp;
        </Label>
      );
    });
    return alternateTitle;
  };
  return (
    <Label fontSize={32} className="w-100 f-wrap">
      {alternateFontWeight()}
    </Label>
  );
};
