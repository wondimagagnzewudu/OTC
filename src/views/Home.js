import React, {useState} from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import TopImageContainer from '../components/otc/modal'
import Cta from '../components/sections/Cta'
import Typography from '@material-ui/core/Typography';
import FeaturesTiles from '../components/sections/FeaturesTiles'
import { Divider } from '@material-ui/core';
import sample from '../assets/sample.mp4'




const Home = () => {
  const [data, setData] = useState({
    video: sample,
    discription: null
  })

  // const datas1 = {
  //   video: animal,
  //   discription: "Discovered and undiscovered caves,Prehistoric physical remains and Poleoanthropological Site like Awash Malka Qunture are among valuable heritage in Oromia"
  // }
  // const datas2 = {
  //   video: food,
  //   discription: "Discovered and undiscovered caves,Prehistoric physical remains and Poleoanthropological Site like Awash Malka Qunture are among valuable heritage in Oromia"
  // }
  // const datas3 = {
  //   video: view,
  //   discription: "Discovered and undiscovered caves,Prehistoric physical remains and Poleoanthropological Site like Awash Malka Qunture are among valuable heritage in Oromia"
  // }
  // const datas4 = {
  //   video: expirance,
  //   discription: "Discovered and undiscovered caves,Prehistoric physical remains and Poleoanthropological Site like Awash Malka Qunture are among valuable heritage in Oromia"
  // }

  const seter =(value) =>{
    setData(value)
    console.log(value)
  }
  

  return (
    <>
      {/* <FloatingActionButtons /> */}
      <TopImageContainer />
      
      <FeaturesSplit invertMobile topDivider imageFill />
      <h1 className="mt-0 mb-2" style={{marginLeft: '3%'}}>Experience</h1>
      <p style={{color: 'gray', fontSize: 14, backgroundColor: 'white', padding: '1%', marginLeft: '3%',}}>Our most Visited sites with their pacakges and Ratings  <a style={{fontSize: 14, color: '#F24141', backgroundColor: 'white', padding: '1%'}} onClick={e=>seter(sample)}>Birds and Wildlife, </a> <a style={{fontSize: 14, color: '#F24141', backgroundColor: '#white', padding: '1%'}} onClick={e=>seter(sample)}>Holiday's and Culture, </a><a  style={{fontSize: 14, color: '#F24141', backgroundColor: 'white', padding: '1%'}} onClick={e=>seter(sample)}>Museums and History, </a><a  style={{fontSize: 14, color: '#F24141', backgroundColor: 'white', padding: '1%'}} onClick={e=>seter(sample)}>Lakes and mountains</a></p>
      <Divider style={{marginLeft: '3%', marginRight: '3%'}} />
      <Hero video={data.video} desired={data.description} />
      <FeaturesTiles /> 
      <Testimonial  />
      <Cta /> 


    </>
  );
}

export default Home;

