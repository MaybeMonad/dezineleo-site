import React from 'react';

import { COLORS } from '@constants';

import Heading from '../Heading';

const SectionSubHeading = ({
  style = {},
  color = COLORS.gray[900],
  ...delegated
}) => <Heading size={4} style={{ ...style, color }} {...delegated} />;

export default SectionSubHeading;
