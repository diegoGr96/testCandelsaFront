export interface IToken{
    exp: number,
    iat: number,
    iss: string,
    jti: string,
    nbf: number,
    prv: string,
    sub: number
}

export interface PostProps {
    id: number,
    user_id: number,
    author: string,
    title: string,
    body: string,
    likes: number
}