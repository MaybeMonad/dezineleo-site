import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header/index';
import { leftMenu, rightMenu, bottomMenu } from '../config/config';

import './index.css';
import '../assets/css/common.css';
import Footer from '../components/footer';
import BottomNav from '../components/bottomNav';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: null,
    }
  }
  headerFix() {
    this.setState(() => ({
      windowWidth: window.innerWidth,
    }));
  }
  componentDidMount() {
    this.headerFix();

    window.addEventListener('resize', () => this.headerFix());
  }
  render() {
    const { children, data } = this.props;
    return (
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
        <div className="main-section">
          <div className="section">
            {children()}
          </div>
        </div>
        {this.state.windowWidth < 1120 && <BottomNav bottomMenu={bottomMenu} />}
        <Footer />
      </div>
    )
  }
}

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
