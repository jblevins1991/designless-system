import * as React from 'react';

const useCreateClickHandler = <ElementType>(
    disabled: boolean,
    onClick?: (event: React.MouseEvent<ElementType>) => void
) => {
    return (event: React.MouseEvent<ElementType>) => {
        if (disabled) return;
        
        onClick?.(event);
    };
};

export default useCreateClickHandler;
