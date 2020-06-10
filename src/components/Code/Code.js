import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Prism from 'prismjs'
// import { COLORS } from '@constants'

export default props => {
  const {
    code,
    plugins,
    lang,
    hl,
  } = props;

  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef?.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [codeRef]);

  return (
    <Pre data-line={!hl ? false : hl.join(',')} className={!plugins ? "line-numbers show-language line-highlight" : plugins.join(" ")}>
      <code ref={codeRef} className={`language-${lang}`}>
        {code.trim()}
      </code>
    </Pre>
  )
}

const Pre = styled.pre`
  &.line-highlight {
    background: white;
  }

  .line-highlight {
    margin-top: 1.02em;
    background: rgba(0, 0, 0, 0.03);
  }
`