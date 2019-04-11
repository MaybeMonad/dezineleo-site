import React, { useState } from 'react'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import styled from 'styled-components'
import classNames from 'classnames'

const StepBlock = props => {
  const { className, title, date, des } = props
  const [expand, setExpand] = useState(false)
  return (
    <div
      className={classNames(className, { expanded: expand })}
      onClick={() => setExpand(!expand)}
    >
      <h4>
        {title}
        <span>{date}</span>
      </h4>
      <div className="expand-content">{des}</div>
    </div>
  )
}

const StyledStepBlock = styled(StepBlock)`
  border: var(--border);
  border-radius: 5px;
  padding: 0 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  margin-bottom: 36px;
  position: relative;
  :hover {
    background-color: var(--bg-grey);
  }
  :after {
    content: '';
    width: 1px;
    height: 36px;
    position: absolute;
    left: 50%;
    bottom: -36px;
    background: var(--border-grey);
  }
  h4 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 13px;
      color: var(--font-grey);
      font-family: 'ubuntu_lightregular';
    }
  }
  .expand-content {
    display: none;
  }
  &.expanded {
    .expand-content {
      display: block;
    }
  }
`

const StepBlocks = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

const history = [
  {
    title: 'Start to create the react library',
    date: 'April 8, 2019',
    des: (
      <p>
        Usually, I use{' '}
        <a
          href="https://github.com/transitive-bullshit/create-react-library"
          target="_blank"
        >
          create-react-library
        </a>{' '}
        to create a new library.
      </p>
    ),
  },
  {
    title: 'Add the first component',
    date: 'April 10, 2019',
    des: (
      <p>
        Add a new component called <b>Login</b>.
      </p>
    ),
  },
]

export default props => {
  const { location } = props
  return (
    <Layout
      location={location}
      title="De Components - Curated React UI Components"
    >
      <SEO />
      {/* <ProjectIntro>

      </ProjectIntro> */}
      <StepBlocks>
        {history.map(data => (
          <StyledStepBlock {...data} key={data.date} />
        ))}
      </StepBlocks>

      <aside>
        <Bio />
      </aside>

      <Footer />
    </Layout>
  )
}
