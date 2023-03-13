import React from 'react';
import styled from 'styled-components/macro';
import { QuadroRedLogo } from '../../assets';
import { Container } from '../shared/Containers';
import Label from '../shared/Label';
import TitleDescriptionPage from '../shared/TitleDescriptionPage';

const SecondDescriptionContainer = styled(Container)`
  background: linear-gradient(90deg, #be3144 62%, #232323 62%);
  height: min-content;
  width: -webkit-fill-available;
  width: -moz-available;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 32px 0px;
  }
`;

const Grid = styled(Container)`
  color: ${({ theme: { colors } }) => colors.white};
  margin-top: 48px;
  margin-bottom: 24px;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
    margin-bottom: 0px;
  }
`;
const GridRow = styled(Container)`
  flex-direction: row;
  height: fit-content;
  justify-content: flex-start;
  margin-bottom: 64px;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
    flex-direction: column;
  }
`;

const GridColumn = styled(Container)`
  height: fit-content;
  width: 33%;

  &.first {
    margin-left: 170px;
  }
  &.second {
    margin-left: 48px;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) and (min-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    &.first {
      margin-left: 0px;
    }
    &.second {
      margin-top: 64px;
      margin-left: 0px;
    }
    width: 100%;
    padding: 0px 64px;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel}px`}) {
    margin: 0 24px;

    width: fit-content;
    &.first {
      margin-left: 24px;
    }
    &.second {
      margin-left: 24px;

      margin-top: 64px;
    }
  }
`;
const LogoContainer = styled(Container)`
  height: fit-content;
  background-color: ${({ theme: { colors } }) => colors.white};
  padding: 16px;
  svg {
    width: 150px;
    height: 180px;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 0px;
  }
`;

const SecondDescription = () => {
  return (
    <SecondDescriptionContainer>
      <TitleDescriptionPage color="#ffffff" supTitle="about" title="us" withGrid />

      <Grid>
        <GridRow>
          <GridColumn className="first">
            <Label fontSize={24} fontFamily="bold" className="line-height">
              rwl-description
            </Label>
          </GridColumn>
        </GridRow>
        <GridRow>
          <LogoContainer>
            <QuadroRedLogo />
          </LogoContainer>
          <GridColumn className="second">
            <Label fontSize={24} fontFamily="bold" className="line-height">
              rwl-description-2
            </Label>
          </GridColumn>
          {/* <SvgContainer>
                        <DigitPattern />
                    </SvgContainer> */}
        </GridRow>
      </Grid>
    </SecondDescriptionContainer>
  );
};

export default SecondDescription;
