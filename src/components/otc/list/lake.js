import React, { Component } from 'react'
import { config } from 'react-spring/renderprops'
import Grid from './Grid'
import { Slug, Fade } from './Primitives'
import './styles.css'
import 'antd/dist/antd.css'
import one from '../../suura/poto/animal.jpg'
import two from '../../suura/poto/env.jpg'
import tree from '../../suura/poto/culture4.jpg'
import four from '../../suura/poto/culture.jpg'
import five from '../../suura/poto/tour1.jpg'
import seven from '../../suura/poto/hotel.jpg'

const data = [
  {
    name: 'Rare Wind',
    description: '#a8edea → #fed6e3',
    css: one,
    height: 100,
  },
  {
    name: 'Saint Petersburg',
    description: '#f5f7fa → #c3cfe2',
    css: two,
    height: 200,
  },
  {
    name: 'Deep Blue',
    description: '#e0c3fc → #8ec5fc',
    css: tree,
    height: 200,
  },
  {
    name: 'Ripe Malinka',
    description: '#f093fb → #f5576c',
    css: four,
    height: 200,
  },
  {
    name: 'Perfect White',
    description: '#fdfbfb → #ebedee',
    css: five,
    height: 200,
  },
  {
    name: 'Near Moon',
    description: '#5ee7df → #b490ca',
    css: 'linear-gradient(to top, #5ee7df 0%, #b490ca 100%)',
    height: 200,
  },
  {
    name: 'Wild Apple',
    description: '#d299c2 → #fef9d7',
    css: 'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)',
    height: 100,
  },
  {
    name: 'Ladoga Bottom',
    description: '#ebc0fd → #d9ded8',
    css: 'linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)',
    height: 200,
  },
  {
    name: 'Sunny Morning',
    description: '#f6d365 → #fda085',
    css: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
    height: 100,
  },
  {
    name: 'Lemon Gate',
    description: '#96fbc4 → #f9f586',
    css: 'linear-gradient(to top, #96fbc4 0%, #f9f586 100%)',
    height: 200,
  },
  {
    name: 'Salt Mountain',
    description: ' #FFFEFF → #D7FFFE',
    css: 'linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)',
    height: 100,
  },
  {
    name: 'New York',
    description: ' #fff1eb → #ace0f9',
    css: 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)',
    height: 200,
  },
  {
    name: 'Soft Grass',
    description: ' #c1dfc4 → #deecdd',
    css: 'linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)',
    height: 200,
  },
  {
    name: 'Japan Blush',
    description: ' #ddd6f3 → #faaca8',
    css: 'linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)',
    height: 100,
  },
]

class Cell extends Component {
  render() {
    const { toggle, name, description, css, active } = this.props
    return (
      <div
        className="cell"
        style={{ backgroundImage: `url(${css})`, cursor: !active ? 'pointer' : 'auto' }}
        onClick={!active ? toggle : undefined}>
        <Fade show={active} delay={active ? 500 : 0}>
          <div className="details">
            <Slug delay={600}>
              {/* <div className="circle" style={{ backgroundImage: `url(${css})` }} /> */}
              <div className="close">
                {/* <Icon
                  type="close"
                  style={{ cursor: 'pointer' }}
                  onClick={toggle}
                /> */}
              </div>
              <h1>{name}</h1>
              <p>{description}</p>
            </Slug>
          </div>
        </Fade>
        <Fade
          show={!active}
          from={{ opacity: 0, transform: 'translate3d(0,140px,0)' }}
          enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
          leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
          delay={active ? 0 : 400}>
          <div className="default">
            <div style={{ zIndex: 1 }}>{name}</div>
          </div>
        </Fade>
      </div>
    )
  }
}

export default class Lake extends Component {
  state = { data }
  render() {
    return (
      <Grid
        className="grid"
        // Arbitrary data, should contain keys, possibly heights, etc.
        data={this.state.data}
        // Key accessor, instructs grid on how to fet individual keys from the data set
        keys={d => d.name}
        // Can be a fixed value or an individual data accessor
        heights={d => d.height}
        // Number of columns
        columns={2}
        // Space between elements
        margin={30}
        // Removes the possibility to scroll away from a maximized element
        lockScroll={false}
        // Delay when active elements (blown up) are minimized again
        closeDelay={500}
        // Regular react-spring configs
        config={config.slow} style={{height: 500, overflowX: 'hidden', overflowY: 'auto'}}>
        {(data, active, toggle) => (
          <Cell {...data} active={active} toggle={toggle} />
        )}
      </Grid>
    )
  }
}