import { ReactComponent as CrossIcon } from '../assets/icons/cross.svg';
import Portal from './Portal';

import styles from './Modal.module.scss';
import { useCallback, useRef } from 'react';

export interface Props {
    isOpen?: boolean;
    onClose(): void;
    children: React.ReactNode;
}

const Modal = ({ isOpen = true, onClose, children }: Props) => {
    const dimRef = useRef(null);

    const handleBackgroundClick = useCallback(
        (e) => {
            if (e.target === dimRef.current) {
                onClose();
            }
        },
        [onClose]
    );

    if (!isOpen) {
        return null;
    }

    return (
        <Portal>
            <div
                ref={dimRef}
                className={styles.dim}
                onClick={handleBackgroundClick}
            >
                <div className={styles.container}>
                    <div className={styles.content}>
                        <button
                            className={styles.closeButton}
                            onClick={onClose}
                        >
                            <CrossIcon />
                        </button>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
