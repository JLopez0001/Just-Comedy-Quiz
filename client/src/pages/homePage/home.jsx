import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';


const HomePage = () => {


    return (
        <div className='main-background-image'>
            <div>
                <Typography 
                    className='title'
                    variant="h1" 
                    sx={{
                        m:"60px auto 20px auto",
                        fontWeight: "bold",
                    }}>
                    Explore The World of Comedy
                </Typography>
            </div>
            
            <div className='title'>
                <Typography 
                    variant="h5" 
                    component="p" 
                    sx={{
                        m: " 310px auto 30px auto",
                        fontSize: "1.8rem",
                        fontWeight: "bold",
                    }}>
                    Take Our Quiz and Meet Your New Favorite Comedians!
                </Typography>
                
                <Button 
                    variant="contained" 
                    href="/questions/comedian-quiz"
                    size="large"
                    startIcon={<TheaterComedyIcon size="large"/>}
                    sx={{
                        bgcolor:"#fd2eb3",
                        '&:hover': {
                            bgcolor: '#ff57c4'
                        }, 
                    }}
                >
                    Start Quiz
                </Button>
            </div>

            </div>
    );
};



export default HomePage;
