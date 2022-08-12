import * as React from 'react';
import classNames from 'classnames';

import Input, {InputProps} from '../Input/Input';

type OmittedInputProps = 'type';

interface EmailProps extends Omit<InputProps, OmittedInputProps> {}

const Email = React.forwardRef<
    HTMLInputElement,
    EmailProps
>((props, ref) => {
    return <Input
        {...props}
        className={
            classNames(
                'email',
                props.className
            )
        }
        type='email'
        ref={ref}
    />;
});

Email.displayName = 'Email';

export type {
    EmailProps
};

export default Email;