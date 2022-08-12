import * as React from 'react';

const useCreateFocusHandler = <ElementType>(
  disabled = false,
  onFocus?: (event: React.FocusEvent<ElementType>) => void
) => {
  return (event: React.FocusEvent<ElementType>) => {
    if (disabled) return;

    onFocus?.(event);
  };
};

export default useCreateFocusHandler;
