import React, { useEffect, useState } from "react";
import "../curtain.css";

const Curtain = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsOpen(true);
            setTimeout(() => {
                setShowContent(true); // Show content after the curtain has opened
            }, 3000);
        }, 2000); // Initial delay before starting the curtain opening
    }, []);

    return (
        <div id="scene" className={isOpen ? 'expand' : ''}>
            <div id="curtain" className={isOpen ? 'open' : ''}>
                <div className="left"></div>
                <div className="right"></div>
            </div>
            {showContent && children}
        </div>
    );
};

export default Curtain;
