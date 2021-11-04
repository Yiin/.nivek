import { createContext } from 'react';
import { Image } from '../../types/interfaces';

export interface Context {
    photos: Image[];
    likedPhotos: Image[];
    setPhotos(images: Image[]): void;
    toggleLike(image: Image): void;
    isLiked(image: Image): boolean;
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
