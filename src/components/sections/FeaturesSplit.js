import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import { useSpring, animated as a , useTransition, config} from 'react-spring'
import '../otc/styles.css'
import { Divider, Tabs, Typography } from 'antd';
import one from './../../assets/images/Sof-Omar-2.jpg'
import two from './../../assets/images/1.jpg'
import three from './../../assets/images/2.jpg'
import four from './../../assets/images/3.jpeg'
import packag from '../suura/package.jpg'
import { Rate } from 'antd';
import Carousel from 'react-material-ui-carousel'

import { MapContainer, TileLayer, Marker, Popup,  LayersControl, LayerGroup, Circle, FeatureGroup, Rectangle } from 'react-leaflet'  
import Body from './Body'
const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}
const { TabPane } = Tabs;
const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );
  const slides = [
    { id: 0, url: one },  
    { id: 1, url: two },
    { id: 2, url: three },
    { id: 3, url: four },
    
  ]

  let datas =[
    {hotel: two, tips: '', name: '',title: 'Birds and wildlife', image: one, about: 'Discovered and undiscovered caves,Prehistoric physical remains and Poleoanthropological Site like Awash Malka Qunture are among valuable heritage in Oromia .',},
    {hotel: two, tips: '', name: '',title: 'Birds and wildlife', image: one, about: 'Discovered and undiscovered caves,Prehistoric physical remains and Poleoanthropological Site like Awash Malka Qunture are among valuable heritage in Oromia .',}, 
    {hotel: two, tips: '', name: '',title: 'Birds and wildlife', image: one, about: 'Discovered and undiscovered caves,Prehistoric physical remains and Poleoanthropological Site like Awash Malka Qunture are among valuable heritage in Oromia .',}
  ] 


  let datas2 = [
    {hotel: two, tips: '', name: '',title: 'HolyDays and culture', image: two, about: 'Discovered and undiscovered caves,Prehistoric physical remains and Poleoanthropological Site like Awash Malka Qunture are among valuable heritage in Oromia .',  },
    {hotel: two, tips: '', name: '',title: 'HolyDays and culture', image: two, about: 'Discovered and undiscovered caves,Prehistoric physical remains and Poleoanthropological Site like Awash Malka Qunture are among valuable heritage in Oromia .',  },
    {hotel: two, tips: '', name: '',title: 'HolyDays and culture', image: two, about: 'Discovered and undiscovered caves,Prehistoric physical remains and Poleoanthropological Site like Awash Malka Qunture are among valuable heritage in Oromia .',  },


  ]
  

  let datas3 = [
    {hotel: two, tips: '', name: '',title: 'Museums and history ', image: three, about: 'Discovered and undiscovered caves,Prehistoric physical remains and Poleoanthropological Site like Awash Malka Qunture are among valuable heritage in Oromia .', },
    {hotel: two, tips: '', name: '',title: 'Museums and history ', image: three, about: 'Discovered and undiscovered caves,Prehistoric physical remains and Poleoanthropological Site like Awash Malka Qunture are among valuable heritage in Oromia .', },
    {hotel: two, tips: '', name: '',title: 'Museums and history ', image: three, about: 'Discovered and undiscovered caves,Prehistoric physical remains and Poleoanthropological Site like Awash Malka Qunture are among valuable heritage in Oromia .', },  
  ]
  

  let datas4 =  [
    {title: 'Lakes and mountains', image: four, about: 'Discovered and undiscovered caves,Prehistoric physical remains and Poleoanthropological Site like Awash Malka Qunture are among valuable heritage in Oromia .', },
    {title: 'Lakes and mountains', image: four, about: 'Discovered and undiscovered caves,Prehistoric physical remains and Poleoanthropological Site like Awash Malka Qunture are among valuable heritage in Oromia .', },
    {title: 'Lakes and mountains', image: four, about: 'Discovered and undiscovered caves,Prehistoric physical remains and Poleoanthropological Site like Awash Malka Qunture are among valuable heritage in Oromia .', },

  ]
  

  const sectionHeader = {
    // title: 'Tourism Site of Oromia',
    // paragraph: 'Oromia is a home of wild life due to incredible habitat variety that gives huge advantage for a great number of mammals and bird species  including most of the Ethiopia endemics  with an amazing heritage and culture.'
  };
  const [dat, setDatas] = useState(datas)
  const [index, setChange] = useState(0)
  const [flipped, set] = useState(false)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })  
  const [marginmobile, setMarginMobile] = useState(500)
  const [active, setActive] = useState(datas.about)
  const [active1, setActive1] = useState(datas.about1)
  const position = [51.505, -0.09]


  const layout =() =>{
    if (window.innerWidth < 991){
      setMarginMobile(0)
    } else {
      setMarginMobile(660)
    }
  }

  const setActives = (value) => {
    setActive(value)
  }
  const setActives1 = (value) => {
    setActive1(value)
  }
  

  const map = (value) => {
    const center = [51.505, -0.09]
const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
]
    
    return (
      <MapContainer center={center} zoom={13} scrollWheelZoom={false} style={{height: 200}}>
    <LayersControl position="topright">
      <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
      <LayersControl.Overlay name="Marker with popup">
        <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </LayersControl.Overlay>
      <LayersControl.Overlay checked name="Layer group with circles">
        <LayerGroup>
          <Circle
            center={center}
            pathOptions={{ fillColor: 'blue' }}
            radius={200}
          />
          <Circle
            center={center}
            pathOptions={{ fillColor: 'red' }}
            radius={100}
            stroke={false}
          />
          <LayerGroup>
            <Circle
              center={[51.51, -0.08]}
              pathOptions={{ color: 'green', fillColor: 'green' }}
              radius={100}
            />
          </LayerGroup>
        </LayerGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Feature group">
        <FeatureGroup pathOptions={{ color: 'purple' }}>
          <Popup>Popup in FeatureGroup</Popup>
          <Circle center={[51.51, -0.06]} radius={200} />
          <Rectangle bounds={rectangle} />
        </FeatureGroup>
      </LayersControl.Overlay>
    </LayersControl>
  </MapContainer>
    )
  }

 

  const onNext = (obj)=>{
    setDatas(obj)

  }

  useEffect(() => layout(), [10])
  
  useEffect(() => void setInterval(() => setChange(state => (state + 1) % 4), 2000), [])
  useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 2000), [])

  


  return (
    <section
      {...props}
      className={outerClasses}
      style={{marginTop: marginmobile, marginLeft: '3%', marginRight: '3%'}}

    >
      
      <h1 className="mt-0 mb-2" >Popular Destinations</h1>
      <p style={{color: 'gray', fontSize: 14, backgroundColor: 'white', padding: '1%'}}>Our most Visited sites with their pacakges and Ratings  <a onClick={() =>onNext(datas)} style={{fontSize: 14, color: '#F24141', backgroundColor: 'white', padding: '1%'}}>Birds and Wildlife </a> <a onClick={() =>onNext(datas2)} style={{fontSize: 14, color: '#F24141', backgroundColor: '#white', padding: '1%'}}>Holiday's and Culture </a><a onClick={() =>onNext(datas3)} style={{fontSize: 14, color: '#F24141', backgroundColor: 'white', padding: '1%'}}>Museums and History </a><a onClick={() =>onNext(datas4)} style={{fontSize: 14, color: '#F24141', backgroundColor: 'white', padding: '1%'}}>Lakes and Mountains</a></p>
      <Divider /> 
      <div
        style={{marginLeft: '7%', marginRight: '7%'}}
      >
      <Carousel>
        {dat.map((dat, index) =>(
              <Body image={dat.image} title={dat.title} about={dat.about} hotel={dat.hotel} tips={dat.tips} name={dat.name}/>
        ))}
        </Carousel>   
        </div>
      
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;