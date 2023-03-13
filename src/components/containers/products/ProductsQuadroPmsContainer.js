import React from 'react';
import { QuadroPmsTimeline } from '../../../assets';
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

const ProductsQuadroPmsContainer = () => {
  return (
    <Container>
      {/* INTRO */}
      <IntroPages
        bgImage={ROUTE_LIST.PRODUCTS.backgroundImage}
        description={ROUTE_LIST.PMS.description}
        productImage={ROUTE_LIST.PMS.productImage}
        haveDemoButton
      />
      {/* TITLE */}
      <TitleDescriptionPage supTitle="QUADRO" title="PMS" withButtons />
      <Overview description="overview-description" />
      <CustomDivider red />
      {/* BASE DESCRIPTION */}
      <DescriptionQuadroList
        baseDescriptions={QUADRO_DESCRIPTION_LIST.PMS.BASE_DESCRIPTIONS}
        image={QUADRO_DESCRIPTION_LIST.PMS.BASE_DESCRIPTIONS_IMAGE}
      />
      {/* DESKTOP IMAGE */}
      <ImageContainer>
        <QuadroPmsTimeline />
      </ImageContainer>
      {/* OTHER DESCRIPTION */}
      <DescriptionQuadroList
        otherDescriptions={QUADRO_DESCRIPTION_LIST.PMS.OTHER_DESCRIPTIONS}
        image={QUADRO_DESCRIPTION_LIST.PMS.OTHER_DESCRIPTIONS_IMAGE}
      />
      {/* PRICING LIST */}
      <PricingList
        features={QUADRO_PRICING_FEATURES.PMS}
        productName="QUADRO PMS"
        productDescription="pms-description-pricing-list"
        categories={QUADRO_PRICING_CATEGORIES.CLASSIC}
      />
    </Container>
  );
};

export default ProductsQuadroPmsContainer;
