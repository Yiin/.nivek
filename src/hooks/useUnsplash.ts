import { useState, useEffect, useCallback } from 'react';
import { Image } from '../types/interfaces';

const useUnsplash = () => {
    const [photos, setPhotos] = useState<Image[]>([]);

    const request = useCallback(
        ({ endpoint, method = 'GET', signal }) =>
            fetch(`https://api.unsplash.com/${endpoint}`, {
                method,
                headers: new Headers({
                    Authorization: `Client-ID ${process.env.REACT_APP_AUNSPLASH_ACCESS_KEY}`,
                }),
                signal,
            }),
        []
    );

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const run = async () => {
            try {
                const response = await request({
                    endpoint: 'photos?page=1&per_page=30',
                    signal,
                });

                if (response) {
                    const loadedPhotos = await response.json();

                    setPhotos(loadedPhotos);
                }
            } catch {}
        };
        run();

        return () => abortController.abort();
    }, []);

    const getPhoto = useCallback(async (id: string) => {
        const response = await request({
            endpoint: `photos/${id}`,
        });

        return response.json();
    }, []);

    return { photos, getPhoto };
};

export default useUnsplash;
