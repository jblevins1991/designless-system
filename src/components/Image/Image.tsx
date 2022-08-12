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

/**
 * Styless Image Component
 *
 * The styless image component renders a figure, figcaption, and img element. The alt
 * prop for the Image component is used as the alt attribute value on the img element
 * and as the child for the figcaption element. The width and the height is provided
 * for core web vitals performance.
 *
 * Usage:
 * <Image alt='some alt text' src='https://my-img-url' />
 */
const Image: React.FC<ImageProps> = ({ alt, className, src }) => {
  return (
    <figure className="image-wrapper">
      <img alt={alt} className={classNames('image', className)} src={src} />

      <figcaption className="image-caption">{alt}</figcaption>
    </figure>
  );
};

Image.displayName = 'Image';

export type { ImageProps };

export default Image;
