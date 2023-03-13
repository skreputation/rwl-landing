import React from 'react';
import styled from 'styled-components/macro';
import mapImage from '../../assets/images/redwinglabs-map.png';

const MainContainerMap = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  padding: 24px 170px 48px;
  width: -webkit-fill-available;
  width: -moz-available;
  z-index: 1;

  max-width: inherit;
  img {
    width: -webkit-fill-available;
    width: -moz-available;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 32px;
  }
`;

const Map = () => {
  return (
    <MainContainerMap>
      <img src={mapImage} alt="map" />
    </MainContainerMap>
  );
};

export default Map;
