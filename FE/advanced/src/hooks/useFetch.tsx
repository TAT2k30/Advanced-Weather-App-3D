import React from 'react';

type FetchState<T> = {
    data: T | null;
    loading: boolean;
    error: string | null;
    refretch: () => void;
}

//Cache opject
const cache: Record<string, any> = {};

function useFetch(url, option = {}, refreshKey = null) {
    return (
        <div>

        </div>
    );
}

export default useFetch;