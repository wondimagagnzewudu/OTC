// import React, { Component } from 'react'
// import { config } from 'react-spring/renderprops'
// import Grid from '../otc/list/Grid'
// import { Slug, Fade } from '../otc/list/Primitives'
// import '../otc/list/styles.css'
// import 'antd/dist/antd.css'
// import { CloseOutlined} from '@material-ui/icons'
// import one from '../suura/poto/animal.jpg'
// import two from '../suura/poto/env.jpg'
// import tree from '../suura/poto/culture4.jpg'
// import four from '../suura/poto/culture.jpg'
// import five from '../suura/poto/tour1.jpg'
// import seven from '../suura/poto/hotel.jpg'
// import eight from '../suura/birds/1.jpg'
// import eight1 from '../suura/birds/2.jpg'
// import eight2 from '../suura/birds/3.jpg'
// import eight3 from '../suura/birds/4.jpg'
// import eight4 from '../suura/birds/5.jpg'
// import eight5 from '../suura/birds/6.jpg'
// import eight6 from '../suura/birds/7.jpg'
// import eight7 from '../suura/birds/8.jpg'
// import eight8 from '../suura/birds/9.jpg'
// import eight9 from '../suura/birds/10.jpg'




// const data = [
//   {
//     name: 'Rare Wind',
//     description: '#a8edea → #fed6e3',
//     css: eight9,
//     height: 100,
//   },
//   {
//     name: 'Saint Petersburg',
//     description: '#f5f7fa → #c3cfe2',
//     css: eight8,
//     height: 200,
//   },
//   {
//     name: 'Deep Blue',
//     description: '#e0c3fc → #8ec5fc',
//     css: tree,
//     height: 200,
//   },
//   {
//     name: 'Ripe Malinka',
//     description: '#f093fb → #f5576c',
//     css: four,
//     height: 200,
//   },
//   {
//     name: 'Perfect White',
//     description: '#fdfbfb → #ebedee',
//     css: five,
//     height: 200,
//   },
//   {
//     name: 'Near Moon',
//     description: '#5ee7df → #b490ca',
//     css: seven,
//     height: 200,
//   },
//   {
//     name: 'Wild Apple',
//     description: '#d299c2 → #fef9d7',
//     css: eight,
//     height: 100,
//   },
//   {
//     name: 'Ladoga Bottom',
//     description: '#ebc0fd → #d9ded8',
//     css: eight1,
//     height: 200,
//   },
//   {
//     name: 'Sunny Morning',
//     description: '#f6d365 → #fda085',
//     css: eight2,
//     height: 100,
//   },
//   {
//     name: 'Lemon Gate',
//     description: '#96fbc4 → #f9f586',
//     css: eight3,
//     height: 200,
//   },
//   {
//     name: 'Salt Mountain',
//     description: ' #FFFEFF → #D7FFFE',
//     css: eight4,
//     height: 100,
//   },
//   {
//     name: 'New York',
//     description: ' #fff1eb → #ace0f9',
//     css: eight5,
//     height: 200,
//   },
//   {
//     name: 'Soft Grass',
//     description: ' #c1dfc4 → #deecdd',
//     css: eight6,
//     height: 200,
//   },
//   {
//     name: 'Japan Blush',
//     description: ' #ddd6f3 → #faaca8',
//     css: eight7,
//     height: 100,
//   },
// ]

// class Cell extends Component {
//   render() {
//     const { toggle, name, description, css, active } = this.props
//     return (
//       <div
//         className="cell"
//         style={{ backgroundImage: `url(${css})`, cursor: !active ? 'pointer' : 'auto', flex: 1 , width: '100%'}}
//         onClick={!active ? toggle : undefined}>
//         <Fade show={active} delay={active ? 500 : 0}>
//           <div style={{width: '100%', height: 600}}>
//             <Slug delay={600}>
//               {/* <div className="circle" style={{ backgroundImage: `url(${css})` }} /> */}
//               <div className="close">
//                 <CloseOutlined
//                   type="close"
//                   style={{ cursor: 'pointer' }}
//                   onClick={toggle}
//                 />
//               </div>
//               <h1>{name}</h1>
//               <p>{description}</p>
//             </Slug>
//           </div>
//         </Fade>
//         <Fade
//           show={!active}
//           from={{ opacity: 0, transform: 'translate3d(0,140px,0)' }}
//           enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
//           leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
//           delay={active ? 0 : 400}>
//           <div className="default">
//             <div style={{ zIndex: 1 }}>{name}</div>
//           </div>
//         </Fade>
//       </div>
//     )
//   }
// }

// export default class Hero extends Component {
//   state = { data }
//   render() {
//     return (
//       <Grid
//         className="grid"
//         // Arbitrary data, should contain keys, possibly heights, etc.
//         data={this.state.data}
//         // Key accessor, instructs grid on how to fet individual keys from the data set
//         keys={d => d.name}
//         // Can be a fixed value or an individual data accessor
//         heights={d => d.height}
//         // Number of columns
//         columns={2}
//         // Space between elements
//         margin={30}
//         // Removes the possibility to scroll away from a maximized element
//         lockScroll={false}
//         // Delay when active elements (blown up) are minimized again
//         closeDelay={500}
//         // Regular react-spring configs
//         config={config.slow}
//         style={{margin: '2%'}}
//         >
//         {(data, active, toggle) => (
//           <Cell {...data} active={active} toggle={toggle} />
//         )}
//       </Grid>
//     )
//   }
// }

import React from 'react';
import {Grid, Button} from '@material-ui/core'
import {NavigateNext} from '@material-ui/icons'

export default function Hero({video, desired}) {
  return (

    <Grid container style={{padding: '3%'}} spacing={1}>
      <Grid item xs={3}>
        <p style={{color: 'red', fontSize: 30}}>Lake Wenchi</p>
        <p style={{color: 'gray', fontSize: 16}}> Wilde animals and birds of various species includin gendemics.Discovered and undiscovered caves,Prehistoric physical remains and Poleoanthropological Site like Awash Malka Qunture are among valuable heritage in Oromia .</p>
        <Button style={{backgroundColor: '#5caf25', color: 'white'}}><NavigateNext /></Button>
      </Grid>
      <Grid item xs={9} padding >
      <video className='videoTag' autoPlay loop muted style={{borderRadius: 400}}>
        <source src={video} type='video/mp4' />
      </video>
      </Grid>
    </Grid>
   
  );
}
