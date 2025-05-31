export interface PostRequest<K> {

    message: string;
    data: K;
    timestamp: string; // To create a timestamp service

}