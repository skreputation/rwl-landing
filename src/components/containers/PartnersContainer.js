import React from 'react';
import { ROUTE_LIST } from '../../constants/routesList';
import PartnersForm from '../partners/PartnersForm';
import { Container } from '../shared/Containers';
import IntroPages from '../shared/IntroPages';
import TitleDescriptionPage from '../shared/TitleDescriptionPage';

const PartnersContainer = () => {
  return (
    <Container>
      {/* INTRO */}
      <IntroPages bgImage={ROUTE_LIST.CAREERS.backgroundImage} description={ROUTE_LIST.CAREERS.description} />
      {/* TITLE */}
      <TitleDescriptionPage title="partners" />
      {/* FORM CONTAINER */}
      <PartnersForm />
    </Container>
  );
};

export default PartnersContainer;
