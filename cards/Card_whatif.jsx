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
        alt="what if image"
        height="300"
        image={require ("../images/Artificial-IntelligenceAI.jpeg")}
      />
      <CardContent style={{backgroundColor: "lavender" }}>
        <Typography gutterBottom variant="h5" component="div">
          What-if Scenarios
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This section evaluates what-if scenarios using various influencing parameters. 
        </Typography>
      </CardContent>
      <CardActions style={{backgroundColor: "lavender" }}>
        {/* <Button size="small">Share</Button> */}
        <Button size="small" href="/whatif">Learn More</Button>
      </CardActions>
    </Card>
  );
}
