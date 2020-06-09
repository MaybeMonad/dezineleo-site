import React from 'react';
import styled from 'styled-components';

import { slugify, throttle } from '@utils';

import Heading from '../Heading';

const TableOfContents = ({ headings }) => {
  const largeEnoughHeadings = headings.filter(h => h.depth <= 2);
  const headingsWithIds = largeEnoughHeadings.map(h => ({
    ...h,
    id: slugify(h.value),
  }));

  const activeHeadingId = useActiveHeading(headingsWithIds);

  return (
    <Wrapper>
      <TocHeading forwardedAs="h2" type="section-title">
        Table of Contents
      </TocHeading>
      <ContentLinkHeading
        href="#"
        style={getStylesForDepth(1, !activeHeadingId)}
      >
        Introduction
      </ContentLinkHeading>
      {headingsWithIds.map((heading, index) => (
        <ContentLinkHeading
          key={index}
          href={`#${slugify(heading.value)}`}
          style={getStylesForDepth(
            heading.depth,
            activeHeadingId === heading.id
          )}
        >
          {heading.value}
        </ContentLinkHeading>
      ))}
    </Wrapper>
  );
};

const useActiveHeading = headings => {
  const [activeHeadingId, setActiveHeading] = React.useState(null);

  React.useEffect(() => {
    const handleScroll = throttle(() => {
      // If we're all the way at the top, there is no active heading.
      // This is done because "Introduction", the first link in the TOC, will
      // be active if `heading` is `null`.
      if (window.pageYOffset === 0) {
        return setActiveHeading(null);
      }

      // There HAS to be a better single-step algorithm for this, but I can't
      // think of it. So I'm doing this in 2 steps:
      //
      // 1. Are there any headings in the viewport right now? If so, pick the
      //    top one.
      // 2. If there are no headings in the viewport, are there any above
      //    the viewport? If so, pick the last one (most recently scrolled out
      //    of view)
      //
      // If neither condition is met, I'll assume I'm still in the intro,
      // although this would have to be a VERY long intro to ever be true.

      let headingBoxes = headings.map(({ id }) => {
        const elem = document.querySelector(`#${id}`);
        return { id, box: elem.getBoundingClientRect() };
      });

      // The first heading within the viewport is the one we want to highlight.
      // Because our heading obscures the top ~100px of the window, I'm
      // considering that range out-of-viewport.
      const TOP_OFFSET = 120;
      let firstHeadingInViewport = headingBoxes.find(({ box }) => {
        return box.bottom > TOP_OFFSET && box.top < window.innerHeight;
      });

      // If there is no heading in the viewport, check and see if there are any
      // above the viewport.
      if (!firstHeadingInViewport) {
        const reversedBoxes = [...headingBoxes].reverse();

        firstHeadingInViewport = reversedBoxes.find(({ box }) => {
          return box.bottom < TOP_OFFSET;
        });
      }

      if (!firstHeadingInViewport) {
        setActiveHeading(null);
      } else if (firstHeadingInViewport.id !== activeHeadingId) {
        setActiveHeading(firstHeadingInViewport.id);
      }
    }, 500);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeHeadingId, headings]);

  return activeHeadingId;
};

const getStylesForDepth = (depth, isActiveHeading) => {
  const base = {
    color: isActiveHeading ? 'var(--color-primary)' : undefined,
  };

  switch (depth) {
    case 1:
      return {
        ...base,
        marginTop: 10,
        fontSize: 15,
      };

    case 2:
      return {
        ...base,
        marginTop: 3,
        fontSize: 14,
        paddingLeft: 12,
      };

    case 3:
      return {
        ...base,
        marginTop: 3,
        fontSize: 12,
        paddingLeft: 24,
      };

    default:
      throw new Error('Unsupported heading size: ' + depth);
  }
};

const Wrapper = styled.nav`
  margin-bottom: 32px;
`;

const TocHeading = styled(Heading)`
  color: var(--color-gray-900);
  margin-bottom: 16px;
`;

const ContentLinkHeading = styled.a`
  display: block;
  opacity: 0.7;
  color: var(--color-gray-800);
  text-decoration: none;
  transition: opacity 500ms;

  &:hover,
  &:focus {
    opacity: 1;
    transition: opacity 0ms;
  }
`;

export default TableOfContents;
