import * as React from 'react';
import classNames from 'classnames';

import Input, { InputProps } from '../Input/Input';

type OmittedInputProps = 'type';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PasswordProps extends Omit<InputProps, OmittedInputProps> {}

const Password = React.forwardRef<HTMLInputElement, PasswordProps>(
  (props, ref) => {
    return (
      <Input
        {...props}
        className={classNames('password', props.className)}
        type="password"
        ref={ref}
      />
    );
  }
);

Password.displayName = 'Password';

export type { PasswordProps };

export default Password;
