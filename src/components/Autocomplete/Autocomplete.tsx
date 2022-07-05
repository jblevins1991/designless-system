import * as React from 'react';
import classNames from "classnames";

interface AutocompleteOption {
    label: string;
    id: string;
    name: string;
    value: string;
}

export interface AutocompleteProps extends React.HTMLAttributes<HTMLInputElement> {
    name: string;
    options?: AutocompleteOption[];
    renderItem: React.ReactNode;
}

const Autocomplete = React.forwardRef<
    HTMLInputElement,
    AutocompleteProps
>(({
    className,
    id,
    name,
    options,
    placeholder,
    renderItem
}, ref) => {
    const [activeDescendant, setActiveDescendant] = React.useState<string | null>(null);
    const [isExpanded, setIsExpanded] = React.useState(false);

    const handleOnInputClick = () => {
        setIsExpanded((previousValue: boolean) => !previousValue);
    };

    const handleOnInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const { key } = event;

        const accessKeyCodes = [
            'ArrowDown',
            'ArrowUp',
            'Enter'
        ];

        if (accessKeyCodes.includes(key)) {
            setIsExpanded(true);
        }
    };

    return <>
        <input
            aria-activedescendant={activeDescendant}
            aria-expanded={isExpanded}
            className={
                classNames(
                    'autocomplete-input',
                    className
                )
            }
            id={`${id}-autocomplete-input`}
            name={name}
            onClick={handleOnInputClick}
            onKeyDown={handleOnInputKeyDown}
            placeholder={placeholder}
            readOnly={true}
            role={'combobox'}
            ref={ref}
        />

        <div
            className={
                classNames(
                    'autocomplete-list',
                    {
                        visible: isExpanded,
                        hidden: !isExpanded
                    }
                )
            }
            id={`${id}-autocomplete-list`}
            role={'listbox'}
            tabIndex={-1}
        >
            {
                options && options.map((option: AutocompleteOption, index: number) => {
                    const {
                        label,
                        id,
                        name,
                        value
                    } = option;

                    return React.cloneElement(
                        (renderItem as React.ReactElement),
                        {
                            'aria-current': id === activeDescendant,
                            className: classNames(
                                'autocomplete-item'
                            ),
                            name,
                            onClick: () => {
                                setActiveDescendant(id);
                            },
                            onKeyDown: (event: React.KeyboardEvent<any>) => {
                                const {} = event;
                            },
                            role: 'option',
                            value,
                            ...option
                        },
                        label
                    );
                })
            }
        </div>
    </>
});

Autocomplete.displayName = 'Autocomplete';

export default Autocomplete;
