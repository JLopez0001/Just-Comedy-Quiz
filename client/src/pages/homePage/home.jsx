import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="main-background-image">
        <div>
          <Typography
            className="title"
            variant="h1"
            sx={{
              p: 1,
              m: "160px auto 20px auto",
              fontWeight: "bold",
              fontSize: { xs: "3rem", sm: "3.5rem", md: "4rem", lg: "5rem" },
            }}
          >
            Explore The World of Comedy
          </Typography>
        </div>

        <div className="title sub-content">
          <Typography
            variant="h5"
            component="p"
            sx={{
              m: " 200px auto 10px auto",
              p: 3,
              fontSize: { xs: "1rem", sm: "1.6rem", md: "1.7rem", lg: "2rem" },
              fontWeight: "bold",
            }}
          >
            Take Our Quiz and Meet Your New Favorite Comedians!
          </Typography>

          <Button
            variant="contained"
            href="/questions/comedian-quiz"
            size="large"
            startIcon={<TheaterComedyIcon size="large" />}
            sx={{
              bgcolor: "#fd2eb3",
              "&:hover": {
                bgcolor: "#ff57c4",
              },
            }}
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
