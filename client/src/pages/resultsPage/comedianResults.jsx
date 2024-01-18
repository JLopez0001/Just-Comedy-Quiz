import React from "react";
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Curtain from "../../features/curtain";

const ResultsPage = () => {

    //TODO: Make sure image is centered in card media
    //TODO: Have results in grid formal hoizontally

    const navigate = useNavigate();


    const topComedians = useSelector((state) => state.topComedians.value);
    // console.log(topComedians)   

    const getImagePath = (name) => {
        if(name === "Ms. Pat") {
            return `../../images/comedianProfileImages/ms-pat.jpg`;
        }
        const imageName = name.toLowerCase().split(' ').join('-');
        return `/images/comedianProfileImages/${imageName}.jpg`;
    }


    const limitText = (text, limit) => {
        if(text.length > limit){
            text = text.substring(0, limit) + '...';
        }
        return text; 
    }

    const handleCardClick = (comedianName, comedianID) => {
        navigate(`/comedians/info/${comedianName.replace(/\s+/g, '-')}/${comedianID}`);
    };



    return (
        <div>
            <Curtain>
                    <h1>YOUR COMEDY MATCHES</h1>
                    <div>
                        {Array.isArray(topComedians) && topComedians.map(comedian => {

                            const imagePath = getImagePath(comedian.name);

                            return (
                                <div>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardActionArea onClick={() => handleCardClick(comedian.name, comedian._id)}>
                                            <CardMedia 
                                                component="img"
                                                height="250"
                                                image={imagePath}
                                                alt={comedian.name}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div" >
                                                    {comedian.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{textAlign:"left"}}>
                                                    {limitText(comedian.bio, 250)}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small" color="primary" href={`/comedians/info/${comedian.name.replace(/\s+/g, '-')}/${comedian._id}`}>See Full Bio</Button>
                                            </CardActions>
                                        </CardActionArea>
                                    </Card>
                                </div>   
                            )
                        })}
                    </div>
            </Curtain>
        </div>
    )
}

export default ResultsPage;