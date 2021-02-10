import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import image3 from '../suura/poto/wonchi6.JPG';
import image4 from '../suura/poto/photo_2020-12-14_13-47-00.jpg';
import image1 from '../suura/poto/54095850_401.jpg';
import image2 from '../suura/poto/photo_2020-12-14_13-48-43.jpg';
import image8 from '../suura/poto/e8d9b02a1af5445aa346e34e66e62de5_8.webp';
import image6 from '../suura/poto/ab.jpg';
import image7 from '../suura/poto/images_1.jpg';
import image5 from '../suura/poto/120724529_113475433853689_985820158183102183_o.jpg';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';



export default class Slide extends Component {
  state = {
    goToSlide: 3,
    offsetRadius: 1040,
    showNavigation: false,
    config: config.wobbly
  };


  slides = [
    {
      key: uuidv4(),
      content: <Card style={{ backgroundColor: 'rgba(249, 250, 245, 0.78)', backgroundColor: 'rgba(249, 250, 245, 0.78)', maxWidth: 345, marginTop: '50%' }}>
        <CardHeader
          style={{ color: '#261501' }}
          title="Oromia culture"
          subheader="September 14, 2016"
        />
        <CardMedia
          style={{ height: 0, paddingTop: '56.25%' }}
          image={image1}
          title="Paella dish"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    },
    {
      key: uuidv4(),
      content: <Card style={{ backgroundColor: 'rgba(249, 250, 245, 0.78)', maxWidth: 345, marginTop: '50%' }}>
        <CardHeader
          style={{ color: '#261501' }}
          title="Rift Valley Lakes  and Bird"
          subheader=""
        />
        <CardMedia
          style={{ height: 0, paddingTop: '56.25%' }}
          image={image2}
          title="Paella dish"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    },
    {
      key: uuidv4(),
      content: <Card style={{ backgroundColor: 'rgba(249, 250, 245, 0.78)', maxWidth: 345, marginTop: '50%' }}>
        <CardHeader
          style={{ color: '#261501' }}
          title="wonchi lake"
          subheader="900 m (3,000 ft) deep,"
        />
        <CardMedia
          style={{ height: 0, paddingTop: '56.25%' }}
          image={image3}
          title="wonchi lake"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    },
    {
      key: uuidv4(),
      content: <Card style={{ backgroundColor: 'rgba(249, 250, 245, 0.78)', maxWidth: 345, marginTop: '50%' }}>
        <CardHeader
          style={{ color: '#261501' }}
          title="Bale mountains"
          subheader="Niyala"
        />
        <CardMedia
          style={{ height: 0, paddingTop: '56.25%' }}
          image={image4}
          title="Paella dish"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    },
    {
      key: uuidv4(),
      content: <Card style={{ backgroundColor: 'rgba(249, 250, 245, 0.78)', maxWidth: 345, marginTop: '50%' }}>
        <CardHeader
          style={{ color: '#261501' }}
          title="Traditional Oromo clothes"
          subheader=""
        />
        <CardMedia
          style={{ height: 0, paddingTop: '56.25%' }}
          image={image5}
          title="Paella dish"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    },
    {
      key: uuidv4(),
      content: <Card style={{ backgroundColor: 'rgba(249, 250, 245, 0.78)', maxWidth: 345, marginTop: '50%' }}>
        <CardHeader
          style={{ color: '#261501' }}
          title="Babile Elephant Sanctuary"
          subheader="Elephant zoo"
        />
        <CardMedia
          style={{ height: 0, paddingTop: '56.25%' }}
          image={image6}
          title="Paella dish"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    },
    {
      key: uuidv4(),
      content: <Card style={{ backgroundColor: 'rgba(249, 250, 245, 0.78)', maxWidth: 345, marginTop: '50%' }}>
        <CardHeader
          style={{ color: '#261501' }}
          title="Sof Omar Caves"
          subheader=""
        />
        <CardMedia
          style={{ height: 0, paddingTop: '56.25%' }}
          image={image7}
          title="Paella dish"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    },
    {
      key: uuidv4(),
      content: <Card style={{ color: 'rgba(65, 86, 11, 0.3)', backgroundColor: 'rgba(249, 250, 245, 0.78)', maxWidth: 345 }}>
        <CardHeader
          style={{ color: '#261501' }}
          title="Irreecha festival"
          subheader=""
        />
        <CardMedia
          style={{ height: 0, paddingTop: '56.25%' }}
          image={image8}
          title="Paella dish"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div style={{ width: "100%", height: "330px", margin: "" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        <div
          style={{
            color: 'rgba(65, 86, 11, 0.3)',
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
          }}
        >

        </div>
      </div>
    );
  }
}