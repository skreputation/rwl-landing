import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { MAIN_MAIL } from '../../constants/contacts';
import { IFrameSiderContext } from '../../context/IFrameSiderContext';
import Label from './Label';

const IntroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-flow: row;
  background: ${({ theme: { colors } }) => colors.primaryColor};
  color: ${({ theme: { colors } }) => colors.white};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 2500px;
`;

const IntroContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
    flex-direction: column;
    justify-content: ${({ hasImage }) => (hasImage ? 'flex-end' : 'center')};
  }
`;

const TitleContainer = styled.div`
  width: ${({ hasImage }) => (hasImage ? '50%' : '80%')};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 170px;
  max-width: fit-content;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) and (min-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding-left: 64px;
  }

  .nowrap {
    white-space: nowrap;
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
      white-space: normal;
    }
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    width: 100%;
    padding: 24px;
    /* height: 100%; */
  }
`;

const ImageProductContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;

  svg {
    width: 80%;
    height: 80%;
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
      height: 400px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  #bg-quadro-pop {
    right: -370px;
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
      right: 0px;
    }
  }
`;

const DemoButtonContainer = styled.div`
  position: fixed;
  z-index: 2;
  background: ${({ theme: { colors } }) => colors.lightGreen};
  color: ${({ theme: { colors } }) => colors.white};
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  border-radius: 10px 10px 0px 0px;
  left: -180px;
  font-size: 24px;
  height: 84px;
  padding-top: 10px;
  transform: rotate(90deg);
  animation: ${({ pulseDemo }) => (pulseDemo ? 'pulse 0.5s linear' : null)};
  width: 365px;
  display: flex;
  justify-content: center;
  align-self: center;
  cursor: pointer;
  -webkit-box-shadow: 0px 5px 40px 0px #60986d80;
  -moz-box-shadow: 0px 5px 40px 0px #60986d80;
  -o-box-shadow: 0px 5px 40px 0px #60986d80;
  box-shadow: 0px 5px 40px 0px #60986d80;
  span {
    margin-left: 6px;
    text-decoration: underline;
  }
  @keyframes pulse {
    0% {
      transform: rotate(90deg) scale(1);
    }
    50% {
      transform: rotate(90deg) scale(1.1);
    }
    100% {
      transform: rotate(90deg) scale(1);
    }
  }
`;
const IntroPages = ({ bgImage, description, productImage, haveDemoButton, pulseDemo, onAnimationEnd }) => {
  const { onOpen } = useContext(IFrameSiderContext);
  return (
    <IntroContainer id="intro" style={{ backgroundImage: `url(${bgImage})` }}>
      {haveDemoButton && (
        <DemoButtonContainer className="mobile-none" onClick={() => window.open(`mailto:${MAIN_MAIL}`, '_blank')}>
          <Label fontFamily="bold">book-a-demo</Label>
        </DemoButtonContainer>
      )}

      <IntroContent hasImage={productImage}>
        <TitleContainer hasImage={productImage}>
          {description[0] && (
            <Label fontFamily="light" size="medium" className="w-100 uppercase">
              {description[0]}
            </Label>
          )}
          {description[1] && (
            <Label fontFamily="bold" size="huge" className="w-100 uppercase">
              {description[1]}
            </Label>
          )}
          {description[2] && (
            <Label fontFamily="light" size="medium" className="w-100 nowrap uppercase">
              {description[2]}
            </Label>
          )}
        </TitleContainer>
        {productImage && <ImageProductContainer>{productImage}</ImageProductContainer>}
      </IntroContent>
    </IntroContainer>
  );
};

export default IntroPages;
