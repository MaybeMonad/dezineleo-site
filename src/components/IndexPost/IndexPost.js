/**
 * A post summary, found on the homepage
 */
import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { COLORS, BREAKPOINTS } from '@constants';
import { humanizeDate } from '@helpers/date.helpers';

import Paragraph from '../Paragraph';
import Link from '../Link';

const IndexPost = ({ path, title, abstract, publishedOn }) => {
  const newest = dayjs(publishedOn) > dayjs().subtract(1, 'month');;
  
  return (
    <Wrapper>
      <PostLink href={path}>
        <PostTitle>{title}{newest && <New>New!</New>}</PostTitle>
      </PostLink>
      <Date>{humanizeDate(publishedOn)}</Date>
      <Abstract>{abstract} </Abstract>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 72px;
  position: relative;
  margin: 0 -32px 20px -32px;
  padding: 28px 32px 22px 32px;
  transition: background-color 0.3s ease;
  z-index: 1;
  ::before {
    content: '';
    transition: all 0.2s ease;
    background-color: ${COLORS.gray[100]};
    border-radius: 8px;
    display: block;
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    left: 0;
    top: 0;
  }
  :hover {
    &::before {
      opacity: 1;
    }
  }
`;

const PostLink = styled(Link)`
  // color: ${COLORS.pink[500]};
  text-decoration: none;
  position: relative;
`;

const PostTitle = styled.h3`
  position: relative;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 600;
  color: ${COLORS.gray[900]};
  margin: -10px 0 -4px;

  @media ${BREAKPOINTS.sm} {
    font-size: 42px;
  }
`;

const Date = styled.h5`
  position: relative;
  font-size: 1rem;
  font-weight: 500;
  color: ${COLORS.gray[400]};
  margin-bottom: 12px;
  margin-top: 8px;
`;

const Abstract = styled(Paragraph)`
  font-size: 1.2rem;
  margin-bottom: 0rem;
  line-height: 1.8rem;
  font-size: 1.14rem;
  position: relative;
`;

const New = styled.sup`
  font-weight: 300;
  margin-left: 6px;
  font-size: 0.8rem;
  color: ${COLORS.red[500]};
  vertical-align: super;
`;

export default IndexPost;
