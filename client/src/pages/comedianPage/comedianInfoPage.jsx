import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Carousel from "../../features/carousel";
import SocialMediaLink from "../../components/GetSocialMedia.jsx";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import LinkIcon from "@mui/icons-material/Link";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Button from "@mui/material/Button";

const ComedianInfo = () => {
  const { comedianId } = useParams();
  const [comedian, setComedian] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getComedian = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/comedians/${comedianId}`
        );
        console.log(response.data);
        setComedian(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getComedian();
  }, [comedianId]);

  const handleResultsClick = () => {
    navigate("/comedians/results");
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="brick-wall-background-image">
      <Paper
        elevation={1}
        sx={{
          width: {
            lg: "950px",
            md: "750px",
            sm: "550px",
          },
          m: "60px auto 30px",
          p: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div>
          <Typography variant="h2" className="title">
            {comedian.name}
          </Typography>

          {comedian.additional_info && comedian.additional_info.website && (
            <Typography variant="h6">
              <Link
                onClick={() => openInNewTab(comedian.additional_info.website)}
                underline="hover"
                sx={{ color: "#ff57c4" }}
              >
                <LinkIcon
                  sx={{
                    transform: "rotate(-45deg)",
                    marginRight: 1,
                    color: "#ff57c4",
                  }}
                />
                {comedian.additional_info.website}
              </Link>
            </Typography>
          )}

          <Typography
            variant="h6"
            component="div"
            sx={{ textAlign: "center", mt: 4, mb: 2, p: 1 }}
          >
            {comedian.bio}
          </Typography>

          <Typography variant="h4" sx={{ mb: 3 }} className="title">
            Specials
          </Typography>

          <Grid container spacing={2}>
            {comedian.specials &&
              comedian.specials.map((special, index) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  key={index}
                  sx={{ textAlign: "center", p: 3 }}
                >
                  <Typography component="ul" variant="h5" sx={{ m: 1 }}>
                    {special}
                  </Typography>
                </Grid>
              ))}
          </Grid>
        </div>

        <Carousel
          podcasts={comedian.podcasts}
          notableWorks={comedian.notable_works}
        />

        <div>
          <Typography variant="h5" sx={{ mt: 8, mb: 3 }} className="title">
            Social Media
          </Typography>

          <Stack
            direction="row"
            spacing={7}
            justifyContent="center"
            sx={{ mb: 4 }}
          >
            {comedian.additional_info?.social_media?.twitter && (
              <SocialMediaLink
                className="social-media-icon"
                icon={
                  <TwitterIcon fontSize="large" sx={{ color: "#ff57c4" }} />
                }
                onClick={() =>
                  openInNewTab(comedian.additional_info.social_media.twitter)
                }
              />
            )}
            {comedian.additional_info?.social_media?.instagram && (
              <SocialMediaLink
                className="social-media-icon"
                icon={
                  <InstagramIcon fontSize="large" sx={{ color: "#ff57c4" }} />
                }
                onClick={() =>
                  openInNewTab(comedian.additional_info.social_media.instagram)
                }
              />
            )}
            {comedian.additional_info?.social_media?.youtube && (
              <SocialMediaLink
                className="social-media-icon"
                icon={
                  <YouTubeIcon fontSize="large" sx={{ color: "#ff57c4" }} />
                }
                onClick={() =>
                  openInNewTab(comedian.additional_info.social_media.youtube)
                }
              />
            )}
          </Stack>
        </div>
        <Button
          onClick={handleResultsClick}
          variant="contained"
          size="large"
          sx={{ bgcolor: "#fd2eb3", "&:hover": { bgcolor: "#ff57c4" } }}
        >
          Go Back To Your Results
        </Button>
      </Paper>
    </div>
  );
};
export default ComedianInfo;
