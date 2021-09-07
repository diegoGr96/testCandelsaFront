
type headersType = {
    'Content-Type': string,
    'Access-Control-Allow-Origin': string
    'Authorization'?: string
}

export async function createFetch(url: string, method: string, isAuthRoute: boolean, data = {}) {
    const headers: headersType = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*",
        
    };
    if (isAuthRoute) headers['Authorization'] = 'Bearer ' + localStorage.token;

    if (method === 'GET') {
        const response = await fetch(url);
        return response;
    }

    const response = await fetch(url, {
        method: method,
        // mode: 'same-origin', //! no-cors, *cors, same-origin
        // cache: 'no-cache', //! default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin',
        headers,
        // referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)

    });
    return response;
}