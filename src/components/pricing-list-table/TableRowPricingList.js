import React from 'react';
import SlideDown from 'react-slidedown';
import styled from 'styled-components/macro';
import { CheckIcon, PlusIcon } from '../../assets';
import Label from '../shared/Label';

const TableRow = styled.tr`
  background-color: ${({ bgColored, theme: { colors } }) => (bgColored ? colors.tableColor : colors.white)};
  svg {
    width: 36px;
    height: fit-content;
  }
`;
const ContentTd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

const TableRowPricingList = ({ title, description, essentials, pro, enterprise, connect, openedAccordion, setOpenedAccordion, index, bgColored }) => {
  return (
    <TableRow bgColored={bgColored}>
      <td>
        <ContentTd onClick={() => setOpenedAccordion(index)}>
          <PlusIcon style={{ marginRight: 8, width: 24 }} />
          <Label fontFamily="regular" className="w-100 text-left">
            {title}
          </Label>
        </ContentTd>
        <SlideDown className="my-dropdown-slidedown">
          {openedAccordion === index ? (
            <div style={{ padding: 20, paddingLeft: 0 }}>
              <Label className="line-height text-left" fontSize={12}>
                {description}
              </Label>
            </div>
          ) : null}
        </SlideDown>
      </td>
      {connect ? (
        <td style={{ position: 'relative' }} className="x-shadow">
          <ContentTd>
            {typeof connect === 'boolean' ? [connect ? <CheckIcon key={0} /> : null] : <Label className="text-center">{connect}</Label>}
          </ContentTd>
        </td>
      ) : (
        <>
          <td style={{ position: 'relative' }} className="left-shadow">
            <ContentTd>
              {typeof essentials === 'boolean' ? [essentials ? <CheckIcon key={0} /> : null] : <Label className="text-center">{essentials}</Label>}
            </ContentTd>
          </td>
          <td style={{ position: 'relative' }} className="x-shadow">
            <ContentTd>{typeof pro === 'boolean' ? [pro ? <CheckIcon key={0} /> : null] : <Label className="text-center">{pro}</Label>}</ContentTd>
          </td>
          <td className="right-shadow" style={{ position: 'relative' }}>
            <ContentTd>
              {typeof enterprise === 'boolean' ? [enterprise ? <CheckIcon key={0} /> : null] : <Label className="text-center">{enterprise}</Label>}
            </ContentTd>
          </td>
        </>
      )}
    </TableRow>
  );
};

export default TableRowPricingList;
