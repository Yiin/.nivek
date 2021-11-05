import { useCallback } from 'react';
import { Photo } from '../types/interfaces';

const useUnsplash = () => {
    const request = useCallback(
        ({ endpoint, method = 'GET', signal, query = {} }) => {
            const queryParams = Object.entries(query)
                .map((kv) => kv.join('='))
                .join('&');

            return fetch(
                `https://api.unsplash.com/${endpoint}?${queryParams}`,
                {
                    method,
                    headers: new Headers({
                        Authorization: `Client-ID ${process.env.REACT_APP_AUNSPLASH_ACCESS_KEY}`,
                    }),
                    signal,
                }
            );
        },
        []
    );

    // https://unsplash.com/documentation#list-photos
    const listPhotos = useCallback(async ({ page = 1, perPage = 30 } = {}) => {
        const response = await request({
            endpoint: `photos`,
            query: {
                page,
                per_page: perPage,
            },
        });

        return response.json() as Promise<Photo[]>;
    }, []);

    // https://unsplash.com/documentation#get-a-photo
    const getPhoto = useCallback(async (id: string) => {
        const response = await request({
            endpoint: `photos/${id}`,
        });

        return response.json() as Promise<Photo>;
    }, []);

    return { listPhotos, getPhoto };
};

export default useUnsplash;
