import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import { ProductEntertainment, ProductFnb, ProductPms, ProductPop } from '../../../assets';
import { ROUTE_LIST } from '../../../constants/routesList';
import {
  ROUTE_PRODUCTS_QUADRO_ENTERTAINMENT,
  ROUTE_PRODUCTS_QUADRO_FNB,
  ROUTE_PRODUCTS_QUADRO_PMS,
  ROUTE_PRODUCTS_QUADRO_POP
} from '../../../router/routes';
import { theme } from '../../../styles/theme';
import { Container } from '../../shared/Containers';
import CustomButton from '../../shared/CustomButton';
import IntroPages from '../../shared/IntroPages';
import Label from '../../shared/Label';
import TitleDescriptionPage from '../../shared/TitleDescriptionPage';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  .margined-label {
    padding: 16px 168px;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
      padding: 24px;
    }
  }
  svg {
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
  max-width: inherit;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    margin: 24px;
    padding: 0px;
  }
`;

const GridRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: start;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: start;
  margin: 32px 0px;
  & > *:not(:last-child) {
    margin-right: 16px;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    & > *:not(:last-child) {
      margin-right: 0px;
    }
    margin: 24px 0px;
    padding: 0px;
    flex-direction: column;
  }
`;

const GridColumn = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    width: 100%;
    margin-right: 0px;
    margin-bottom: 16px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: -webkit-fill-available;
  width: -moz-available;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) and (min-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 24px 0px;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) {
    flex-direction: column;
    margin-top: 0px;
    padding: 0px;
    button {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
`;

const SectionContent = styled(Container)`
  padding: 48px 168px;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel + 1}px`}) and (min-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 24px 64px;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel}px`}) {
    padding: 24px;
  }
`;

const initialButtons = {
  Accommodations: true,
  'Eating & Drinking': false,
  Shopping: false
};

const ProductsQuadroSuiteContainer = () => {
  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState(initialButtons);
  const [pulseDemo, setPulseDemo] = useState(false);

  const imageOpacified = (section) => {
    if (buttonClicked[section]) return '1';
    return '0.2';
  };

  const handleButtons = (key) => {
    setPulseDemo(true);
    setButtonClicked({ ...buttonClicked, [key]: !buttonClicked[key] });
  };

  return (
    <Container>
      {/* INTRO */}
      <IntroPages
        bgImage={ROUTE_LIST.PRODUCTS.backgroundImage}
        description={ROUTE_LIST.PRODUCTS.description}
        haveDemoButton
        pulseDemo={pulseDemo}
        onAnimationEnd={() => setPulseDemo(false)}
      />
      <MainContainer>
        <TitleDescriptionPage supTitle="how-does-your-business" title="interact-with-guests" />
        <SectionContent>
          <Label className="w-100" mobileStyle={{ marginTop: 24 }}>
            select-1-or-more-interaction-types-below
          </Label>
          <ButtonContainer>
            {Object.entries(initialButtons).map((button, index) => (
              <CustomButton
                key={index}
                inverted={Object.values(buttonClicked)[index] !== true}
                onClick={() => {
                  handleButtons(button[0]);
                }}
                boxShadow={`0px 5px 25px ${theme.colors.primaryColor}60`}
              >
                <Label fontSize={32} fontFamily="bold">
                  {button}
                </Label>
              </CustomButton>
            ))}
          </ButtonContainer>
          <Content>
            <GridColumn style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
              <GridRow style={{ marginBottom: 16 }}>
                <ProductPms style={{ opacity: imageOpacified('Accommodations') }} onClick={() => navigate(ROUTE_PRODUCTS_QUADRO_PMS)} />
              </GridRow>
              <GridRow>
                <ProductEntertainment
                  style={{ opacity: imageOpacified('Accommodations') }}
                  onClick={() => navigate(ROUTE_PRODUCTS_QUADRO_ENTERTAINMENT)}
                />
              </GridRow>
            </GridColumn>
            <GridRow>
              <GridColumn style={{ marginRight: 16 }}>
                <ProductFnb style={{ opacity: imageOpacified('Eating & Drinking') }} onClick={() => navigate(ROUTE_PRODUCTS_QUADRO_FNB)} />
              </GridColumn>
              <GridColumn>
                <ProductPop style={{ opacity: imageOpacified('Shopping') }} onClick={() => navigate(ROUTE_PRODUCTS_QUADRO_POP)} />
              </GridColumn>
            </GridRow>
          </Content>
        </SectionContent>
      </MainContainer>
    </Container>
  );
};

export default ProductsQuadroSuiteContainer;
