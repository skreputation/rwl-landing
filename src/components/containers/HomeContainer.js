import React from 'react';
import { ROUTE_LIST } from '../../constants/routesList';
import ProductCarousel from '../home/carousel/ProductCarousel';
import Clients from '../home/Clients';
import DescriptionSection from '../home/DescriptionSection';
import KnowMore from '../home/KnowMore';
import SecondDescription from '../home/SecondDescription';
import { Container } from '../shared/Containers';
import IntroPages from '../shared/IntroPages';
import TitleDescriptionPage from '../shared/TitleDescriptionPage';

const HomeContainer = () => {
  return (
    <Container>
      {/* INTRO */}
      <IntroPages bgImage={ROUTE_LIST.HOME.backgroundImage} description={ROUTE_LIST.HOME.description} haveDemoButton />
      {/* TITLE */}
      <TitleDescriptionPage supTitle="we-are" title="REDWING LABS" />
      <DescriptionSection />
      <Clients />
      {/* PRODUCT CAROUSEL */}
      <ProductCarousel />

      {/* SECOND DESCRIPTION */}
      <SecondDescription />
      {/* KNOW MORE */}
      <KnowMore />
    </Container>
  );
};

export default HomeContainer;
