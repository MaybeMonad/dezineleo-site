import React from 'react'
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
    .project {
      margin-bottom: 16px;
      h5 {
        margin: 0;
      }
    }
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
      <SEO title="About Leo" />
      <h3>About Leo</h3>
      <p style={{ marginBottom: 14 }}>
        Hi, my name is Yang Jin. Ever since I was a child, I have always been
        passionate about illustrating and computer-like stuff. However, I chose
        to study English instead of CS to become a self-taught web developer.
        Back in the day, I was working as a WordPress theme developer. In 2017,
        I came to Hangzhou to become a full-time web developer and UI designer.
      </p>
      <p style={{ fontSize: 13, marginBottom: 36 }}>
        自幼喜好涂鸦、捣鼓计算机，2010 年开始接触 Discuz 论坛模板开发，经历了
        1.X、2.X 的高峰时期。2013 年转战 ThemeForest 开启 WordPress
        模板开发之旅，于当时个位可数的 Page Builder 市场里占有一席之地，直至
        2017 年末来到杭州开始全职前端开发，而多年自学设计和编程的初衷是想做 Cool
        Stuff。
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
          Currently, I'm working as a front developer and UI designer mainly
          focusing on <b>Augmented Reality</b>.
        </p>
        <p>目前供职于光素科技，研究 AR 技术的实际应用。</p>
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
            <b>2019.4 - Today</b>
            <br />
            Fontend Developer & UI Designer
            <br />
            <span>GSTech, Hangzhou</span>
          </p>
          <p>
            <b>2018.8 - 2019.4</b>
            <br />
            Worked as a <b>ReactJS developer & UI designer</b> on a SaaS
            platform aiming for online marketing.
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
            <b>2013 - 2017</b>
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
          <div className="project">
            <h5>JavaScript Hub</h5>
            <p>
              <a href="/i-build-a-free-JS-learning-app-called-javascript-hub/">
                Intro
              </a>{' '}
              |{' '}
              <a
                href="https://github.com/DezineLeo/javascript-hub"
                target="_blank"
                rel="noopener"
              >
                Github
              </a>
            </p>
          </div>
          <div className="project">
            <h5>DeHTML</h5>
            <p>
              <a>Intro</a> |{' '}
              <a
                href="https://github.com/DezineLeo/DeHTML"
                target="_blank"
                rel="noopener"
              >
                Github
              </a>
            </p>
          </div>
        </StyledSection>
      </div>
      <Footer />
    </Layout>
  )
}
