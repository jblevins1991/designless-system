import * as React from 'react';

interface ErrorProps {
  children?: React.ReactNode;
  id: string;
}

/**
 * Styless Error Component
 *
 * The styless error component renders a span element. The
 * error component is designed mainly for building out custom
 * input elements.
 */
const Error: React.FC<ErrorProps> = ({ children, id }) => {
  return (
    <span aria-live="polite" id={id} role="region">
      {children}
    </span>
  );
};

Error.displayName = 'Error';

export type { ErrorProps };

export default Error;
