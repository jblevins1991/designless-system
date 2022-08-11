import * as React from 'react';
import classNames from 'classnames';

import { useControlled } from '../../hooks';
import IconButton from '../IconButton/IconButton';
import Typography, { TypographyProps } from '../Typography/Typography';
import { AttributeType } from '../../types/AttributeType';

type OmitDialogProps = 'onChange' | 'onClose';

interface DialogProps extends Omit<AttributeType<HTMLDialogElement>, OmitDialogProps> {
    closeIcon: React.ReactNode;
    defaultOpen?: boolean;
    headerTextVariant?: TypographyProps['variant'];
    onChange?: (open: boolean) => void;
    onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    open?: boolean;
    title: string;
}

const Dialog: React.FC<DialogProps> = ({
    children,
    className,
    closeIcon,
    defaultOpen = false,
    headerTextVariant = 'h2',
    onChange,
    onClose,
    open: openProp,
    title
}) => {
    const [open, setOpenIfUncontrolled] = useControlled({
        controlled: openProp,
        default: defaultOpen,
        name: 'Dialog'
    });

    React.useEffect(() => {
        onChange?.(open || false);
    }, [open]);

    const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
        setOpenIfUncontrolled(false);

        onClose?.(event);
    };

    return <dialog
        className={
            classNames(
                'dialog',
                open ? 'visible' : 'hidden',
                className
            )
        }
        role='dialog'
    >
        <div className='dialog-header'>
            <Typography variant={headerTextVariant}>
                {title}
            </Typography>

            <IconButton
                aria-label='Closes the dialog.'
                name='dialog-close-button'
                onClick={handleClose}
                icon={closeIcon}
            />
        </div>
        <div className='dialog-body'>
            {children}
        </div>
    </dialog>;
};

export type {
    DialogProps
};

export default Dialog;