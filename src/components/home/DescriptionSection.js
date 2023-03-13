import React from 'react';
import styled from 'styled-components/macro';
import { GridPattern } from '../../assets';
import { Container } from '../shared/Containers';
import Label, { AlternateFontFamilyLabel } from '../shared/Label';

const DescriptionSectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: column;
  padding: 88px 170px;
  flex-direction: row;
  width: fit-content;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) and (min-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 32px 64px;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel}px`}) {
    flex-flow: column;
    padding: 24px;
    max-height: none;
  }
`;
const LeftContainer = styled.div`
  position: relative;
  background-color: ${({ theme: { colors } }) => colors.lightGreyBackground};
  margin-right: 64px;
  max-width: 300px;
  padding: 24px;
  & > span {
    height: 100%;
    display: flex;
    align-items: center;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    margin: 24px 0px;
    align-self: center;
    max-width: 100%;
  }
`;
const RightContainer = styled(Container)`
  margin: 16px;
  justify-content: space-between;
  & > div:not(:last-child) {
    margin-bottom: 32px !important;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    justify-content: center;
    height: fit-content;
    margin: 16px 0px;
    & > *:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const GridContainer = styled.div`
  position: absolute;
  left: -102px;
  top: 90%;
  transform: rotate(90deg);
  svg {
    width: 200px;
    height: 100px;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
    left: 0px;
  }
`;

const DescriptionSection = () => {
  return (
    <DescriptionSectionContainer>
      <LeftContainer>
        <Label fontFamily="light" className="text-center" fontSize={24} style={{ lineHeight: '36px' }}>
          building-technology
        </Label>
        <GridContainer className="mobile-none">
          <GridPattern />
        </GridContainer>
      </LeftContainer>
      <RightContainer>
        <Container gap={16}>
          <AlternateFontFamilyLabel>innovative-solutions</AlternateFontFamilyLabel>
          <Label className="line-height">innovative-solutions-description</Label>
        </Container>
        <Container gap={16}>
          {' '}
          <AlternateFontFamilyLabel>cloud-based-and-interconnected</AlternateFontFamilyLabel>
          <Label className="line-height">cloud-based-and-interconnected-description</Label>
        </Container>
        <Container gap={16}>
          <AlternateFontFamilyLabel>solid-foundation</AlternateFontFamilyLabel>
          <Label className="line-height">solid-foundation-description</Label>
        </Container>
      </RightContainer>
    </DescriptionSectionContainer>
  );
};

export default DescriptionSection;
