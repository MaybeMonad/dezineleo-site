import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const ContentBox = styled.div`
  margin: 16px 0 32px 0;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.07);
  border-radius: 3px;
  border: 1px solid ${COLORS.gray[300]};
`;

const Title = styled.h3`
  padding: 14px 20px 18px 20px;
  font-size: 1.1rem;
  border-bottom: 1px solid ${COLORS.gray[300]};
  text-transform: uppercase;
  background-color: ${COLORS.gray[100]};
  border-radius: 3px 3px 0 0;
`;

const Content = styled.div`
  padding: 20px 20px 24px 20px;
  *:last-child {
    margin-bottom: 0;
  }
`;

export default props => {
  const {
    title,
    children,
  } = props;
  
  return (
    <ContentBox>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </ContentBox>
  )
}
