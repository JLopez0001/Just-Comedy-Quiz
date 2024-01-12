import React from 'react';
import Link from '@mui/material/Link';

const SocialMediaLink = ({icon, url}) => {
    if(!url) return null;
    return (
        <Link href={url} >
          {icon}
        </Link>
    ) 
}

export default SocialMediaLink;

