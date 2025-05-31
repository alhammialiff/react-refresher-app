export interface PostResponse<K> {

    message: string;
    data: K;
    timestamp: string; // To create a timestamp service

}