import React from 'react';
import styled from 'styled-components/macro';
import Label from '../shared/Label';

const OverviewContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lightGreyBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 48px 0px;
  margin-right: auto;
  margin-left: auto;
  padding: 48px 170px;
  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
  max-width: inherit;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) and (min-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    flex-direction: column;
    padding: 32px 64px;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 32px;
  }
`;

const Overview = ({ title, description }) => {
  return (
    <OverviewContainer id="overview" style={{ scrollMarginTop: 80 }}>
      <Label className="w-100" fontFamily="bold" fontSize={32}>
        overview
      </Label>
      <Label className="w-100" fontSize={24}>
        {title}
      </Label>
      {description && (
        <Label className="w-100" fontSize={24}>
          {description}
        </Label>
      )}
    </OverviewContainer>
  );
};

export default Overview;
