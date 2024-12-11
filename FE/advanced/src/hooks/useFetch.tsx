import React, { useEffect, useState } from 'react';

type FetchState<T> = {
    data: T | null;
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

//Cache opject
const cache: Record<string, any> = {};

function useFetch<T>(
    url: string,
    options: RequestInit = {},
    refreshKey: any = null
): FetchState<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            //Check cache
            if (cache[url]) {
                setData(cache[url])
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(url, options);
                if (!response.ok) throw new Error(`Error : ${response.statusText}`);

                const result = await response.json();
                if (isMounted) {
                    cache[url] = result;
                    setData(result);
                }
            } catch (error: any) {
                if (isMounted) setError(error.message);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchData();
        return () => {
            isMounted = false;
        };
    }, [url, options, refreshKey]);

    //Cleanup function 
    const refetch = () => {
        cache[url] = null;
        setData(null);
    }

    return { data, loading, error, refetch };
}

export default useFetch;