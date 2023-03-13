import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { ArrowDownIcon } from '../../../assets';
import { languageConfig, LanguageContext } from '../../../context/LanguageContext';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import { capitalizeFirstLetter, translate } from '../../../translator';
import Label from '../../shared/Label';

const Container = styled.div`
  border-radius: 24px;
  border: 1px solid #fff;
  padding: 7px 16px;
  height: fit-content;
  position: relative;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    margin-left: 16px;
    font-size: 12px;
  }
`;

const FloatingMenu = styled.div`
  padding: 10px 0px;
  border-radius: 4px;
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.16);
  position: absolute;
  background-color: #fff;
  top: 48px;
  left: 0px;
  width: 100%;
  & > div:not(:last-child) {
    margin-bottom: 20px;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    width: unset;
    padding: 10px;
    right: 0px;
    left: unset;
  }
`;
const Item = styled.div`
  padding-left: 8px;
  cursor: pointer;
  display: flex;
  & > *:first-child {
    margin-right: 8px;
  }
`;

const LanguageContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  position: relative;

  .dropdown-arrow path {
    fill: ${({ color }) => color || '#ffffff'};
  }
`;

const LanguageSwitcher = ({ className }) => {
  const ref = useRef();

  const [showFloatingMenu, setShowFloatingMenu] = useState(false);
  useOnClickOutside(ref, () => setShowFloatingMenu(false));

  const { language, setLanguage } = useContext(LanguageContext);

  const onContainerClick = () => {
    setShowFloatingMenu((prev) => !prev);
  };

  return (
    <Container ref={ref} className={className}>
      <LanguageContainer onClick={onContainerClick}>
        {languageConfig[language].flag}
        <Label
          color="#fff"
          translate={false}
          fontSize={14}
          fontFamily="regular"
          className="uppercase mobile-none"
          style={{ minWidth: 32, marginLeft: 10 }}
        >
          {languageConfig[language].languageKey}
        </Label>
        <ArrowDownIcon className="dropdown-arrow" style={{ marginLeft: 10, transform: showFloatingMenu ? 'rotate(-180deg)' : 'rotate(0deg)' }} />
      </LanguageContainer>
      {showFloatingMenu && (
        <FloatingMenu>
          {Object.keys(languageConfig).map((key, index) => (
            <Item
              key={index}
              onClick={() => {
                setLanguage(languageConfig[key].languageKey);
                setShowFloatingMenu(false);
              }}
            >
              {languageConfig[key].flag} {capitalizeFirstLetter(translate(languageConfig[key].label, language))}
            </Item>
          ))}
        </FloatingMenu>
      )}
    </Container>
  );
};

export default LanguageSwitcher;
