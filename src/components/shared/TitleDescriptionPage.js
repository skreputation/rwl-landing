/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { GridPattern } from '../../assets';
import useWindowSize from '../../hooks/useWindowSize';
import CustomDivider from './CustomDivider';
import Label from './Label';

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
    color: inherit;
    height: fit-content;
  }
`;

const TitleContainer = styled.div`
  flex: 1;
  width: -webkit-fill-available;
  width: -moz-available;
  align-self: flex-start;
  padding: 48px 168px;
  max-width: inherit;
  justify-content: space-between;
  display: flex;

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) and (min-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 32px 64px;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel}px`}) {
    padding: 32px 24px;
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const GridContainer = styled.div`
  position: absolute;
  right: 0px;
  svg {
    width: 200px;
    height: 100px;
  }
`;

const Item = styled.a`
  .underline {
    width: ${({ isHover }) => (isHover ? '100%' : 0)};
    transition: width 0.3s;
    background: ${({ theme: { colors } }) => colors.primaryColor};
    height: 3px;
  }

  .is-underlined {
    width: 100%;
    background: ${({ theme: { colors } }) => colors.primaryColor};
    height: 3px;
  }
`;

const TitleDescriptionPage = ({ supTitle, title, withGrid, withoutBorderBottom, withButtons, color }) => {
  const [_, height] = useWindowSize();
  const [isHover, setIsHover] = useState(false);

  const [activeSectionId, setActiveSectionId] = useState('overview');

  const setActiveSection = () => {
    const { top: overviewTop, bottom: overviewBottom } = document.getElementById('overview').getBoundingClientRect();
    if (overviewTop < height || overviewBottom < height) {
      setActiveSectionId('overview');
    }

    const { top: pricingTop, bottom: pricingBottom } = document.getElementById('pricing').getBoundingClientRect();
    if (pricingTop < height || pricingBottom < height) {
      setActiveSectionId('pricing');
    }
  };

  useEffect(() => {
    if (withButtons) {
      document.addEventListener('scroll', setActiveSection);
    }
  }, [withButtons]);
  return (
    <MainContainer>
      <TitleContainer>
        <Row>
          <Label color={color} fontFamily="light" size="medium" className="uppercase w-100">
            {supTitle}
          </Label>

          {withButtons && (
            <Row style={{ columnGap: 30, justifyContent: 'flex-end' }}>
              <Item
                href="#overview"
                isHover={isHover === 'overview'}
                onClick={() => setActiveSectionId('overview')}
                onMouseOver={() => setIsHover('overview')}
                onMouseLeave={() => setIsHover(null)}
              >
                <Label size="normal" fontFamily={activeSectionId === 'overview' ? 'bold' : 'regular'} className="cursor">
                  overview
                </Label>
                <div className={activeSectionId === 'overview' ? 'is-underlined' : 'underline'} />
              </Item>
              <Item
                href="#pricing"
                isHover={isHover === 'pricing'}
                onClick={() => setActiveSectionId('pricing')}
                onMouseOver={() => setIsHover('pricing')}
                onMouseLeave={() => setIsHover(null)}
              >
                <Label size="normal" fontFamily={activeSectionId === 'pricing' ? 'bold' : 'regular'} className="cursor">
                  pricing
                </Label>
                <div className={activeSectionId === 'pricing' ? 'is-underlined' : 'underline'} />
              </Item>
            </Row>
          )}
        </Row>
        <Label color={color} size="huge" fontFamily="bold" className="w-100 uppercase">
          {title}
        </Label>
        {withGrid && (
          <GridContainer className="mobile-none">
            <GridPattern />
          </GridContainer>
        )}
      </TitleContainer>
      {!withoutBorderBottom && <CustomDivider red color={color} />}
    </MainContainer>
  );
};

export default TitleDescriptionPage;
