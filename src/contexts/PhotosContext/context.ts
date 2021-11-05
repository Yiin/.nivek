import { createContext } from 'react';
import { Photo } from '../../types/interfaces';

export interface Context {
    photos: Photo[];
    likedPhotos: Photo[];
    setPhotos(images: Photo[]): void;
    toggleLike(image: Photo): void;
    isLiked(image: Photo): boolean;
    fetchPhotoInfo(id: string): void;
}

const PhotosContext = createContext<Context>({
    photos: [],
    likedPhotos: [],
    setPhotos() {},
    toggleLike() {},
    isLiked: () => false,
    fetchPhotoInfo() {},
});

export default PhotosContext;
