import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image=""
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lorem
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum a rem quidem fugiat tempora repellendus odit voluptatem sint. Deleniti molestias molestiae nam tempora. Excepturi vitae exercitationem provident esse officia harum.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  );
}

