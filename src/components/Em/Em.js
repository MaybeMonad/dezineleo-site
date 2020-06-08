import styled from 'styled-components';

import { COLORS } from '@constants';

export default styled.em`
  font-family: 'Bree Serif';
  font-size: 1em;
  color: ${props => props.color || COLORS.red[500]};
  font-style: normal;

  .tippy-popper & {
    color: ${COLORS.white} !important;
  }
`;
