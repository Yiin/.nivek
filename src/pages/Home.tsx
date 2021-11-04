import { useContext } from 'react';
import PhotosGrid from '../components/PhotosGrid';
import PhotosContext from '../contexts/PhotosContext/context';

import styles from './Home.module.scss';

const HomePage = () => {
    const { photos } = useContext(PhotosContext);

    return (
        <div className={styles.container}>
            <PhotosGrid photos={photos} />
        </div>
    );
};

export default HomePage;
