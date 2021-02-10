import React from 'react';
import classNames from 'classnames';
import PhoneIcon from '@material-ui/icons/Phone';
import EditLocation from '@material-ui/icons/EditLocation'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <InstagramIcon style={{color: 'white', fontSize: 20}} />
        </li>
        <li>
          <TwitterIcon style={{color: 'white', fontSize: 20}}/>
        </li>
        <li>
          <FacebookIcon style={{color: 'white', fontSize: 20}} />
        </li>
        <li>
          <PhoneIcon style={{color: 'white', fontSize: 20}}/>

        </li>
        <li>
          <EditLocation style={{color: 'white', fontSize: 20}}/>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;