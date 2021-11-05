import { useContext, useEffect, useState } from 'react';
import styles from './PhotosGrid.module.scss';
import { ReactComponent as HeartIcon } from '../assets/icons/heart.svg';
import PhotosContext from '../contexts/PhotosContext/context';
import PhotoModal from './PhotoModal';
import { Photo, Nullable } from '../types/interfaces';

interface Props {
    photos: Photo[];
}

const PhotosGrid = ({ photos }: Props) => {
    const { isLiked } = useContext(PhotosContext);
    const [activePhoto, setActivePhoto] = useState<Nullable<Photo>>(null);

    useEffect(() => {
        if (activePhoto) {
            const photo = photos.find(({ id }) => activePhoto.id === id);
            if (photo) {
                setActivePhoto(photo);
            }
        }
    }, [photos]);

    return (
        <div className={styles.container}>
            {photos.map((photo) => (
                <div key={photo.id} className={styles.imageWrapper}>
                    {isLiked(photo) && (
                        <div className={styles.liked}>
                            <HeartIcon />
                        </div>
                    )}
                    <img
                        className={styles.image}
                        onClick={() => setActivePhoto(photo)}
                        src={photo.urls.small}
                        alt={photo.alt_description || ''}
                    />
                </div>
            ))}

            {activePhoto && (
                <PhotoModal
                    photo={activePhoto}
                    onClose={() => setActivePhoto(null)}
                />
            )}
        </div>
    );
};

export default PhotosGrid;
