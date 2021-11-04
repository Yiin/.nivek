import { Dispatch, SetStateAction, useCallback, useState } from 'react';

const useCachedState = <T = any>(key: string, value: T) => {
    const cachedValue = localStorage.getItem(key);

    const [state, setState] = useState<T>(
        cachedValue ? JSON.parse(cachedValue) : value
    );

    const setAndCacheState = useCallback<Dispatch<SetStateAction<T>>>(
        (value: SetStateAction<T>) => {
            localStorage.setItem(key, JSON.stringify(value));
            setState(value);
        },
        []
    );

    return [state, setAndCacheState] as const;
};

export default useCachedState;
