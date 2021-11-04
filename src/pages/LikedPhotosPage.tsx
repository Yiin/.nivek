import { useContext } from 'react';
import PhotosGrid from '../components/PhotosGrid';
import PhotosContext from '../contexts/PhotosContext/context';

const LikedPhotosPage = () => {
    const { likedPhotos } = useContext(PhotosContext);

    return (
        <div>
            <PhotosGrid photos={likedPhotos} />
        </div>
    );
};

export default LikedPhotosPage;
