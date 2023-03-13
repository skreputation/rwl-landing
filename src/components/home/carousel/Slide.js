import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { MAIN_MAIL } from '../../../constants/contacts';
import { IFrameSiderContext } from '../../../context/IFrameSiderContext';
import CustomButton from '../../shared/CustomButton';
import Label from '../../shared/Label';

const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0px 32px;
  margin: 0px 72px;
  height: min-content;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    flex-flow: column-reverse;
    padding: 0px;
  }
`;

const LeftSlideContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  max-height: 450px;
  min-height: 350px;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    justify-content: flex-start;
    width: 100%;
    & > *:first-child {
      margin-bottom: 16px;
    }
    button {
      align-self: center;
    }
  }
`;
const RightSlideContainer = styled.div`
  svg {
    width: 100%;
    height: 100%;
  }
  img {
    height: 750px;
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
      height: 220px;
    }
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
      height: 200px;
    }
  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;
  max-width: fit-content;
  button {
    max-width: 200px;
  }
`;

const Slide = ({ title, subtitle, description, image }) => {
  const { onOpen } = useContext(IFrameSiderContext);
  return (
    <SlideContainer className="swiper-slide w-full">
      <LeftSlideContainer className="h-full max-w-full">
        <TitleContainer>
          <Label fontFamily="bold" fontSize={32}>
            {title}
          </Label>
          <Label fontFamily="regular" fontSize={24}>
            {subtitle}
          </Label>
        </TitleContainer>
        <ContentContainer>
          <Label className="line-height">{description}</Label>
          <CustomButton
            buttonStyle={{ width: 140, justifyContent: 'center', display: 'flex' }}
            onClick={() => window.open(`mailto:${MAIN_MAIL}`, '_blank')}
          >
            request-a-demo
          </CustomButton>
        </ContentContainer>
      </LeftSlideContainer>
      <RightSlideContainer>{image}</RightSlideContainer>
    </SlideContainer>
  );
};

export default Slide;
