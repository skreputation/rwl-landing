import React from 'react';
import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';
import { RedwingsLogo } from '../../../assets';
import { theme } from '../../../styles/theme';
import { Container } from '../../shared/Containers';
import Label from '../../shared/Label';
import IconList from './IconList';
import { WEBSITE_LINK_LIST } from './WebsiteLink';
import { INFO_MAIL, MAIN_MAIL } from '../../../constants/contacts';

const FooterMainContainer = styled(Container)``;

const FooterContainer = styled.div`
  display: flex;
  flex-flow: column;
  color: ${({ isInverted, theme: { colors } }) => (isInverted ? colors.primaryColor : colors.white)};
  background-color: ${({ isInverted, theme: { colors } }) => (isInverted ? colors.white : colors.primaryColor)};
  align-items: center;
  justify-content: center;
  width: -webkit-fill-available;
  width: -moz-available;
  padding: 32px 170px 0px;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
    padding: 32px;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 24px;
    flex-flow: column;
  }
`;

const FooterContent = styled(Container)`
  justify-content: space-between;
  flex-direction: row;
  svg {
    width: 200px;
    height: 28px;
    path {
      fill: ${({ isInverted, theme: { colors } }) => (isInverted ? colors.primaryColor : colors.white)};
    }
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    & > *:not(:last-child) {
      margin-bottom: 32px;
    }
    flex-flow: column;
  }

  .link_list {
    align-items: flex-end;
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
      align-items: flex-start;
    }
  }
`;

const FooterColumn = styled(Container)`
  justify-content: flex-start;
  align-items: flex-start;
`;

const Text = styled.p`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.light};
  text-align: left;
  font-size: 16px;
  margin: 0;
  display: flex;
  align-items: center;
  svg {
    width: auto;
    margin: 0px 8px;
  }
`;

const FooterBottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 0;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    flex-flow: column;
    & > *:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;

const PrivacyElement = styled.p`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.regular};
  align-self: center;
  text-align: center;
  white-space: nowrap;
  font-size: 12px;
  margin: 0;
`;

const Divider = styled.hr``;

const FooterLinksGrid = styled.div`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const Footer = () => {
  const navigate = useNavigate();
  const isIndex = () => window.location.pathname === '/';

  return (
    <FooterMainContainer>
      {/* BOTTOM */}
      <FooterContainer isInverted={isIndex()}>
        <FooterContent isInverted={isIndex()}>
          <FooterColumn>
            <RedwingsLogo style={{ marginBottom: 24 }} />
            <Label className="line-height" style={{ maxWidth: 200 }}>
              creators-of-next-generation-hospitality-management-system
            </Label>
          </FooterColumn>
          <FooterColumn>
            <Label fontFamily="bold" style={{ marginBottom: 24 }}>
              contacts
            </Label>
            <Text style={{ marginBottom: 16, whiteSpace: 'nowrap' }}>
              <Label fontFamily="regular" className="w-unset">
                offices-footer
              </Label>
              <Label>&nbsp;(IT) Savelletri di Fasano, Apulia</Label>
            </Text>
            <Text style={{ marginBottom: 16 }}>
              <Label fontFamily="regular" className="w-unset">
                phone-footer
              </Label>
              <Label className="nowrap">&nbsp;(IT) +39 080 482 9200 (Office)</Label>
            </Text>
            <Text style={{ marginBottom: 16 }}>
              <Label fontFamily="regular" className="w-unset">
                phone-footer
              </Label>
              <Label className="nowrap">&nbsp;(IT) +39 346 977 6765 (Angelo Scialpi Sales Manager)</Label>
            </Text>

            <Text style={{ marginBottom: 16 }}>
              <Label fontFamily="regular" className="w-unset">
                email-footer
              </Label>
              <Label>&nbsp;{INFO_MAIL}</Label>
            </Text>
            <Text>
              <Label fontFamily="regular" className="w-unset">
                email-footer
              </Label>
              <Label>&nbsp;{MAIN_MAIL}</Label>
            </Text>
          </FooterColumn>
          <FooterColumn className="link_list">
            <FooterLinksGrid>
              {Object.values(WEBSITE_LINK_LIST).map((link, index) => (
                <Label
                  key={index}
                  fontFamily="bold"
                  className="capitalize pointer"
                  fontSize={24}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate(link.link);
                  }}
                >
                  {link.title}
                </Label>
              ))}
            </FooterLinksGrid>
          </FooterColumn>
        </FooterContent>
        <FooterBottomContainer>
          <Divider
            style={{
              margin: ' 24px 0',
              backgroundColor: isIndex ? theme.colors.lightGrey : theme.colors.white,
              height: 0.5
            }}
          />
          <BottomContainer>
            {/* <IconList isInverted={isIndex()} /> */}
            <PrivacyElement>RWL S.R.L.</PrivacyElement>
            <PrivacyElement>P.IVA 02595870748</PrivacyElement>
            <PrivacyElement>© 2022 RWL S.R.L. All rights reserved.</PrivacyElement>
          </BottomContainer>
        </FooterBottomContainer>
      </FooterContainer>
    </FooterMainContainer>
  );
};

export default Footer;
