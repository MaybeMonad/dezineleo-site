import styled from 'styled-components';

import { BREAKPOINTS } from '@constants';

export default styled.p`
  font-size: ${props => props.fontSize || '1.1rem'};
  line-height: 2rem;
  margin-bottom: 2rem;
  font-family: ${props => props.fontFamily || 'RobotoSlab Regular'};

  @media ${BREAKPOINTS.sm} {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
`;
