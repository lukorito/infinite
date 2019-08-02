import React from 'react';
import {Image} from "semantic-ui-react";

const ImageContainer = ({photos}) => {
    return (
        <div className="grid">
            {
                photos.map((photo, index) => (
                    <div className="image" key={index}>
                        <Image src={photo.urls.regular} />
                    </div>
                ))
            }
        </div>
    )
};

export default ImageContainer;
