import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import "../carousel.css";

const Carousel = ({ podcasts, notableWorks }) => {

    //TODO: have bigger margin between

    const getImagePath = (podcastName) => {
        const imageName = podcastName.toLowerCase().split(' ').join('-');
        return `/images/podLogo/${imageName}.jpg`; 
    };

    const scrollers = document.querySelectorAll(".scroller");

    useEffect(() => {
        const addAnimation = () => {
            scrollers.forEach((scroller) => {
                const innerScroller = scroller.querySelector(".inner-scroller");
                if (innerScroller) {
                    const children = Array.from(innerScroller.children);
                    children.forEach((child) => {
                        const clone = child.cloneNode(true);
                        clone.setAttribute("aria-hidden", "true");
                        innerScroller.appendChild(clone);
                    });
                }

                scroller.setAttribute("data-animated", "true");
            });
        };

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }
    }, [podcasts, notableWorks]);

    return  (
        <div>
            <Typography variant="h5" component="div" className="">
                Podcast Appearances 
            </Typography>
            <div className="scroller" data-speed="slow">
                <div className="inner-scroller">
                    {podcasts && podcasts.map((podcast, index) => (
                        <div key={index}>
                            <img src={getImagePath(podcast)} alt={podcast} />
                        </div>
                    ))}
                </div>
            </div>

            <Typography variant="h5" component="div" className="">
                Notable Works
            </Typography>
            <div className="scroller" data-direction="right" data-speed="slow">
                <div className="inner-scroller">
                    {notableWorks && notableWorks.map((work, index) => (
                        <div key={index}>
                            <Typography component="ul"variant="body1">
                                {work}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel;

