import React from 'react'
import ReactDOM from 'react-dom'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import one from '../suura/poto/animal.jpg'
import two from '../suura/poto/env.jpg'
import tree from '../suura/poto/culture4.jpg'
import four from '../suura/poto/culture.jpg'
import five from '../suura/poto/tour1.jpg'
import seven from '../suura/poto/hotel.jpg'
import bird from '../../assets/svgIcons/dove.svg'
import fox from '../../assets/svgIcons/fox.svg'
import mountain from '../../assets/svgIcons/mountain.jpg'
import birds from '../../assets/svgIcons/bird.jpg'
import {Grid} from '@material-ui/core'
import Wild from './list/wild'
import Holy from './list/holy'
import  Lake from './list/lake'
import './toper.css'

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>

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

export default class App extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={3}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={bird} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={fox} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={fox} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={fox} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={fox} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={fox} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={fox} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
            {/* <img src={url('earth')} style={{ width: '60%' }} /> */}
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true)
          }}
        /> */}
        <ParallaxLayer  
          offset={0}
          speed={0.1}
          // onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Grid container>
              <Grid item xs={12} md={4}>
                <h1 style={{color: 'white', paddingLeft: '20%'}}>Birds and wildlife</h1>
              </Grid>
              <Grid item item xs={12} md={8}>
                <Wild />
              </Grid>
            </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          // onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Grid container>
              <Grid item xs={12} md={4}>
                <h1 style={{color: 'white', paddingLeft: '20%'}}>Holydays and culture</h1>
              </Grid>
              <Grid item item xs={12} md={8}>
                <Holy />
              </Grid>
            </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          // onClick={() => this.parallax.scrollTo(0)}
          >
          <Grid container>
              <Grid item xs={12} md={4}>
                <h1 style={{color: 'white', paddingLeft: '20%'}}>Lakes and mountains</h1>
              </Grid>
              <Grid item item xs={12} md={8}>
                <Lake />
              </Grid>
            </Grid>        
            </ParallaxLayer>
            
      </Parallax>
    )
  }
}