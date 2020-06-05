import React from 'react';
import styled from 'styled-components';

import { COLORS, BREAKPOINTS } from '@constants';

import Link from '../Link';

export default ({ children, ...delegated }) => (
  <Wrapper {...delegated}>
    <MainText>{children}</MainText>
  </Wrapper>
);

const Wrapper = styled(Link)`
  position: relative;
  font-weight: 600;

  @media ${BREAKPOINTS.smMin} {
    display: inline-block;
  }
`;

const MainText = styled.span`
  display: inline-block;
  position: relative;
  z-index: 1;
  color: ${COLORS.blue[500]};
  text-decoration: underline;
  transition: all 400ms;

  :hover {
    color: ${COLORS.red[500]};
    text-decoration: none;
  }

  @media ${BREAKPOINTS.sm} {
    display: inline;
  }
`;