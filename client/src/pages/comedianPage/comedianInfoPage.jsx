import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Typography from '@mui/material/Typography';
import Carousel from "../../features/carousel";


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
            <Typography variant="h2" component="div" className="">
                {comedian.name}
            </Typography>
            <Typography variant="h6" component="div" className="">
                {comedian.bio}
            </Typography>

            <Carousel 
                podcasts={comedian.podcasts}
                notableWorks={comedian.notable_works}
            />

            
            <div>
                <Typography variant="h5" component="div" className="">
                    Social Media & Website
                </Typography>
            </div>
        
        </div>
    )
}
export default ComedianInfo;