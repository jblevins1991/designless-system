import * as React from 'react';

interface CarouselProps {
  data: any;
  renderItem: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ data, renderItem }) => {
  const memoizedItems = React.useMemo(() => {
    return data.map((dataEl: any, index: number) => {
      const assertedRenderItem = renderItem as React.ReactElement;

      return React.cloneElement(assertedRenderItem, {
        key: index,
        ...dataEl
      });
    });
  }, [data]);

  return <div>{memoizedItems}</div>;
};

Carousel.displayName = 'Carousel';

export type { CarouselProps };

export default Carousel;
