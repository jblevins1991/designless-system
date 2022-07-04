import * as React from 'react';
import classNames from 'classnames';

export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
    alt: string;
    src: string;
}

const Image: React.FC<ImageProps> = ({
    alt,
    className,
    src
}) => {
    return <figure>
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

        <figcaption>
            {alt}
        </figcaption>
    </figure>
};

Image.displayName = 'Image';

export default Image;