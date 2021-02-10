import React, { useState, useCallback, useEffect }  from 'react'
import { useTransition, animated, config } from 'react-spring'
import Grid from '@material-ui/core/Grid'
import one from '../suura/poto/Wonchi_Lake_of_Ethiopia.jpg'
import two from '../suura/poto/fox.jpg'
import tree from '../suura/poto/bale-mountains-park-ethiopia-1920x1080.jpg'
import four from '../suura/poto/bale3.jpg'
import five from '../suura/poto/bale2.jpg'
import {Button} from '@material-ui/core'
import './modalStyle.css'
import Text from './text'
import Slide from '../sections/Slide'


export default function TopImageContainer() {
  const [show, setShow] = useState(true)
  const [height, setHeight] = useState(700)
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])

  const layout = () => {
    if (window.innerWidth < 991) {
      setShow(false)
      setHeight(500)
    } else {
      setShow(true)
    }
  }
  const slides = [
    { id: 0, url: five, title: 'Natural Magic', description: 'Qui sit esse ipsum ullamco labore dolore commodo dolore Lorem labore aute.', first: 'Beauty', second: 'Magical', third: 'Love', four: 'Magical', five: 'Nature', six: 'Diversity', seven: '', eight: '', nine: '' },
    { id: 1, url: five, title: 'Diverse Beauty', description: 'Et nulla cupidatat in deserunt tempor laborum.', first: 'Beauty', second: 'magical', third: 'Love', four: 'Magical', five: 'Nature', six: 'Diversity', seven: '', eight: '', nine: '' },
    { id: 2, url: tree , title: 'Natural Magic', description: 'Cupidatat exercitation dolor esse exercitation laborum.', first: 'Beauty', second: 'Majic', third: 'Love', four: 'Magical', five: 'Nature', six: 'Diversity', seven: '', eight: '', nine: '' },
  ]
  

  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % 3), 20000), [])
  
  useEffect(() => void layout(), [])

  return (
    <div className="simple-trans-main">
    {transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="bg"
      onClick={() => onClick()}
      style={{ ...props, backgroundImage: `url(${item.url}`, width: '100%', height: height}}
    >
      <Grid container spacing={2} >
        <Grid item xs={12} md={6} >
          <div style={{backgroundColor: '#9cc1d900', padding: '6%', marginTop: '40%'}}>
              <div> 
                <p style={{fontWeight: 'bolder', fontSize: 30, color: 'white'}}>{item.four}</p>
              </div>
              {show ===true ?<p style={{color: 'white'}}>{item.description}</p>: <></>}
            <Button style={{backgroundColor: '#F24141', color: 'white'}}>Read More</Button>
          </div>
       </Grid> 
       {show === true ? 
       <Grid item xs={12} style={{marginTop: '8%', backgroundColor: '#9cc1d900'}} md={4} >
          
       </Grid> : <></>} 
       </Grid>
    </animated.div>))}
    {show === false ? <div style={{marginTop: 500}}></div> : <></>}
  </div>
  )
}
