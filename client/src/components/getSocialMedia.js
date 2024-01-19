import React from 'react';
import Button from '@mui/material/Button';

const SocialMediaLink = ({icon, onClick}) => {
    // if(!url) return null;
    return (
      <Button onClick={onClick}>
        {icon}
      </Button>
    ) 
}

export default SocialMediaLink;

