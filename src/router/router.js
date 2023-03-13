/* eslint-disable import/prefer-default-export */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components/macro';
import {
  ROUTE_PARTNERS,
  ROUTE_CONTACT_US,
  ROUTE_INDEX,
  ROUTE_PRODUCTS,
  ROUTE_PRODUCTS_QUADRO_ENTERTAINMENT,
  ROUTE_PRODUCTS_QUADRO_FNB,
  ROUTE_PRODUCTS_QUADRO_PMS,
  ROUTE_PRODUCTS_QUADRO_POP,
  ROUTE_PRODUCTS_QUADRO_SUITE
} from './routes';
import HomeContainer from '../components/containers/HomeContainer';
import CareersContainer from '../components/containers/PartnersContainer';
import ContactUsContainer from '../components/containers/ContactUsContainer';
import ProductsQuadroSuiteContainer from '../components/containers/products/ProductsQuadroSuiteContainer';
import ProductsQuadroPmsContainer from '../components/containers/products/ProductsQuadroPmsContainer';
import ProductsQuadroFnbContainer from '../components/containers/products/ProductsQuadroFnbContainer';
import ProductsQuadroPopContainer from '../components/containers/products/ProductsQuadroPopContainer';
import ProductsQuadroEntertainmentContainer from '../components/containers/products/ProductsQuadroEntertainmentContainer';
import Layout from '../components/layout/Layout';

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Container>
          <Routes>
            <Route exact path={ROUTE_INDEX} element={<HomeContainer />} />
            <Route exact path={ROUTE_PARTNERS} element={<CareersContainer />} />
            <Route exact path={ROUTE_CONTACT_US} element={<ContactUsContainer />} />
            <Route exact path={ROUTE_PRODUCTS} element={<ProductsQuadroSuiteContainer />} />
            <Route exact path={ROUTE_PRODUCTS_QUADRO_SUITE} element={<ProductsQuadroSuiteContainer />} />
            <Route exact path={ROUTE_PRODUCTS_QUADRO_PMS} element={<ProductsQuadroPmsContainer />} />
            <Route exact path={ROUTE_PRODUCTS_QUADRO_FNB} element={<ProductsQuadroFnbContainer />} />
            <Route exact path={ROUTE_PRODUCTS_QUADRO_POP} element={<ProductsQuadroPopContainer />} />
            <Route exact path={ROUTE_PRODUCTS_QUADRO_ENTERTAINMENT} element={<ProductsQuadroEntertainmentContainer />} />
            {/* <Navigate to={ROUTE_INDEX} /> */}
          </Routes>
        </Container>
      </Layout>
    </Router>
  );
};
