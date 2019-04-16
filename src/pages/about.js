import React, { useState } from 'react'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import styled from 'styled-components'
import classNames from 'classnames'

const Section = props => {
  const { className, title, mode, children, style } = props
  return (
    <div className={classNames(className, { [mode]: true })} style={style}>
      <h4>{title}</h4>
      <div className="content">{children}</div>
    </div>
  )
}

const StyledSection = styled(Section)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: var(--border);
  width: 100%;
  &.column {
    flex-direction: column;
    align-items: flex-start;
    padding: 36px 42px;
    &:first-child {
      border-right: var(--border);
      padding-left: 0;
    }
    .content {
      border: 0;
      padding: 0;
    }
  }
  h4 {
    width: 28%;
    margin-top: 0;
    padding-right: 32px;
    span {
      display: inline-block;
      width: 100%;
      font-size: 13px;
      font-family: var(--font-light);
      font-weight: normal;
    }
  }
  .content {
    border-left: var(--border);
    padding: 32px 42px;
    p {
      margin-bottom: 14px;
      &:last-child {
        margin: 0;
      }
      b {
        font-family: var(--font-medium);
        font-size: 12px;
      }
      span {
        color: var(--font-grey);
        font-size: 12px;
      }
    }
  }
  p {
    margin-top: 0;
    font-size: 13px;
  }
`

export default props => {
  const { location } = props
  return (
    <Layout location={location} title="About Leo - Dezineleo">
      <h3>About Leo</h3>
      <p>
        Hi, my name is Yang Jin. Ever since I was a child, I have always been
        passionate about illustrating and computer-like stuff. However, I chose
        to study English instead of CS to become a self-taught web developer.
        Back in the day, I was working as a WordPress theme developer. In 2017,
        I came to Hangzhou to become a full-time web developer and UI designer.
      </p>
      <StyledSection
        title={
          <>
            <span>01.</span>In progress
          </>
        }
        mode="row"
      >
        <p>
          Currently, I'm working as React developer on a SaaS platform aiming
          for online marketing. I'm also in charge of VI in this company.
        </p>
        {/* <p>目前供职于<a href="https://www.gnlab.com" rel="noopener noreferrer" target="_blank">光年实验室</a>，主要负责建设在线营销 SaaS 平台，同时负责视觉设计。</p> */}
        <p>目前供职于光年实验室，负责建设在线营销 SaaS 平台，兼任视觉设计。</p>
      </StyledSection>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <StyledSection
          title={
            <>
              <span>02.</span>Experiences
            </>
          }
          mode="column"
        >
          <p>
            <b>2018.8 - Today</b>
            <br />
            Fontend Developer & UI Designer
            <br />
            <span>GnLab, Hangzhou</span>
          </p>
          <p>
            <b>2017.9 - 2018.8</b>
            <br />
            Fontend Developer & UI Designer
            <br />
            <span>Youte, Hangzhou</span>
          </p>
          <p>
            <b>2016.12 - 2017.9</b>
            <br />
            Graphic Designer & Website Developer
            <br />
            <span>Aoxiang, Yiwu</span>
          </p>
          <p>
            <b>2013 - 2016</b>
            <br />
            WordPress Theme Designer & Developer
            <br />
            <span>Themeforest</span>
          </p>
        </StyledSection>
        <StyledSection
          title={
            <>
              <span>03.</span>Projects
            </>
          }
          mode="column"
        >
          <p>Expecting...</p>
        </StyledSection>
      </div>
      {/* <aside>
        <Bio />
      </aside> */}

      <Footer />
    </Layout>
  )
}
