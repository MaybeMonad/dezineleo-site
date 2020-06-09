import React from 'react';
import styled from 'styled-components';
import IconBase from 'react-icons-kit';
import { arrowRightC } from 'react-icons-kit/ionicons/arrowRightC';
import { starFullOutline } from 'react-icons-kit/typicons/starFullOutline';
import { starOutline } from 'react-icons-kit/typicons/starOutline';

import { COLORS } from '@constants';

const DefaultIcon = () => (
  <IconBase
    size={16}
    icon={arrowRightC}
    style={{ color: COLORS.red[500] }}
  />
);
const FullStarIcon = () => (
  <IconBase
    size={16}
    icon={starFullOutline}
    style={{ color: COLORS.red[500] }}
  />
);
const EmptyStarIcon = () => (
  <IconBase
    size={16}
    icon={starOutline}
    style={{ color: COLORS.red[700] }}
  />
);

const ICONS = {
  default: DefaultIcon,
  fullStar: FullStarIcon,
  emptyStar: EmptyStarIcon,
};

const ListItem = ({ type = 'default', children }) => {
  const IconComponent = ICONS[type];

  return (
    <Wrapper>
      <IconWrapper>
        <IconComponent />
      </IconWrapper>
      <Children>{children}</Children>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const IconWrapper = styled.div`
  padding-right: 16px;
  line-height: 1.4rem;
`;

const Children = styled.div`
  font-size: 1.05rem;
  line-height: 1.78rem;
`;

export default ListItem;
