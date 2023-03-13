import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { MAIN_MAIL } from '../../constants/contacts';
import { IFrameSiderContext } from '../../context/IFrameSiderContext';
import CustomButton from '../shared/CustomButton';
import Label from '../shared/Label';

const MainContainerPartnersForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 0px;
  width: -webkit-fill-available;
  width: -moz-available;
  max-width: inherit;

  padding: 48px 170px;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) and (min-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 24px 64px;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel}px`}) {
    padding: 24px;
    padding-top: 48px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  & > *:not(:last-child) {
    margin-right: 32px;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: 32px;
      margin-right: 0px;
    }
  }
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 32px;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: -webkit-fill-available;
  width: -moz-available;
  margin-bottom: 32px;
`;

const PartnersForm = () => {
  const { onOpen } = useContext(IFrameSiderContext);
  return (
    <MainContainerPartnersForm>
      <TitleContainer>
        <Label fontFamily="bold" fontSize={32}>
          interested-in
        </Label>
        <Label fontSize={32}>joining-forces</Label>
      </TitleContainer>
      <Content>
        <TextContainer>
          <Label className="line-height">partners-description-1</Label>
          <Label className="line-height">partners-description-2</Label>
          <Label className="line-height">partners-description-3</Label>
          <Label className="line-height">partners-description-4</Label>
        </TextContainer>
      </Content>

      <CustomButton
        fontSize={24}
        buttonStyle={{ marginTop: 88, marginBottom: 88, width: 300, justifyContent: 'center', display: 'flex' }}
        onClick={() => window.open(`mailto:${MAIN_MAIL}`, '_blank')}
      >
        contact-us
      </CustomButton>
    </MainContainerPartnersForm>
  );
};

export default PartnersForm;
