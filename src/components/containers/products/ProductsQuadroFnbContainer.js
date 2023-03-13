import React from 'react';
import { QuadroFnbSpaces } from '../../../assets';
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

const ProductsQuadroFnbContainer = () => {
  return (
    <Container>
      {/* INTRO */}
      <IntroPages
        bgImage={ROUTE_LIST.PRODUCTS.backgroundImage}
        description={ROUTE_LIST.FNB.description}
        productImage={ROUTE_LIST.FNB.productImage}
        haveDemoButton
      />
      {/* TITLE */}
      <TitleDescriptionPage supTitle="QUADRO" title="FNB" withButtons />
      <Overview description="fnb-description" />
      <CustomDivider red />

      {/* BASE DESCRIPTION */}
      <DescriptionQuadroList
        baseDescriptions={QUADRO_DESCRIPTION_LIST.FNB.BASE_DESCRIPTIONS}
        image={QUADRO_DESCRIPTION_LIST.FNB.BASE_DESCRIPTIONS_IMAGE}
      />
      {/* DESKTOP IMAGE */}
      <ImageContainer>
        <QuadroFnbSpaces />
      </ImageContainer>
      {/* OTHER DESCRIPTION */}

      <DescriptionQuadroList
        otherDescriptions={QUADRO_DESCRIPTION_LIST.FNB.OTHER_DESCRIPTIONS}
        image={QUADRO_DESCRIPTION_LIST.FNB.OTHER_DESCRIPTIONS_IMAGE}
      />
      {/* PRICING LIST */}
      <PricingList
        features={QUADRO_PRICING_FEATURES.FNB}
        productName="QUADRO FNB"
        productDescription="Intuitive hospitality tech suited to your business needs."
        categories={QUADRO_PRICING_CATEGORIES.CLASSIC}
      />
    </Container>
  );
};

export default ProductsQuadroFnbContainer;
