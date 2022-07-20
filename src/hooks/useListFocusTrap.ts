import * as React from 'react';

const useListFocusTrap = (
    listLength: number,
    returnFocus: () => void,
    escapeKeyCode = 'escape',
    firstKeyCode = 'home',
    lastKeyCode = 'end',
    nextKeyCode = 'ArrowDown',
    previousKeyCode = 'ArrowUp',
) => {
    const [isTrapped, setIsTrapped] = React.useState(false);
    const [focusIndex, setFocusIndex] = React.useState(0);
    const [previousFocusIndex, setPreviousFocusIndex] = React.useState(undefined);

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (!isTrapped) return;
        
        const lastFocusableIndex = listLength - 1;

        setPreviousFocusIndex(focusIndex);

        switch(event.code) {
            case escapeKeyCode:
                setIsTrapped(false);
                returnFocus();
                break;
            case firstKeyCode:
                setFocusIndex(0);
                break;
            case lastKeyCode:
                setFocusIndex(lastFocusableIndex);
                break;
            case nextKeyCode:
                if (focusIndex < lastFocusableIndex) {
                    setFocusIndex(focusIndex + 1);
                } else {
                    setFocusIndex(0);
                }
                break;
            case previousKeyCode:
                if (focusIndex === 0) {
                    setFocusIndex(lastFocusableIndex);
                } else {
                    setFocusIndex(focusIndex - 1);
                }
                break;
        }
    };

    return [
        isTrapped,
        setIsTrapped,
        focusIndex,
        setFocusIndex,
        handleKeyDown,
        previousFocusIndex,
        setPreviousFocusIndex
    ];
};

export default useListFocusTrap;