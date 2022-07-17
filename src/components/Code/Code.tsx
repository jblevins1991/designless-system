import * as React from 'react';
import classNames from 'classnames';

import {
    getWindow
} from '../../hooks';

interface CodeProps {
    children?: string;
    className?: string;
    copyIcon: React.ReactNode;
    id: string;
    language?: string;
}

const Code: React.FC<CodeProps> = ({
    children,
    className,
    copyIcon,
    id,
    language
}) => {
    const codeRef = React.useRef(null);
    const window = getWindow();

    const handleCopyClick = () => {
        const code = codeRef.current.innerHTML;
        
        window.navigator.clipboard.writeText(code);
    };

    return <div
        className={
            classNames(
                'code-root',
                className
            )
        }
        id={`${id}-code-root`}
    >
        <div
            className='code-header'
            id={`${id}-code-header`}
        >
            <span>
                {language}
            </span>

            <button
                className='code-copy-button'
                onClick={handleCopyClick}
            >
                {copyIcon}
            </button>
        </div>
        <code
            className='code-content'
            id={`${id}-code-content`}
            ref={codeRef}
        >
            {children}
        </code>
    </div>
};

Code.displayName = 'Code';

export type {
    CodeProps
};

export default Code;