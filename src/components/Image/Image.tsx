import * as React from 'react';
import classNames from 'classnames';

interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
    alt: string;
    src: string;
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