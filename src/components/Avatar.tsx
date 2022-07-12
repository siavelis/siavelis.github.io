import {Image} from 'react-bootstrap';
import React from 'react';

function Avatar() {
    return <Image
        alt="Website owner's photo."
        src='/photo.jpeg'
        roundedCircle
        thumbnail
        style={{width: '15vw'}}
    />
}

export default Avatar;