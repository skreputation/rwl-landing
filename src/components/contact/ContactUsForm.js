import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { ItalianFlagIcon, GridPattern } from '../../assets';
import { INFO_MAIL, MAIN_MAIL } from '../../constants/contacts';
import { IFrameSiderContext } from '../../context/IFrameSiderContext';
import CustomButton from '../shared/CustomButton';
import Label from '../shared/Label';

const GridContainer = styled.div`
  position: absolute;
  align-items: flex-start;
  left: 0px;
  top: 110px;
  svg {
    width: 200px;
    height: 162px;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
    left: 0px;
  }
`;

const MainContainerContactForm = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  width: -webkit-fill-available;
  width: -moz-available;
  max-width: inherit;
  padding: 48px 170px;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) and (min-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 24px 64px;
    padding-top: 48px;
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
  width: -webkit-fill-available;
  width: -moz-available;
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

const ContactsContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lightGreyBackground};
  width: -webkit-fill-available;
  width: -moz-available;
  padding: 60px 112px;
  display: flex;
  justify-content: space-between;
  align-items: start;

  text-align-last: center;
  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
  @media (max-width: 1300px) {
    padding: 32px;
    flex-direction: column;
  }

  .has-margin {
    margin: 32px 0px 48px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  span:first-child {
    margin-bottom: 24px;
  }
  & > div:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 8px;
  }
`;
const ContactUsForm = () => {
  const { onOpen } = useContext(IFrameSiderContext);
  return (
    <MainContainerContactForm>
      <Content>
        <ContactsContainer>
          <Column>
            <Label size="big" fontFamily="bold">
              offices
            </Label>
            <Row>
              <ItalianFlagIcon /> <Label size="small">Savelletri di Fasano, Apulia.</Label>
            </Row>
          </Column>
          <Column>
            <Label size="big" fontFamily="bold">
              phone
            </Label>
            <Row>
              {' '}
              <ItalianFlagIcon /> <Label size="small">+39 080 482 9200</Label>
            </Row>
            <Row>
              {' '}
              <ItalianFlagIcon /> <Label size="small">+39 346 977 6765</Label>
            </Row>
          </Column>
          <Column>
            <Label size="big" fontFamily="bold">
              email
            </Label>
            <Label translate={false} size="small">
              {INFO_MAIL}
            </Label>
            <Label translate={false} size="small">
              {MAIN_MAIL}
            </Label>
          </Column>
        </ContactsContainer>
      </Content>

      <GridContainer className="desktop-only">
        <GridPattern />
      </GridContainer>
      <CustomButton
        fontSize={24}
        buttonStyle={{ marginTop: 88, marginBottom: 88, width: 300, justifyContent: 'center', display: 'flex' }}
        onClick={() => window.open(`mailto:${MAIN_MAIL}`, '_blank')}
      >
        contact-us
      </CustomButton>
    </MainContainerContactForm>
  );
};

export default ContactUsForm;
