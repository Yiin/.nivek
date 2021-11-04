import Sidebar from '../sections/Sidebar';

import styles from './Default.module.scss';

interface Props {
    children: React.ReactElement;
}

const DefaultLayout = ({ children }: Props) => (
    <div className={styles.container}>
        <Sidebar className={styles.sidebar} />
        {children}
    </div>
);

export default DefaultLayout;
