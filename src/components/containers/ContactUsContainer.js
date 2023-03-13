import React from 'react';
import { ROUTE_LIST } from '../../constants/routesList';
import ContactUsForm from '../contact/ContactUsForm';
import { Container } from '../shared/Containers';
import IntroPages from '../shared/IntroPages';
import TitleDescriptionPage from '../shared/TitleDescriptionPage';

const ContactUsContainer = () => {
  return (
    <Container>
      {/* INTRO */}
      <IntroPages bgImage={ROUTE_LIST.CONTACT.backgroundImage} description={ROUTE_LIST.CONTACT.description} />
      {/* TITLE */}
      <TitleDescriptionPage title="contact-us" />
      {/* FORM CONTAINER */}
      <ContactUsForm />

      {/* MAP */}
      {/* <Map /> */}
    </Container>
  );
};

export default ContactUsContainer;
