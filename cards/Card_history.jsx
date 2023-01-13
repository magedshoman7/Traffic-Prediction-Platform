import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 500 }} >
      <CardMedia
        component="img"
        alt="historical image"
        height="300"
        image={require ("../images/analysis.jpg")}
      />
      <CardContent style={{backgroundColor: "lavender" }}>
        <Typography gutterBottom variant="h5" component="div">
          Historical Analysis
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This section evaluates and anaylzes traffic using various fused datasets. 
        </Typography>
      </CardContent>
      <CardActions style={{backgroundColor: "lavender" }} >
        <Button size="small" href="/history" >Learn More</Button>
      </CardActions>
    </Card>
  );
}
