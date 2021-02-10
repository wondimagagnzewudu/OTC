import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import {Card} from 'antd'
import SectionHeader from './partials/SectionHeader';
import { makeStyles } from '@material-ui/core/styles';
import one from '../../assets/images/geda.JPG'
import two from '../../assets/images/chuko.jpg'
import tree from '../../assets/images/abajifar.JPG'
import Image from '../elements/Image';
import { Divider } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid} from '@material-ui/core'
const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Testimonial = ({
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

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: '',
    paragraph: ''
  };
 
  const classes = useStyles();

  const data = [
    {image: one ,title: 'Gada', detail: '— Gada system, an indigenous democratic socio-political system of the Oromo ,it is a traditional system of governance used by the Oromo people in Ethiopia developed from knowledge gained by community experience over generations.', link: ''},
    {image: two ,title: 'Chuko', detail: '— Chuko, barley conserved with butter, is traditional food of Oromia region in Ethiopia it can be stored for up to a year without spoiling.Chuko is easy to prepare in a short time, and is full of protein because of its high butter content.', link: 'https://www.fondazioneslowfood.com/en/ark-of-taste-slow-food/chuko-barley-conserved-with-butter/'},
    {image: tree ,title: 'Aba Jifar', detail: '— Aba Jifar Palace is the most important heritage site in the Oromia Region of Ethiopia.It is a fusion of traditional building technology from south-western Ethiopia and the Indo-Arab architectural style, which was common in settlements around the Indian Ocean.', link: 'https://www.wmf.org/project/aba-jifar-palace#'},

  ]

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div>
      <h1 className="mt-0 mb-1"  style={{paddingLeft: '2%'}}>Sites</h1>
      <p style={{color: 'gray', fontSize: 14, backgroundColor: 'white', paddingLeft: '2%'}}>Internationally recognized monuments and destinations in Oromia <a style={{fontSize: 14, color: '#F24141', backgroundColor: 'white', padding: '1%'}}>Tour packages , </a></p>
      <Grid container>
        {data.map((file, index) =>(
          <Grid item xs={12} md={4} style={{padding: '2%'}}>
            <Card className={classes.root} hoverable>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={file.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {file.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="#F24141">
                  Share
                </Button>
                <Button size="small" color="#F24141">
                  <a href={file.link}>Learn More</a>
                </Button>
              </CardActions>
            </Card>

          </Grid>
        ))}
      </Grid>
      
      </div>
    </section>
  );
} 

     
Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;