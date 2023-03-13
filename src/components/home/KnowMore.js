import React from 'react';
import styled from 'styled-components/macro';
import { Container } from '../shared/Containers';
import Label from '../shared/Label';

const KnowMoreContainer = styled(Container)`
  background-color: ${({ theme: { colors } }) => colors.primaryColor};
  color: ${({ theme: { colors } }) => colors.white};
  width: -webkit-fill-available;
  width: -moz-available;
  height: fit-content;
  margin-top: 88px;
  padding: 48px 170px;
  & > span {
    text-align: center !important;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 24px;
  }
`;

const KnowMore = () => {
  return (
    <KnowMoreContainer>
      <Label size="medium" className="uppercase w-unset">
        want-to
      </Label>
      <Label size="huge" fontFamily="bold" className="uppercase w-unset">
        know-more
      </Label>
      <Label className="uppercase line-height">want-to-know-more-description</Label>
    </KnowMoreContainer>
  );
};

export default KnowMore;
