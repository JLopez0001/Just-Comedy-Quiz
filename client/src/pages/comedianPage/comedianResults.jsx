import React from "react";
import { useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ResultsPage = () => {

    const topComedians = useSelector((state) => state.topComedians.value);
    console.log(topComedians)   

    const getImagePath = (name) => {
        if(name === "Ms. Pat") {
            return `../../images/ms-pat.jpg`;
        }
        const imageName = name.toLowerCase().split(' ').join('-');
        return `../../images/${imageName}.jpg`;
    }


    const limitText = (text, limit) => {
        if(text.length > limit){
            text = text.substring(0, limit) + '...';
        }
        return text; 
    }

    return (
        <div>
            <h1>YOUR COMEDY MATCHES</h1>
            <div>
                {topComedians.map(comedian => {

                    const imagePath = getImagePath(comedian.name);

                    return (
                        <div>
                            <Card sx={{ maxWidth: 345, maxHeitht: 100 }}>
                                <CardActionArea>
                                    <CardMedia 
                                        component="img"
                                        height="250"
                                        image={imagePath}
                                        alt={comedian.name}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {comedian.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {limitText(comedian.bio, 250)}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" href="/comedian-bio">See Full Bio</Button>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </div>   
                    )
                })}
            </div>
        </div>
    )
}

export default ResultsPage;