import { useEffect, useRef, useState } from "react";


export const useFetch = (url:string, method: string, params?: string[]) => {

    const isMounted = useRef(true);

    const [state, setState] = useState({
        data: [],
        loading: true,
        error: null,
    });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {

        setState({ data: [], loading: true, error: null });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if (isMounted.current) {
                    setState({
                        data,
                        loading: false,
                        error: null,
                    });
                }

            });



    }, [url]);


    return state;

}
