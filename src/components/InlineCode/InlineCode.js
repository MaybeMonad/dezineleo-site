import styled from 'styled-components';

import { COLORS } from '@constants';

export default styled.span`
  display: inline-block;
  font-family: Menlo,Consolas,Monaco,source-code-pro,Courier New,monospace;
  font-size: 0.8em;
  ${'' /* letter-spacing: -0.5px; */}
  padding: 2px 6px;
  line-height: 1.2em;
  border-radius: 4px;
  background: ${COLORS.gray[100]};
`;
