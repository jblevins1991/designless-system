import * as React from 'react';
import classNames from 'classnames';

import { AttributeType } from '../../types/AttributeType';

interface ImageProps extends AttributeType<HTMLImageElement> {
    /**
     * A string containing a description of the image.
     */
    alt: string;
    /**
     * The height of the image.
     */
    height: number;
    /**
     * The URL for the image.
     */
    src: string;
    /**
     * The width of the image.
     */
    width: number;
}

const Image: React.FC<ImageProps> = ({
    alt,
    className,
    src
}) => {
    return <figure
        className='image-wrapper'
    >
        <img
            alt={alt}
            className={
                classNames(
                    'image',
                    className
                )
            }
            src={src}
        />

        <figcaption className='image-caption'>
            {alt}
        </figcaption>
    </figure>
};

Image.displayName = 'Image';

export type {
    ImageProps
};

export default Image;