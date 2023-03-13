import React, { useContext } from 'react';
import SlideDown from 'react-slidedown';
import styled from 'styled-components/macro';
import { PlusIcon } from '../../assets';
import { MAIN_MAIL } from '../../constants/contacts';
import {
  QUADRO_PRICING_CATEGORY_ENTERPRISE,
  QUADRO_PRICING_CATEGORY_ESSENTIAL,
  QUADRO_PRICING_CATEGORY_PRO
} from '../../constants/quadroPricingFeatures';
import { IFrameSiderContext } from '../../context/IFrameSiderContext';
import { Container } from '../shared/Containers';
import CustomButton from '../shared/CustomButton';
import Label from '../shared/Label';

const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 16px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ProductContainer = styled(Container)`
  border: ${({ principal, theme: { colors } }) => (principal ? `2px solid ${colors.red}` : 'none')};
  border-radius: 10px;
  padding: 16px;
`;

const PricingRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: ${({ bgColored, theme: { colors } }) => (bgColored ? colors.tableColor : colors.white)};
  svg {
    width: 36px;
  }
`;
const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MobilePricingList = ({ features, categories, openedAccordion, setOpenedAccordion }) => {
  const { onOpen } = useContext(IFrameSiderContext);
  const QuoteButton = ({ inverted }) => (
    <CustomButton
      boxShadow="0px 3px 20px 0px #00000022"
      widthBorderRadius
      interved={inverted}
      onClick={() => window.open(`mailto:${MAIN_MAIL}`, '_blank')}
    >
      <Label className="uppercase" fontFamily="bold">
        request-quote
      </Label>
    </CustomButton>
  );
  return (
    <MainContainer className="w-full max-w-full">
      {/* ENTERTAINMENT CASE */}
      {categories.length === 1 ? (
        <ProductContainer className="w-full" principal style={{ marginTop: 24 }}>
          <Label fontFamily="bold" size="huge">
            {categories[0].name}
          </Label>
          <Label style={{ marginBottom: 24 }}> {categories[0].description}</Label>
          {features.map((feature, index) => (
            <PricingRow key={index} bgColored={index % 2 === 0} className="w-full" onClick={() => setOpenedAccordion(index)}>
              <Content>
                <PlusIcon style={{ marginRight: 8 }} />
                <LabelContainer className="w-full">
                  <Label bold>{feature.feature}</Label>
                  {typeof feature.connect === 'string' && <Label>{feature.connect}</Label>}
                </LabelContainer>
              </Content>
              <SlideDown className="my-dropdown-slidedown">
                {openedAccordion === index ? (
                  <div style={{ padding: 20 }}>
                    <Label fontSize="12px">{feature.description}</Label>
                  </div>
                ) : null}
              </SlideDown>
            </PricingRow>
          ))}
          <QuoteButton />
        </ProductContainer>
      ) : (
        <>
          {/* PMS,FNB,POP CASE */}
          <ProductContainer className="w-full">
            <Label size="huge">{QUADRO_PRICING_CATEGORY_ESSENTIAL.name}</Label>
            <Label style={{ marginBottom: 24 }}>{QUADRO_PRICING_CATEGORY_ESSENTIAL.description}</Label>
            {features
              .filter((feature) => feature.essentials)
              .map((feature, index) => (
                <PricingRow key={index} bgColored={index % 2 === 0} className="w-full" onClick={() => setOpenedAccordion(index)}>
                  <Content>
                    <PlusIcon style={{ marginRight: 8 }} />
                    <LabelContainer className="w-full">
                      <Label bold>{feature.feature}</Label>
                      {typeof feature.essentials === 'string' && <Label>{feature.essentials}</Label>}
                    </LabelContainer>
                  </Content>
                  <SlideDown className="my-dropdown-slidedown">
                    {openedAccordion === index ? (
                      <div style={{ padding: 20 }}>
                        <Label fontSize="12px">{feature.description}</Label>
                      </div>
                    ) : null}
                  </SlideDown>
                </PricingRow>
              ))}
            <QuoteButton inverted />
          </ProductContainer>
          <ProductContainer className="w-full" principal style={{ marginTop: 24 }}>
            <Label size="huge">{QUADRO_PRICING_CATEGORY_PRO.name}</Label>
            <Label style={{ marginBottom: 24 }}>{QUADRO_PRICING_CATEGORY_PRO.description}</Label>
            {features
              .filter((feature) => !feature.essentials || typeof feature.essentials === 'string')
              .map((feature, index) => (
                <PricingRow key={index} bgColored={index % 2 === 0} className="w-full" onClick={() => setOpenedAccordion(index)}>
                  <Content>
                    <PlusIcon style={{ marginRight: 8 }} />
                    <LabelContainer className="w-full">
                      <Label bold>{feature.feature}</Label>
                      {typeof feature.pro === 'string' && <Label>{feature.pro}</Label>}
                    </LabelContainer>
                  </Content>
                  <SlideDown className="my-dropdown-slidedown">
                    {openedAccordion === index ? (
                      <div style={{ padding: 20 }}>
                        <Label fontSize="12px">{feature.description}</Label>
                      </div>
                    ) : null}
                  </SlideDown>
                </PricingRow>
              ))}
            <QuoteButton />
          </ProductContainer>
          <ProductContainer className="w-full">
            <Label size="huge" style={{ marginTop: 24 }}>
              {QUADRO_PRICING_CATEGORY_ENTERPRISE.name}
            </Label>
            <Label style={{ marginBottom: 24 }}>{QUADRO_PRICING_CATEGORY_ENTERPRISE.description}</Label>
            {features
              .filter((feature) => !feature.essentials || typeof feature.essentials === 'string')
              .map((feature, index) => (
                <PricingRow key={index} bgColored={index % 2 === 0} className="w-full" onClick={() => setOpenedAccordion(index)}>
                  <Content>
                    <PlusIcon style={{ marginRight: 8 }} />
                    <LabelContainer className="w-full">
                      <Label bold>{feature.feature}</Label>
                      {typeof feature.enterprise === 'string' && <Label>{feature.enterprise}</Label>}
                    </LabelContainer>
                  </Content>
                  <SlideDown className="my-dropdown-slidedown">
                    {openedAccordion === index ? (
                      <div style={{ padding: 20 }}>
                        <Label fontSize="12px">{feature.description}</Label>
                      </div>
                    ) : null}
                  </SlideDown>
                </PricingRow>
              ))}
            <QuoteButton inverted />
          </ProductContainer>
        </>
      )}
    </MainContainer>
  );
};

export default MobilePricingList;
