import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
const Layout = ({ children, darkText }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Inteligenta Artificiala (IA), Educatie Financiara, Antreprenoriat, Time Management, Comunicare' },
            { name: 'keywords', content: 'elearning, continut educational, inteligenta artificiala, edu financiar, comunicare, time-management' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div id="wrapper" className={darkText ? 'dark-text' : ''}>
          {children}
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  darkText: PropTypes.bool,
};

export default Layout;
