import * as React from 'react';

const getDocumentFromRef = <ElementType extends HTMLElement>(
  ref: React.MutableRefObject<ElementType>
): Document | undefined => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  });

  return isClient ? ref.current?.ownerDocument : undefined;
};

export default getDocumentFromRef;
