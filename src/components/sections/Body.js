import React from 'react';
import {Button, Grid} from '@material-ui/core'
import {Rate, Avatar} from 'antd'
import { Map} from '@material-ui/icons'


export default function Body({ image, title, about, hotel, tips, name,  }) {
  return (

    <Grid container spacing={1}>
      <Grid item xs={12} md={4}>
      <div class="scroll-hide" style={{backgroundImage: `url(${image})`, width: '100%', height: 500, backgroundSize: 'cover', paddingTop: '20%', marginBottom: '5%' , borderTopLeftRadius: 100}}>      
        <div style={{paddingLeft: '4%', paddingTop: '2%', paddingBottom: '2%'}}>
          </div>  
      </div>    
      </Grid>
      <Grid item xs={12} md={4}>
      <div class="scroll-hide" >      
        <img src={image} style={{width: '100%', height: 250}}/>
        <img src={hotel} style={{width: '100%', height: 250}}/>  
      </div>      
      </Grid>
      <Grid item xs={12} md={4}>
      <div>
        <Avatar size="large" style={{ marginRight:10, backgroundColor: 'orange'}}><p>1</p></Avatar>
        <Avatar size="large" style={{ marginRight:10, backgroundColor: 'yellowgreen'}}><p>2</p></Avatar>
        <Avatar size="large" style={{ marginRight:10, backgroundColor: 'pink'}}><p>3  </p></Avatar>
      </div>

      <div class="scroll-hide" style={{backgroundColor: '#6610f200', width: '100%', height: '100%', paddingTop: '30%',  }}>      
        <div style={{backgroundColor: '#6610f200', paddingLeft: '4%', paddingTop: '2%', paddingBottom: '2%'}}>
          <p style={{color:'red', fontSize: 20}}>{title}</p>
          <Rate value={3.5}/>
          <p>{about}</p>
          <p style={{color: 'white', padding: '1.3%'}}>Enjoy your weekend at {name} <Button style={{color: 'white', padding:'2%', backgroundColor: 'red'}}>Book Now</Button></p>
       </div>  
      </div>    
      </Grid>   
    </Grid>
  );
} 
