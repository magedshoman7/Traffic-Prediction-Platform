import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        alt="prediction image"
        height="300"
        image={require ("../images/predict.jpg")}
        
      />
      <CardContent style={{backgroundColor: "lavender" }}>
        <Typography gutterBottom variant="h5" component="div">
          Predictions
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This section predicts the future traffic using a Deep Learning model trained on historical data.  
        </Typography>
      </CardContent>
      <CardActions style={{backgroundColor: "lavender"}}>
        {/* <Button size="small">Share</Button> */}
        <Button size="small" href="/predict">Learn More</Button>
      </CardActions>
    </Card>
  );
}
