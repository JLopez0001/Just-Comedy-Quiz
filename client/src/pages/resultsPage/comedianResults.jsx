import React from "react";
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Curtain from "../../features/curtain";

const ResultsPage = () => {

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
            <Curtain preAnimationMessage="Now Coming To The Stage">
                <Typography 
                    className="title " 
                    variant="h2"
                    sx={{m:'40px auto'}}
                    style={{animation: 'contentAppear 1s ease-out forwards'}}
                >
                    YOUR COMEDY MATCHES
                </Typography>
                    
                <Grid container spacing={4} sx={{justifyContent:'center', padding:"50px"}} >
                    {Array.isArray(topComedians) && topComedians.map(comedian => {

                        const imagePath = getImagePath(comedian.name);

                        return (
                             
                            <Grid 
                                item  
                                key={comedian._id} 
                                style={{animation: `contentAppear 1s ease-out forwards`}}
                            > 
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea 
                                        onClick={() => handleCardClick(comedian.name, comedian._id)} 
                                        sx={{
                                            '&:hover': {
                                                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                                transition: 'background-color 0.3s ease-in-out'
                                            }
                                        }}
                                    >
                                        <CardMedia 
                                            component="img"
                                            height="250"
                                            image={imagePath}
                                            alt={comedian.name}
                                        />
                                        <CardContent>
                                            <Typography variant="h5" component="div" sx={{textAlign:"left"}}>
                                                {comedian.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{textAlign:"left", marginTop:2}}>
                                                {limitText(comedian.bio, 250)}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button 
                                                sx={{m:'0 auto', fontWeight:'bold'}}
                                                size="small" 
                                                color="primary" 
                                                href={`/comedians/info/${comedian.name.replace(/\s+/g, '-')}/${comedian._id}`}
                                            >
                                                See Full Bio
                                            </Button>
                                        </CardActions>
                                    </CardActionArea>
                                </Card>
                        
                            </Grid>
                        )
                    })}
                </Grid>
                <Button 
                    style={{animation: 'contentAppear 1s ease-out forwards'}}
                    variant="contained" 
                    size="large" 
                    onClick={() => navigate('/questions/comedian-quiz')} 
                    sx={{bgcolor:"#fd2eb3",'&:hover': {bgcolor: '#ff57c4'}}}
                > 
                    Retake Quiz 
                </Button>
            </Curtain>
        </div>
    )
}

export default ResultsPage;