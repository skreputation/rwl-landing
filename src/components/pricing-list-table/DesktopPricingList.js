import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import browserDetection from '../../utils/browserDetection';
import Label from '../shared/Label';
import TableHeadCategoryPricingList from './TableHeadCategoryPricingList';
import TableRowPricingList from './TableRowPricingList';

const PackagesMadeContainer = styled.th`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 24px 170px;
  position: relative;
  margin-bottom: 120px;
`;

const PricingTable = styled.table`
  border: none;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.light};
  td {
    text-align: center;
    position: relative;
  }
  th,
  td {
    max-width: ${({ isSingleColumn }) => (isSingleColumn ? '400px' : '280px')};
    min-width: ${({ isSingleColumn }) => (isSingleColumn ? '400px' : '280px')};
  }
`;

const DesktopPricingList = ({ features, categories, productName, productDescription, openedAccordion, setOpenedAccordion }) => {
  return (
    <MainContainer id="pricing" style={{ scrollMarginTop: 100 }}>
      <div
        style={{
          boxShadow: '0px 0px 99px #00000029',
          height: 'calc(100% + 48px)',
          top: -24,
          width: categories.length > 1 ? 280 : 400,
          left: categories.length > 1 ? 730 : 570,
          position: 'absolute'
        }}
      />

      <div
        style={{ position: 'absolute', background: 'white', top: -24, left: categories.length > 1 ? 730 : 570, width: 280, height: 24, zIndex: 1 }}
        className="header-shadow"
      />
      <div
        style={{ position: 'absolute', background: 'white', bottom: -24, left: categories.length > 1 ? 730 : 570, width: 280, height: 24, zIndex: 1 }}
        className="header-shadow"
      />

      {categories.length > 1 && (
        <div
          style={{
            boxShadow: '0px 0px 99px #00000029',
            height: '100%',
            top: 0,
            width: 840,
            left: 450,
            position: 'absolute'
          }}
        />
      )}

      <PricingTable border="none" cellSpacing={0} cellPadding={20} isSingleColumn={categories.length === 1}>
        <thead style={{ fontFamily: theme.fontFamily.regular }}>
          <tr style={browserDetection() === 'CHROME' ? { height: 1 } : {}}>
            <PackagesMadeContainer>
              <Label fontSize={32} className="uppercase text-left">
                {productName}
              </Label>
              <Label className="line-height text-left">{productDescription}</Label>
            </PackagesMadeContainer>
            {categories.length === 1 ? (
              <TableHeadCategoryPricingList principal title={categories[0].name} description={categories[0].description} />
            ) : (
              <>
                <TableHeadCategoryPricingList title={categories[0].name} description={categories[0].description} />
                <TableHeadCategoryPricingList principal title={categories[1].name} description={categories[1].description} />
                <TableHeadCategoryPricingList title={categories[2].name} description={categories[2].description} />
              </>
            )}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Label fontSize={32}>features</Label>
            </td>
          </tr>
          {features.map((feature, index) => (
            <TableRowPricingList
              key={index}
              index={index}
              title={feature.feature}
              description={feature.description}
              essentials={feature.essentials}
              pro={feature.pro}
              enterprise={feature.enterprise}
              connect={feature.connect}
              openedAccordion={openedAccordion}
              setOpenedAccordion={setOpenedAccordion}
              bgColored={index % 2 === 0}
            />
          ))}
        </tbody>
      </PricingTable>
    </MainContainer>
  );
};

export default DesktopPricingList;
