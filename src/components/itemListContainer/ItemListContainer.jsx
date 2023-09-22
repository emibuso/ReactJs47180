import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";

const ItemListContainer = () => {
  return (
    <Box sx={{flexGrow: 1, display: "flex", justifyContent: "center"}}>
      <Card sx={{ maxWidth: 800, m: 4 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                LIVING
               <img src="https://www.milideas.net/wp-content/uploads/ideas-decorar-rincon-muerto-casa-10.jpg" alt="" />
            </Typography>
            </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 800, m: 4 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                HABITACIONES
                <img src="https://www.milideas.net/wp-content/uploads/ideas-decorar-rincon-muerto-casa-18.jpg" alt="" />
            </Typography>
            </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 800, m: 4 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               RECIBIDOR
                <img src="https://www.milideas.net/wp-content/uploads/ideas-decorar-rincon-muerto-casa-22.jpg"alt=""/>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 800, m: 4 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                COMEDOR
                <img src="https://www.milideas.net/wp-content/uploads/ideas-decorar-rincon-muerto-casa-21.jpg"alt=""/>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default ItemListContainer;