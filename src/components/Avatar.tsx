import {Image} from 'react-bootstrap';
import React from 'react';

function Avatar() {
    return <Image
        alt="Panagiotis Siavelis"
        src="/photo.jpeg"
        roundedCircle
        thumbnail
        style={{width: '200px', height: '200px', objectFit: 'cover'}}
    />;
}

export default Avatar;
