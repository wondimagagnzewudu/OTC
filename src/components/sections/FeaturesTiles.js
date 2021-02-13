import React, {useState} from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import {Divider, Grid, Typography, Button} from '@material-ui/core'
import Image from '../elements/Image';
import one from './../../assets/images/Sof-Omar-2.jpg'
import {Card} from 'antd'
import two from './../../assets/images/1.jpg'
import three from './../../assets/images/2.jpg'
import four from './../../assets/images/3.jpeg'

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

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

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Must Wach Cultural Events',

  };
  const [dat, setDatas] = useState(datas)

  const onNext = (obj)=>{
    setDatas(obj)

  }


  return (
    <section
      {...props}
      className={outerClasses}
      style={{ marginLeft: '3%', marginRight: '3%', marginTop: '2%', marginBottom: '4%'}}

      
    >
      <h1 className="mt-0 mb-2" >Package Offers</h1>
      <Typography style={{color: 'gray', fontSize: 14, backgroundColor: 'white', padding: '1%'}}>Choose Tourist Packages from our most trusted Companies  <a onClick={() =>onNext(datas)} style={{fontSize: 14, color: '#F24141', backgroundColor: 'white', padding: '1%'}}>Rock Climbing </a> <a onClick={() =>onNext(datas2)} style={{fontSize: 14, color: '#F24141', backgroundColor: '#white', padding: '1%'}}>Experience Our Culture </a><a onClick={() =>onNext(datas3)} style={{fontSize: 14, color: '#F24141', backgroundColor: 'white', padding: '1%'}}>Road Trips </a><a onClick={() =>onNext(datas4)} style={{fontSize: 14, color: '#F24141', backgroundColor: 'white', padding: '1%'}}>Adventures</a></Typography>

      <Divider style={{marginBottom: '4%'}}/> 
      <Grid container>
        <Grid item xs={12}>
          <Card 
            hoverable
            style={{width: '100%', borderRadius: 20, padding: 20}}
          >
            <Grid container spacing={1}>
              <Grid item xs={3}><img src={one} style={{height: 350, borderTopLeftRadius: 20, borderBottomLeftRadius: 20}}/></Grid>
              <Grid item xs={6}><img src={two} style={{height: 350, width: '100%'}}/></Grid>
              <Grid item xs={3}><img src={three} style={{height: 350, borderTopRightRadius: 20, borderBottomRightRadius: 20}}/></Grid>
            </Grid>
            <p style={{fontSize: 30, fontWeight: 'bold', color: 'red', paddingTop: '2%', paddingBottom: '1%', paddingLeft: '1%'}}>Officia Sint</p>
            <p style={{color: 'black', padding: '1%'}}>Est eiusmod excepteur incididunt quis officia voluptate irure non velit magna adipisicing deserunt id. Commodo ipsum duis Lorem commodo amet aute. Reprehenderit veniam elit sit anim nulla ea id eiusmod incididunt ea Lorem eiusmod aliquip ad. Anim non exercitation velit ipsum. Ut sint esse do id esse Lorem adipisicing minim adipisicing aliqua enim. Exercitation veniam do non nostrud duis eiusmod.</p>
            <Button style={{backgroundColor: 'red', color: 'white', marginLeft: '1%'}}>Get Package</Button>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;