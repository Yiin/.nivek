import classNames from 'classnames';
import { useContext, useEffect } from 'react';
import { ReactComponent as HeartIcon } from '../assets/icons/heart.svg';
import { ReactComponent as ProfileIcon } from '../assets/icons/profile.svg';
import PhotosContext from '../contexts/PhotosContext/context';
import { Image } from '../types/interfaces';
import Modal, { Props as ModalProps } from './Modal';

import styles from './PhotoModal.module.scss';

interface Props extends Omit<ModalProps, 'children'> {
    photo: Image;
}

const PhotoModal = ({ photo, ...rest }: Props) => {
    const { toggleLike, isLiked, fetchPhotoInfo } = useContext(PhotosContext);

    useEffect(() => {
        fetchPhotoInfo(photo.id);
    }, []);

    return (
        <Modal {...rest}>
            <button
                className={classNames(
                    styles.likeButton,
                    isLiked(photo) && styles.likedButton
                )}
                onClick={() => toggleLike(photo)}
            >
                <HeartIcon /> {isLiked(photo) ? 'Unlike' : 'Like'}
            </button>
            <div className={styles.modalContainer}>
                <div className={styles.imageContainer}>
                    <div
                        className={styles.modalImage}
                        style={{ backgroundImage: `url(${photo.urls.full})` }}
                    />
                    <img
                        className={styles.desktopImage}
                        src={photo.urls.full}
                        alt={photo.alt_description || ''}
                    />
                </div>
                <div className={styles.infoContainer}>
                    {photo.description && (
                        <h1 className={styles.modalTitle}>
                            {photo.description}
                        </h1>
                    )}
                    <div className={styles.authorName}>
                        <div className={styles.profileIcon}>
                            <ProfileIcon width={31} height={19} />
                        </div>
                        {photo.user.name}
                    </div>
                    <div className={styles.cameraDetails}>
                        <div className={styles.cameraDetail}>
                            <div className={styles.detailLabel}>
                                Camera make
                            </div>
                            <div className={styles.detailValue}>
                                {photo.exif?.make || 'Unknown'}
                            </div>
                        </div>
                        <div className={styles.cameraDetail}>
                            <div className={styles.detailLabel}>
                                Camera model
                            </div>
                            <div className={styles.detailValue}>
                                {photo.exif?.model || 'Unknown'}
                            </div>
                        </div>
                        <div className={styles.cameraDetail}>
                            <div className={styles.detailLabel}>
                                Focal length
                            </div>
                            <div className={styles.detailValue}>
                                {photo.exif?.focal_length || 'Unknown'}
                            </div>
                        </div>
                        <div className={styles.cameraDetail}>
                            <div className={styles.detailLabel}>Aperture</div>
                            <div className={styles.detailValue}>
                                {photo.exif?.aperture || 'Unknown'}
                            </div>
                        </div>
                        <div className={styles.cameraDetail}>
                            <div className={styles.detailLabel}>
                                Shutter speed
                            </div>
                            <div className={styles.detailValue}>
                                {photo.exif?.exposure_time || 'Unknown'}
                            </div>
                        </div>
                        <div className={styles.cameraDetail}>
                            <div className={styles.detailLabel}>ISO</div>
                            <div className={styles.detailValue}>
                                {photo.exif?.iso || 'Unknown'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default PhotoModal;
