import * as React from 'react';
import classNames from 'classnames';

import Input, { InputProps } from '../Input/Input';

type OmittedInputProps = 'type';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CheckboxProps extends Omit<InputProps, OmittedInputProps> {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    return (
      <Input
        {...props}
        className={classNames('checkbox', props.className)}
        type="email"
        ref={ref}
      />
    );
  }
);

Checkbox.displayName = 'Checkbox';

export type { CheckboxProps };

export default Checkbox;
