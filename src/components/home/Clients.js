import React from 'react';
import styled from 'styled-components/macro';
import { Container } from '../shared/Containers';
import borgoImage from '../../assets/images/home/Borgo Egnazia.png';
import ciminoImage from '../../assets/images/home/Masseria Cimino.png';
import carrubeImage from '../../assets/images/home/Masseria Le Carrube.png';
import sandomenicoImage from '../../assets/images/home/Masseria San Domenico.png';
import golfImage from '../../assets/images/home/San Domenico Golf.png';
import houseImage from '../../assets/images/home/San Domenico House.png';
import dellenImage from '../../assets/images/home/De Len.png';
import { theme } from '../../styles/theme';
import Label from '../shared/Label';

const ClientsContainer = styled(Container)`
  background-color: ${({ theme: { colors } }) => colors.lightGreyBackground};
  padding: 48px 106px;
  z-index: 1;
  height: min-content;
  width: -webkit-fill-available;
  width: -moz-available;
  position: relative;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) and (min-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 24px 64px;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 24px;
  }
`;
const ClientsTextContainer = styled(Container)`
  margin: 32px;
  margin-top: 0px;
  height: min-content;
  & > div:not(:last-child) {
    margin-bottom: 32px !important;
  }

  .description-clients {
    display: flex;
    margin: 0px 48px;
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
      margin: 0px 16px;
    }
  }
`;

const ClientListContainer = styled(Container)`
  height: fit-content;
  flex-direction: row;
  justify-content: space-around;
  /* border-top: 2px solid ${({ theme: { colors } }) => colors.grey}; */
  & > div:not(:last-child) {
    margin-right: 16px;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    display: flex !important;
    flex-flow: column;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
    display: grid;
    grid-template-columns: min-content min-content;
  }
`;

const TitleContainer = styled(Container)`
  min-height: 110px;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  flex-direction: row;
  font-size: 48px;
  margin: 0px;
  flex-wrap: wrap;
  position: relative;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    background-size: cover;
  }
`;

const Divider = styled.hr``;

const Clients = () => {
  return (
    <ClientsContainer>
      <ClientsTextContainer>
        <TitleContainer>
          <Label className="uppercase w-unset">our</Label>&nbsp;
          <Label fontFamily="bold" className="uppercase w-unset">
            clients
          </Label>
          <div className="desktop-only" style={{ position: 'absolute', display: 'flex' }}>
            <Label fontSize={132} color="#2323231a" className="uppercase w-unset">
              our
            </Label>
            &nbsp;
            <Label fontFamily="bold" fontSize={132} color="#2323231a" className="uppercase w-unset">
              clients
            </Label>
          </div>
        </TitleContainer>

        <div className="description-clients">
          <Label fontSize={24} className="text-center">
            our-clients-description
          </Label>
        </div>
      </ClientsTextContainer>
      <Divider
        style={{
          width: '100%',
          backgroundColor: theme.colors.grey,
          height: 0.5
        }}
      />
      <ClientListContainer>
        <img src={borgoImage} alt="borgo-egnazia" />
        <img src={ciminoImage} alt="masseria-cimino" />
        <img src={sandomenicoImage} alt="masseria-san-domenico" />
        <img src={houseImage} alt="san-domenico-house" />
        <img src={golfImage} alt="san-domenico-golf" />
        <img width={138} height={138} src={dellenImage} alt="hotel-de-len" />
        <img src={carrubeImage} alt="masseria-le-carrube" />
      </ClientListContainer>
    </ClientsContainer>
  );
};

export default Clients;
