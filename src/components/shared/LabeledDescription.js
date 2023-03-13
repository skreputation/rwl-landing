/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
import React from 'react';
import styled from 'styled-components/macro';

const LabeledDescriptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-direction: column;
  width: 100%;
`;
const TitleContainer = styled.div`
  display: flex;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  font-size: 32px;
  margin: 0px;
  align-self: ${({ textRight }) => (textRight ? 'flex-end' : 'flex-start')};
  flex-wrap: wrap;
`;

const LabeledTitleRegular = styled.span`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.regular};
  margin-right: 8px;
`;

const LabeledTitleBold = styled.span`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  margin-right: 8px;
`;

const TextContainer = styled.div`
  display: flex;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.light};
  font-size: 16px;
  margin-top: 16px;
  line-height: 1.5;
  text-align: ${({ textRight }) => (textRight ? 'right' : 'left')};
`;

const LabeledDescription = ({ title, description, containerStyle, textRight }) => {
  const alternateFontWeight = (text) => {
    const sp = text.split(' ');
    // eslint-disable-next-line array-callback-return
    const alternateTitle = sp.map((tl, index) => {
      if (tl === '&') return <LabeledTitleBold key={index}>{tl} </LabeledTitleBold>;
      else if (sp[index - 1] === '&') return <LabeledTitleRegular key={index}>{tl}</LabeledTitleRegular>;
      else if (index % 2 === 0) return <LabeledTitleBold key={index}>{tl}</LabeledTitleBold>;
      else return <LabeledTitleRegular key={index}>{tl}</LabeledTitleRegular>;
    });
    return alternateTitle;
  };

  return (
    <LabeledDescriptionContainer style={{ ...containerStyle }}>
      <TitleContainer textRight={textRight}>{alternateFontWeight(title)}</TitleContainer>
      <TextContainer textRight={textRight}>{description}</TextContainer>
    </LabeledDescriptionContainer>
  );
};

export default LabeledDescription;
