import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header/index';
import { leftMenu, rightMenu } from '../config/config';

import './index.css';
import '../assets/css/common.css';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'Just another design and dev blog by deizneleo',
        },
        { name: 'keywords', content: 'design, dev, UI, JavaScript' },
      ]}
    />
    <Header leftMenu={leftMenu} rightMenu={rightMenu} />
    <div className="section">
      {children()}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
