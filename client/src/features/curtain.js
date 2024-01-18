import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import "../curtain.css";

const Curtain = ({ children, preAnimationMessage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showPreMessage, setShowPreMessage] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowPreMessage(false);
            setIsOpen(true);
            setTimeout(() => {
                setShowContent(true); // Show content after the curtain has opened
            }, 2500);
        }, 2000); // Time for pre-animation message
    }, []);

    return (
        <div id="scene" className={isOpen ? 'expand' : ''}>
            <div id="curtain" className={isOpen ? 'open' : ''}>
                <div className="left"></div>
                <div className="right"></div>
            </div>
            {showPreMessage && (
                <div className="pre-animation-message">
                    <Typography variant="h1" style={{ textAlign: 'center' }}>
                    {preAnimationMessage}
                    </Typography>
                </div>
            )}
            {showContent && children}
        </div>
    );
};

export default Curtain;
