import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';



const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li >
          <Link href="/Progress" style={{color: 'white'}}> Contact</Link>
        </li>
        <li>
          <Link href="/Progress" style={{color: 'white'}}>About us</Link>
        </li>
        <li>
          <Link href="/Progress" style={{color: 'white'}}>FAQ's</Link>
        </li>
        <li>
          <Link href="/Progress" style={{color: 'white'}}>Support</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;