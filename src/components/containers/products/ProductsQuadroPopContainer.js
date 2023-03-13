import React from 'react';
import { QuadroPopInventory } from '../../../assets';
import { QUADRO_DESCRIPTION_LIST } from '../../../constants/quadroDescriptionList';
import { QUADRO_PRICING_CATEGORIES, QUADRO_PRICING_FEATURES } from '../../../constants/quadroPricingFeatures';
import { ROUTE_LIST } from '../../../constants/routesList';
import Overview from '../../products/Overview';
import { Container, ImageContainer } from '../../shared/Containers';
import CustomDivider from '../../shared/CustomDivider';
import DescriptionQuadroList from '../../shared/DescriptionQuadroList';
import IntroPages from '../../shared/IntroPages';
import PricingList from '../../pricing-list-table/PricingList';
import TitleDescriptionPage from '../../shared/TitleDescriptionPage';

const ProductsQuadroPopContainer = () => {
  return (
    <Container>
      {/* INTRO */}
      <IntroPages
        bgImage={ROUTE_LIST.PRODUCTS.backgroundImage}
        description={ROUTE_LIST.POP.description}
        productImage={ROUTE_LIST.POP.productImage}
        haveDemoButton
      />
      {/* TITLE */}
      <TitleDescriptionPage supTitle="QUADRO" title="POP" withButtons />
      <Overview description="pop-overview-description" />
      <CustomDivider red />

      {/* BASE DESCRIPTION */}
      <DescriptionQuadroList
        baseDescriptions={QUADRO_DESCRIPTION_LIST.POP.BASE_DESCRIPTIONS}
        image={QUADRO_DESCRIPTION_LIST.POP.BASE_DESCRIPTIONS_IMAGE}
      />
      {/* DESKTOP IMAGE */}
      <ImageContainer>
        <QuadroPopInventory />
      </ImageContainer>
      {/* BASE DESCRIPTION */}
      <DescriptionQuadroList
        otherDescriptions={QUADRO_DESCRIPTION_LIST.POP.OTHER_DESCRIPTIONS}
        image={QUADRO_DESCRIPTION_LIST.POP.OTHER_DESCRIPTIONS_IMAGE}
      />
      {/* PRICING LIST */}
      <PricingList
        features={QUADRO_PRICING_FEATURES.POP}
        productName="QUADRO POP"
        productDescription="Intuitive hospitality tech suited to your business needs."
        categories={QUADRO_PRICING_CATEGORIES.CLASSIC}
      />
    </Container>
  );
};

export default ProductsQuadroPopContainer;
