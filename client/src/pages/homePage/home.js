import Button from '@mui/material/Button';


const HomePage = () => {
    return (
        <div>
        <h1>Explore The World of Comedy</h1>
        <p>Take Our Quiz and Meet Your New Favorite Comedians!</p>
        <Button variant="contained" color="primary" href="/questions/comedian-quiz">
            Start Quiz
        </Button>
        </div>
    );
};

export default HomePage;
