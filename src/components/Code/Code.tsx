import * as React from 'react';
import classNames from 'classnames';

import {
    getWindow
} from '../../hooks';

interface CodeProps {
    children?: string;
    /**
     * Adds a class to the component.
     */
    className?: string;
    /**
     * The icon used for the copy button.
     */
    copyIcon: React.ReactNode;
    /**
     * Adds an id to the component.
     */
    id: string;
    /**
     * The programming language used within this code block.
     */
    language?: string;
}

/**
 * Styless Code Component
 * 
 * The styless code component renders a span that contains code within it 
 * and a button for copying the code contained within that span.
 * 
 * Usage:
 * <Code
 *   copyIcon={CopyIcon}
 *   id='my-code'
 * >
 *   {codeString}
 * </Code>
 */
const Code: React.FC<CodeProps> = ({
    children,
    className,
    copyIcon,
    id,
    language
}) => {
    const codeRef = React.useRef<HTMLSpanElement>(null);
    const window = getWindow();

    const handleCopyClick = () => {
        const hasRef = !!codeRef.current

        if (hasRef && !!window) {
            const code = codeRef.current.innerHTML;
        
            window.navigator.clipboard.writeText(code);
        }
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
        <span
            className='code-content'
            id={`${id}-code-content`}
            ref={codeRef}
        >
            {children}
        </span>
    </div>
};

Code.displayName = 'Code';

export type {
    CodeProps
};

export default Code;