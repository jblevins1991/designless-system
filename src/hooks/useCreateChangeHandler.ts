import * as React from 'react';

const useCreateChangeHandler = <ElementType>(
    onChange: (event: React.ChangeEvent<ElementType>) => void,
    disabled: boolean
) => {
    return (event: React.ChangeEvent<ElementType>) => {
        if (disabled) return;

        onChange?.(event);
    };
};

export default useCreateChangeHandler;
