import { useCallback, useEffect, useMemo } from 'react';
import useCachedState from '../../hooks/useCachedState';
import useUnsplash from '../../hooks/useUnsplash';
import { Photo } from '../../types/interfaces';
import PhotosContext, { Context } from './context';

interface Props {
    children: React.ReactNode;
}

const PhotosContextProvider = ({ children }: Props) => {
    const { listPhotos, getPhoto } = useUnsplash();
    const [photos, setPhotos] = useCachedState<Photo[]>('PHOTOS', []);
    const [likedPhotosIds, setLikedPhotosIds] = useCachedState<string[]>(
        'LIKED_PHOTOS',
        []
    );

    useEffect(() => {
        const run = async () => {
            const loadedPhotos = await listPhotos();

            setPhotos([
                ...loadedPhotos,
                ...photos.filter(
                    (photo) =>
                        !loadedPhotos.some(
                            (loadedPhoto) => photo.id === loadedPhoto.id
                        )
                ),
            ]);
        };
        run();
    }, []);

    const toggleLike = useCallback(
        (photo: Photo) => {
            if (likedPhotosIds.includes(photo.id)) {
                setLikedPhotosIds(
                    likedPhotosIds.filter((id) => id !== photo.id)
                );
            } else {
                setLikedPhotosIds([photo.id, ...likedPhotosIds]);
            }
        },
        [likedPhotosIds]
    );

    const isLiked = useCallback(
        (photo: Photo) => likedPhotosIds.includes(photo.id),
        [likedPhotosIds]
    );

    const fetchPhotoInfo = useCallback(
        async (id: string) => {
            const photoWithMoreData = await getPhoto(id);

            setPhotos(
                photos.map((photo) =>
                    photo.id === id
                        ? {
                              ...photo,
                              ...photoWithMoreData,
                          }
                        : photo
                )
            );
        },
        [photos]
    );

    const value = useMemo<Context>(
        () => ({
            photos: photos,
            likedPhotos: photos.filter((photo) =>
                likedPhotosIds.includes(photo.id)
            ),
            setPhotos,
            toggleLike,
            isLiked,
            fetchPhotoInfo,
        }),
        [photos, likedPhotosIds, toggleLike, isLiked]
    );

    return (
        <PhotosContext.Provider value={value}>
            {children}
        </PhotosContext.Provider>
    );
};

export default PhotosContextProvider;
