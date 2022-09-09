import * as React from 'react';

const useCreateChangeHandler = <ElementType>(
  disabled: boolean,
  onChange?: (event: React.ChangeEvent<ElementType>) => void
) => {
  return (event: React.ChangeEvent<ElementType>) => {
    if (disabled) return;

    onChange?.(event);
  };
};

export default useCreateChangeHandler;
