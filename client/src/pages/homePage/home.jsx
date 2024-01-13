import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const HomePage = () => {

    const theme = createTheme({
        typography: {
          h1: {
            color: "#ffc93c",
            textShadow: "1px 1px 20px black, 0 0 10px orange, 0 0 20px red",
            fontWeight: "bold",
          },
          h5: {
            color: "#ffc93c",
            fontSize: "1.8rem",
            fontWeight: "bold",
            textShadow: "1px 1px 20px black, 0 0 10px orange, 0 0 30px black",
          },
        },
      });


    return (
        <ThemeProvider theme={theme}>
            <div className='main-background-image'>
                <div className='title'>
                    <Typography variant="h1" sx={{m:"60px auto 20px auto"}}>
                        Explore The World of Comedy
                    </Typography>
                </div>
                
                <div className='quiz-section'>
                    <Typography variant="h5" component="p" sx={{m: " 310px auto 30px auto"}}>
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
        </ThemeProvider>
    );
};



export default HomePage;
