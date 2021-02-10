import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import one from '../suura/poto/Wonchi_Lake_of_Ethiopia.jpg'
import two from '../suura/poto/fox.jpg'
import tree from '../suura/poto/bale-mountains-park-ethiopia-1920x1080.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 1500,
  },
  media: {
    height: 300,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.discription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"> 
          Share
        </Button>
        <Button size="small" color="primary" href={props.more}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
