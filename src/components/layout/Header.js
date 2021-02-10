import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import CardMedia from '@material-ui/core/CardMedia';
import { Popover, Input, Menu, Dropdown } from 'antd';
import PropTypes from 'prop-types';
import Cards from '../elements/card'
import { AudioOutlined, DownOutlined } from '@ant-design/icons';
import { Search as IconSearch } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListIcon from '@material-ui/icons/List';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import Logo from './partials/Logo';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography, Grid } from '@material-ui/core';
import one from '../suura/poto/animal.jpg'
import two from '../suura/poto/env.jpg'
import tree from '../suura/poto/culture4.jpg'
import four from '../suura/poto/culture.jpg'
import five from '../suura/poto/tour1.jpg'
import seven from '../suura/poto/hotel.jpg'
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Read from '../otc/read'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Toper from '../otc/scroler'
import geda2 from '../suura/poto/entoto.jpg';
import bird2 from '../suura/poto/bird2.jpg';
import lake2 from '../suura/poto/bird2.jpg'
import hotel2 from '../suura/poto/hotel.jpg';
import tour2 from '../suura/poto/tour2.jpg';
import animal2 from '../suura/poto/animal.jpg';
import geda3 from '../suura/poto/geda2.jpg';
import bird3 from '../suura/poto/bird3.jpg';


const { SubMenu } = Menu;


const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {


  const [isActive, setIsactive] = useState(false);
  const [show, setShow] = useState(true)
  const [choice, setChoice] = useState(true)
  const [drowerValue, setDrowerValue] = useState('');
  const [menuColor, setMenuColor] = useState('white')

  const { Search } = Input;

  const layout = () => {
    if (window.innerWidth < 991) {
      setDrowerValue('column')
      setShow(false)
      setChoice(false)
      setMenuColor('#f241419e')
    } else {
      setDrowerValue('row')
      setShow(true)
    }
  }

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.addEventListener('click', clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const [hover, setHover] = useState(false)
  const [color, setColor] = useState()
  const [expand, setExpand] = useState(false)
  const [seted, setSeted] = useState({
    image: null,
    name: null,
    discription: null,
    more: null
  })
  const menu = (
    <Menu>
      <SubMenu title="Birds">
        <Menu.Item>3rd menu item</Menu.Item>
        <Menu.Item>4th menu item</Menu.Item>
      </SubMenu>
      <SubMenu title="Animals" >
        <Menu.Item>5d menu item</Menu.Item>
        <Menu.Item>6th menu item</Menu.Item>
      </SubMenu>
    </Menu>
  );
  const todo = [
    { imgPath: hotel2, title: 'Book Your Hotel Online', content: 'Choose What suits your need before coming', body: 'Choose From a Wide Range of Properties Which Booking.com Offers. Search Now! Find What You Need At Booking.Com, The Biggest Travel Site In The World. No Booking Fees. Read Real Guest Reviews. Best Price Guarantee. 24/7 Customer Service.' },
    { imgPath: tour2, title: 'Find A Tour Guide', content: 'most highly rated Tours :leyu ethiopia tour', body: 'They are experts on the history of the location and offer their tour groups interesting or enlightening information about points of interest at nature attractions, historic sites, museums, scenic locations, and other travel destinations.' },
    { imgPath: animal2, title: 'Capture Moments and Share your Expiriance', content: 'Bring Your Cameras and Binoculars', body: 'To Further your Expirance While on Your tour, bring such equipments to caputre images, record your stay and look beyond what your eyes could see' },

  ]
  const tosee = [
    { title: 'Book Your Hotel Online', content: 'Choose What suits your need before coming', body: 'Choose From a Wide Range of Properties Which Booking.com Offers. Search Now! Find What You Need At Booking.Com, The Biggest Travel Site In The World. No Booking Fees. Read Real Guest Reviews. Best Price Guarantee. 24/7 Customer Service.' },
    { title: 'Find A Tour Guide', content: 'most highly rated:Liyu Ethiopia Tours', body: 'They are experts on the history of the location and offer their tour groups interesting or enlightening information about points of interest at nature attractions, historic sites, museums, scenic locations, and other travel destinations.' },
    { title: 'Capture Moments and Share your Expiriance', content: 'Bring Your Cameras and Binoculars', body: 'To Further your Expirance While on Your tour, bring such equipments to caputre images, record your stay and look beyond what your eyes could see' },

  ]
  const visitoromia = [
    { imgPath: bird3, title: '', content: 'Birds and Wildlife' },
    { imgPath: tree, title: '', content: 'Holydays and culture,', body: 'They are experts on the history of the location and offer their tour groups interesting or enlightening information about points of interest at nature attractions, historic sites, museums, scenic locations, and other travel destinations.' },
    { imgPath: geda3, title: '', content: 'Museums and History', body: 'To Further your Expirance While on Your tour, bring such equipments to caputre images, record your stay and look beyond what your eyes could see' },
    { imgPath: lake2, title: '', content: 'Lakes and mountains', body: 'To Further your Expirance While on Your tour, bring such equipments to caputre images, record your stay and look beyond what your eyes could see' },

  ]
  const visit = [
    { imgPath: bird2, title: '', content: 'indigenous bird Yellow-fronted parrot' },
    { imgPath: tree, title: '', content: 'Irreechaa on next Sunday, October 4, 2021 ', body: 'They are experts on the history of the location and offer their tour groups interesting or enlightening information about points of interest at nature attractions, historic sites, museums, scenic locations, and other travel destinations.' },
    { imgPath: geda2, title: '', content: 'Entoto park', body: 'To Further your Expirance While on Your tour, bring such equipments to caputre images, record your stay and look beyond what your eyes could see' },
    { imgPath: lake2, title: '', content: 'wenchi lake on progression', body: 'To Further your Expirance While on Your tour, bring such equipments to caputre images, record your stay and look beyond what your eyes could see' },

  ]
  const attend = [
    { title: 'Book Your Hotel Online', content: 'Choose What suits your need before coming', body: 'Choose From a Wide Range of Properties Which Booking.com Offers. Search Now! Find What You Need At Booking.Com, The Biggest Travel Site In The World. No Booking Fees. Read Real Guest Reviews. Best Price Guarantee. 24/7 Customer Service.' },
    { title: 'Find A Tour Guide', content: 'Choose from our wide varaity of tour guides ', body: 'They are experts on the history of the location and offer their tour groups interesting or enlightening information about points of interest at nature attractions, historic sites, museums, scenic locations, and other travel destinations.' },
    { title: 'Capture Moments and Share your Expiriance', content: 'Bring Your Cameras and Binoculars', body: 'To Further your Expirance While on Your tour, bring such equipments to caputre images, record your stay and look beyond what your eyes could see' },

  ]
  const expiriance = [
    { title: 'Book Your Hotel Online', content: 'Choose What suits your need before coming', body: 'Choose From a Wide Range of Properties Which Booking.com Offers. Search Now! Find What You Need At Booking.Com, The Biggest Travel Site In The World. No Booking Fees. Read Real Guest Reviews. Best Price Guarantee. 24/7 Customer Service.' },
    { title: 'Find A Tour Guide', content: 'Choose from our wide varaity of tour guides ', body: 'They are experts on the history of the location and offer their tour groups interesting or enlightening information about points of interest at nature attractions, historic sites, museums, scenic locations, and other travel destinations.' },
    { title: 'Capture Moments and Share your Expiriance', content: 'Bring Your Cameras and Binoculars', body: 'To Further your Expirance While on Your tour, bring such equipments to caputre images, record your stay and look beyond what your eyes could see' },

  ]

  const contentToDo = (
    <Grid container style={{ backgroundColor: 'white' }}>{
      todo.map(item => (
        <Grid item xs={12} md={4}>
          <Card className={classes.root} variant="outlined" style={{ backgroundColor: '#00000000' }}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="h5" component="h2">
                {item.content}
              </Typography>
              <CardMedia
                style={{ height: 0, paddingTop: '56.25%' }}
                image={`${item.imgPath}`}
                title="Paella dish"
              />
              <Typography variant="body2" component="p">

                <br />
                <Dropdown overlay={menu}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Quick Link <DownOutlined />
                  </a>
                </Dropdown>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

      ))
    }
    </Grid>
  );

  const contentVisit = (
    <div>
      <Grid container style={{ backgroundColor: 'white' }}>{
        visitoromia.map(item => (
          <Grid item xs={12} md={3}>
            <Card className={classes.root} variant="outlined" style={{ backgroundColor: '#00000000' }}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="h5" component="h2">
                  {item.content}
                </Typography>
                <CardMedia
                  style={{ height: 0, paddingTop: '56.25%' }}
                  image={`${item.imgPath}`}
                  title="Paella dish"
                />
                <Typography className={classes.pos} color="textSecondary">

                </Typography>
                <Typography variant="body2" component="p">


                  <br />
                  <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                      Quick Link <DownOutlined />
                    </a>
                  </Dropdown>
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

        ))
      }

      </Grid>

    </div>
  );
  const contentAttend = (
    <Grid container style={{ backgroundColor: 'white' }}>{
      visit.map(item => (
        <Grid item xs={12} md={3}>
          <Card className={classes.root} variant="outlined" style={{ backgroundColor: '#00000000' }}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="h5" component="h2">
                {item.content}
              </Typography>
              {/* <div style={{
                backgroundImage: `url(${item.imgPath})`, width: '100%', height: '200px', backgroundSize: 'contain',
              }} alt="Logo" >

              </div>             */}

              <CardMedia
                style={{ height: 0, paddingTop: '56.25%' }}
                image={`${item.imgPath}`}
                title="Paella dish"
              />
              <Typography className={classes.pos} color="textSecondary">

              </Typography>
              <Typography variant="body2" component="p">


                <br />
                <Dropdown overlay={menu}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Quick Link <DownOutlined />
                  </a>
                </Dropdown>
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

      ))
    }
    </Grid >
  );

  const contentExpiriance = (
    <Grid container style={{ backgroundColor: 'white' }}>{
      visit.map(item => (
        <Grid item xs={12} md={3}>
          <Card className={classes.root} variant="outlined" style={{ backgroundColor: '#00000000' }}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="h5" component="h2">
                {item.content}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">

              </Typography>
              <Typography variant="body2" component="p">
                <Cards />

                <br />
                <Dropdown overlay={menu}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Quick Link <DownOutlined />
                  </a>
                </Dropdown>
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

      ))
    }
    </Grid>
  );


  const toggleHoverOne = () => {
    setHover(true)
    setColor(one)
    setSeted({ image: one, name: 'Red Fox', discription: 'The red fox is the largest of the true foxes and one of the most widely distributed members of the order Carnivora, being present across the entire Northern Hemisphere including most of North America, Europe and Asia, plus parts of North Africa. It is listed as least concern by the IUCN', more: 'https://g.co/kgs/184hny' })
  }
  const toggleHoverTwo = () => {
    setHover(true)
    setColor(two)
    setSeted({ image: two, name: 'Holqa Soof Umar(Sof Omar Cave)', discription: 'Sof Omar Cave is the longest cave in Ethiopia at 15.1 kilometres long. When surveyed in 1972, it was the longest cave in Africa. Since then explorations in Algeria and Madagascar have overtaken it', more: 'https://g.co/kgs/184hny' })

  }
  const toggleHoverThree = () => {
    setHover(true)
    setColor(tree)
    setSeted({ image: tree, name: 'Gadaa (older spelling: Gada; literally: era)', discription: 'The statue represents Oromo cultural leader, Aba geda, and his. wife. Geda is an ingenious system of administration of the Oromo society and it is also the ingenious democracy of Africa where power is culturally shifted after eight years of administration. ', more: 'https://g.co/kgs/184hny' })

  }

  const onSearch = value => {
    console.log(value)
  };
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  const list = (anchor) => (
    <div
      style={{
        backgroundColor: '#f24141', width: '100%', position: 'fixed', height: '100%', overflowY: 'hidden', overflowX: 'hidden'
      }}
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"

      onKeyDown={toggleDrawer(anchor, false)}

    >
      <Tooltip title="close" style={{ marginLeft: '80%', marginTop: 10 }} onClick={toggleDrawer(anchor, false)}>
        <Fab color="white" >
          <CloseIcon />
        </Fab>
      </Tooltip>

      <Toper />
    </div>
  );
  // <Grid container style={{ marginLeft: '10%', flexDirection: drowerValue, marginTop: '5%' }}>
  //       <Grid item xs={4}>
  //         <List>
  //           {[<Typography style={{ fontSize: 40, color: 'white' }} onMouseEnter={toggleHoverOne}>Birds and Wild Life</Typography>, <Typography style={{ fontSize: 40, color: 'white' }} onMouseEnter={toggleHoverTwo}>Holydays and culture</Typography>, <Typography style={{ fontSize: 40, color: 'white' }} onMouseEnter={toggleHoverThree}>Museums and history</Typography>, <Typography style={{ fontSize: 40, color: 'white' }} onMouseEnter={toggleHoverOne}>Lakes and mountains</Typography>].map((text, index) => (
  //             <ListItem button key={text} style={{ marginBottom: '10%' }}>
  //               {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
  //               <ListItemText primary={text} />
  //             </ListItem>
  //           ))}
  //         </List>
  //       </Grid>
  //       {show === true ? 
  //       <Grid item xs={4} style={{marginLeft: '15%', backgroundImage: `url(${color})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}}>
  //         {seted.image ?
  //         <Read image={seted.image} discription={seted.discription} name={seted.name} more={seted.more}/>
  //         :
  //         <></>}
  //       </Grid>: 
  //       <></>}
  //     </Grid>


  useEffect(() => {
    layout()
  }, [drowerValue])

  return (
    <header
      {...props}
      className={classes}
      style={{ backgroundColor: '#f241419e' }}
    >
      <div style={{ marginLeft: '3%' }}>
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          {/* <Logo /> */}

          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
                style={{ color: 'black' }}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>

              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner" >

                  {!hideSignin &&
                    <ul
                      className="list-reset header-nav-left"
                    >
                      <li>
                        {['Menu',].map((anchor) => (
                          <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)} style={{ color: menuColor }}><ListIcon />{anchor}</Button>
                            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                              {list(anchor)}
                            </Drawer>
                          </React.Fragment>
                        ))}
                      </li>
                      <li>
                        {choice === true ?
                          <div>
                            <Popover color="#ffffffcf" content={contentToDo} ><Link to="/" className="button button-primary button-wide-mobile button" style={{ backgroundColor: '#f1f3f400', color: 'white' }}>What to do</Link></Popover>
                            {/* <Popover color="#ffffffcf" content={contentToSee} ><Link to="/" className="button button-primary button-wide-mobile button" style={{backgroundColor: '#f1f3f400', color: '#F24141'}}>What to see</Link></Popover> */}
                            <Popover color="#ffffffcf" content={contentVisit} ><Link to="/" className="button button-primary button-wide-mobile button" style={{ backgroundColor: '#f1f3f400', color: 'white' }}>Visit Oromia</Link></Popover>
                            <Popover color="#ffffffcf" content={contentAttend}><Link to="/" className="button button-primary button-wide-mobile button" style={{ backgroundColor: '#f1f3f400', color: 'white' }}>Attend Events</Link></Popover>
                            <Popover color="#ffffffcf" content={contentExpiriance} ><Link to="/Progress" className="button button-primary button-wide-mobile button" style={{ backgroundColor: '#f1f3f400', color: 'white' }}>Experiences</Link></Popover>
                            <Popover color="#ffffffcf" content={contentExpiriance} ><Link to="/" className="button button-primary button-wide-mobile button" style={{ backgroundColor: '#f1f3f400', color: 'white' }}>Invest in Oromia</Link></Popover>

                            {expand === true ? <Search placeholder="Search Destinations" style={{ width: 200, padding: '1%' }} /> : <></>}
                            {expand === false ? <IconButton onClick={() => setExpand(true)}><IconSearch
                              style={{ color: 'white', margin: '5%' }}  

                            />
                            </IconButton> : <></>}
                          </div> : <div>
                            <li><Popover color="#ffffffcf" content={contentToDo} ><Link to="/" className="button button-primary button-wide-mobile button" style={{ backgroundColor: '#f1f3f400', color: '#f241419e' }}>What to do</Link></Popover></li>
                            {/* <li><Popover color="#ffffffcf" content={contentToSee}><Link to="/" className="button button-primary button-wide-mobile button" style={{backgroundColor: '#f1f3f400', color: '#F24141'}}>What to see</Link></Popover></li> */}
                            <li><Popover color="#ffffffcf" content={contentVisit}><Link to="/" className="button button-primary button-wide-mobile button" style={{ backgroundColor: '#f1f3f400', color: '#F24141' }}>Visit Oromia</Link></Popover></li>
                            <li><Popover color="#ffffffcf" content={contentAttend}><Link to="/" className="button button-primary button-wide-mobile button" style={{ backgroundColor: '#f1f3f400', color: '#F24141' }}>Attend Events</Link></Popover></li>
                            <li><Popover color="#ffffffcf" content={contentExpiriance} ><Link to="/" className="button button-primary button-wide-mobile button" style={{ backgroundColor: '#f1f3f400', color: '#F24141' }}>Invest in Oromia</Link></Popover></li>
                            <li><Popover color="#ffffffcf" content={contentExpiriance} ><Link to="/" className="button button-primary button-wide-mobile button" style={{ backgroundColor: '#f1f3f400', color: '#F24141' }}>Experiences</Link></Popover></li>
                            <li>{expand === true ? <Search placeholder="Search Destinations" style={{ width: 200, padding: '1%', }} /> : <></>}
                              {expand === false ? <IconButton onClick={() => setExpand(true)}><IconSearch
                                style={{ color: '#f241419e', margin: '5%' }}

                              />
                              </IconButton> : <></>}</li>
                          </div>}
                      </li>
                    </ul>}
                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;