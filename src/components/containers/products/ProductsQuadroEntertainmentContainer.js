import React from 'react';
import { QuadroEntertainmentMockup } from '../../../assets';
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

const ProductsQuadroEntertainmentContainer = () => {
  return (
    <Container>
      {/* INTRO */}
      <IntroPages
        bgImage={ROUTE_LIST.PRODUCTS.backgroundImage}
        description={ROUTE_LIST.ENTERTAINMENT.description}
        productImage={ROUTE_LIST.ENTERTAINMENT.productImage}
        haveDemoButton
      />
      {/* TITLE */}
      <TitleDescriptionPage supTitle="QUADRO" title="ENTERTAINMENT" withButtons />
      <Overview title="overview-entertainment-title" description="overview-entertainment-description" />
      <CustomDivider red />

      {/* BASE DESCRIPTION */}
      <DescriptionQuadroList
        baseDescriptions={QUADRO_DESCRIPTION_LIST.ENTERTAINMENT.BASE_DESCRIPTIONS}
        image={QUADRO_DESCRIPTION_LIST.ENTERTAINMENT.BASE_DESCRIPTIONS_IMAGE}
      />
      {/* DESKTOP IMAGE */}
      <ImageContainer>
        <QuadroEntertainmentMockup />
      </ImageContainer>
      {/* OTHER DESCRIPTION */}
      <DescriptionQuadroList
        otherDescriptions={QUADRO_DESCRIPTION_LIST.ENTERTAINMENT.OTHER_DESCRIPTIONS}
        image={QUADRO_DESCRIPTION_LIST.ENTERTAINMENT.OTHER_DESCRIPTIONS_IMAGE}
      />
      {/* PRICING LIST */}
      <PricingList
        features={QUADRO_PRICING_FEATURES.ENTERTAINMENT}
        productName="QUADRO Entertainment"
        productDescription="An in-room entertainment package tailored for every size and budget."
        categories={QUADRO_PRICING_CATEGORIES.ENTERTAINMENT}
      />
    </Container>
  );
};

export default ProductsQuadroEntertainmentContainer;
