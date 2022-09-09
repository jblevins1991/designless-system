import * as React from 'react';
import classNames from 'classnames';

import {
  useCreateBlurHandler,
  useCreateClickHandler,
  useCreateFocusHandler
} from '../../hooks';

import { Color, Size } from '../../types/commonProps';
import { AttributeType } from '../../types/AttributeType';

type ButtonOmitProps = 'size';

interface ButtonProps
  extends Omit<AttributeType<HTMLButtonElement>, ButtonOmitProps> {
  /**
   * The color of the button.
   *
   * Default value: 'primary'
   */
  color?: Color | 'success' | 'error';
  /**
   * Makes the button take 100% of the parent's width.
   *
   * Default value: false
   */
  fullWidth?: boolean;
  /**
   * Adds a class to the button based on the size prop's value.
   *
   * Default value: 'medium'
   */
  size?: Size;
  /**
   * The behavior of the button when it is clicked in a form.
   *
   * Default value: 'button'
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * Controls the style of the button.
   *
   * Default value: 'filled'
   */
  variant?: 'filled' | 'outlined' | 'text';
}

/**
 * Styless Button Component
 *
 * The styless button component renders a button element. The button has a few
 * design system props that control how it renders. Color controls the theme
 * color of the button, size controls the size of the button, and variant controls
 * how it is rendered. The default color is 'primary', the default size is 'medium',
 * and the default variant is 'filled'. We also made the default value for prop 'button'.
 *
 * Usage:
 * <Button>
 *   Submit
 * </Button>
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      color = 'primary',
      disabled = false,
      fullWidth = false,
      onBlur,
      onClick,
      onFocus,
      size = 'medium',
      type = 'button',
      variant = 'filled',
      ...props
    },
    ref
  ) => {
    const handleBlur = useCreateBlurHandler<HTMLButtonElement>(
      disabled,
      onBlur
    );
    const handleClick = useCreateClickHandler<HTMLButtonElement>(
      disabled,
      onClick
    );
    const handleFocus = useCreateFocusHandler<HTMLButtonElement>(
      disabled,
      onFocus
    );

    return (
      <button
        {...props}
        className={classNames(
          'button',
          color,
          fullWidth,
          size,
          variant,
          className
        )}
        disabled={disabled}
        onBlur={handleBlur}
        onClick={handleClick}
        onFocus={handleFocus}
        type={type}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export type { ButtonProps };

export default Button;
