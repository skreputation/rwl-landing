import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { MAIN_MAIL } from '../../constants/contacts';
import { IFrameSiderContext } from '../../context/IFrameSiderContext';
import CustomButton from '../shared/CustomButton';
import CustomDivider from '../shared/CustomDivider';
import Label from '../shared/Label';

const PricingCategory = styled.th`
  max-width: 240px;
  min-width: 240px;
  position: relative;
  height: inherit;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;

const TableHeadCategoryPricingList = ({ title, description, className, principal }) => {
  const { onOpen } = useContext(IFrameSiderContext);
  return (
    <PricingCategory className={className}>
      <Content style={{ height: '100%', justifyContent: 'space-between' }}>
        <Content style={{ height: '100%', justifyContent: 'flex-start' }}>
          <Label className="text-center" fontSize={32} fontFamily={principal && 'bold'} style={{ marginBottom: 16 }}>
            {title}
          </Label>
          <CustomDivider red />
          <Label className="text-center line-height" style={{ height: '100%', display: 'flex', alignItems: 'center', maxWidth: 160, marginTop: 16 }}>
            {description}
          </Label>
        </Content>
        <CustomButton boxShadow="0px 3px 20px 0px #00000022" widthBorderRadius onClick={() => window.open(`mailto:${MAIN_MAIL}`, '_blank')}>
          <Label className="uppercase" fontFamily="bold">
            request-quote
          </Label>
        </CustomButton>
      </Content>
    </PricingCategory>
  );
};

export default TableHeadCategoryPricingList;
