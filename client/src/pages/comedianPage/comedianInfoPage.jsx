import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Typography from '@mui/material/Typography';
import Carousel from "../../features/carousel";
import SocialMediaLink from "../../components/getSocialMedia";
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import LinkIcon from '@mui/icons-material/Link';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


const ComedianInfo = () => {

    const {comedianId} = useParams();
    const [comedian, setComedian] = useState({});

    
    useEffect(() => {  
        const getComedian = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/comedians/${comedianId}`)
                console.log(response.data)
                setComedian(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getComedian();
    }, [comedianId]);

    return (
        <div>
            <div>
                <Typography variant="h2" component="div" className="">
                    {comedian.name}
                </Typography>

                {comedian.additional_info && comedian.additional_info.website && (
                    <Typography variant="h6" component="div" className="">
                        <Link href={comedian.additional_info.website} underline="hover">
                            <LinkIcon 
                                sx={{ transform: 'rotate(-45deg)', 
                                marginRight: 1 
                                }}
                            /> 
                            {comedian.additional_info.website}
                        </Link>
                        
                    </Typography>
                )}

                <Typography variant="h6" component="div" className="">
                    {comedian.bio}
                </Typography>
            </div>
           
            <Carousel 
                podcasts={comedian.podcasts}
                notableWorks={comedian.notable_works}
            />

            
            <div>
                <Typography variant="h5" component="div" className="">
                    Social Media
                </Typography>
                
                <Stack direction="row" spacing={7}>
                    {comedian.additional_info?.social_media?.twitter && (
                        <SocialMediaLink
                            className="social-media-icon"
                            icon={<TwitterIcon fontSize="large"/>} 
                            url={comedian.additional_info.social_media.twitter} 
                        />
                    )}
                    {comedian.additional_info?.social_media?.instagram && (
                        <SocialMediaLink 
                            className="social-media-icon"
                            icon={<InstagramIcon fontSize="large"/>} 
                            url={comedian.additional_info.social_media.instagram} 
                        />
                    )}
                    {comedian.additional_info?.social_media?.youtube && (
                        <SocialMediaLink 
                            className="social-media-icon"
                            icon={<YouTubeIcon fontSize="large"/>} 
                            url={comedian.additional_info.social_media.youtube} 
                        />
                    )}
                </Stack>

            </div>
        
        </div>
    )
}
export default ComedianInfo;