import {Col, Image} from "react-bootstrap";
import React from "react";

function Avatar() {
    return <Col
        xs={12} sm={6} md={4} lg={{offset: 2, span: 3}}>
        <Image
            src="/photo.jpeg"
            rounded
            className='img-fluid '
            alt="Website owner's photo."
        />
    </Col>
}

export default Avatar;