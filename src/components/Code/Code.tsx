import * as React from 'react';
import classNames from 'classnames';

import {
    getDocumentFromRef, getWindow
} from '../../hooks';

export interface CodeProps {
    children?: string;
    className?: string;
    copyIcon: React.ReactNode;
    language?: string;
}

const Code: React.FC<CodeProps> = ({
    children,
    className,
    copyIcon,
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
    >
        <div
            className='code-header'
        >
            <span>
                {language}
            </span>

            <button
                onClick={handleCopyClick}
            >
                {copyIcon}
            </button>
        </div>
        <code ref={codeRef}>
            {children}
        </code>
    </div>
};

Code.displayName = 'Code';

export default Code;