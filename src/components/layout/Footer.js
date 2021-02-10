import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import FooterNav from './partials/FooterNav';
import FooterSocial from './partials/FooterSocial';
import { Divider, Typography, Grid, Button } from '@material-ui/core';
import './styles.css'
import foot from './waves.svg'


const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
    <footer
      {...props}
      className={classes}
      style={{ backgroundColor: '#f24141', }}
    >
      <div className="container" style={{ backgroundColor: '#f241419e', padding: '1%' }}>
      
          <div className="footer-top space-between text-xxs" >
            {/* <Logo /> */}
            
            <FooterNav />

            <FooterSocial />
          </div>
  
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;