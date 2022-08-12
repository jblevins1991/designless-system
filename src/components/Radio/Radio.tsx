import * as React from 'react';
import classNames from 'classnames';

import Input, {InputProps} from '../Input/Input';

type OmittedInputProps = 'type';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RadioProps extends Omit<InputProps, OmittedInputProps> {}

const Radio = React.forwardRef<
    HTMLInputElement,
    RadioProps
>((props, ref) => {
    return <Input
        {...props}
        className={
            classNames(
                'radio',
                props.className
            )
        }
        type='email'
        ref={ref}
    />;
});

Radio.displayName = 'Radio';

export type {
    RadioProps
};

export default Radio;