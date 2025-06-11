import { DEVELOPMENT_ENV } from '../../../env/development.env';
import { PostRequest } from './type/PostRequest';
import { PostResponse } from './type/PostResponse';
// Make sure the file exists at this path, or update the path if necessary
import { getCurrentTimestamp } from './../timestamp-service/timestamp-service';

const baseUrl = DEVELOPMENT_ENV.baseUrl;

export const postApiTestSignal = () => {

    // ==========================================
    // POST API Signal Test
    // ==========================================
    return fetch(baseUrl + '/api/test', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: 'Connectivity Test',
            data: null,
            timestamp: getCurrentTimestamp()
        } as PostRequest<null>)
    })
        .then((response: Response) => {
                if (response) {
                    return response;
                } else {
                    throw new Error('[Caught Error #1]' + response);
                }
            },
            (error: any) => {
                throw new Error('[Caught Error #2]' + error);
            }
        )
        .then(async (response: Response) => {
            // Check if response is actually an Error (shouldn't be, but for type safety)
            if (response instanceof Error) {
                const errorResponse: PostResponse<string> = {
                    message: 'Error',
                    data: response.message,
                    timestamp: getCurrentTimestamp()
                };
                return errorResponse;
            }

            // If response does not have a body property
            if (!(response && 'body' in response)) {
                const errorResponse: PostResponse<string> = {
                    message: 'Error',
                    data: '[Response No Body]',
                    timestamp: getCurrentTimestamp()
                };
                return errorResponse;
            }

            const jsonResponse = await response.json();
            return jsonResponse;
        })
        .catch((error: any) => {
            console.log("[Caught Error] #3 " + error);
        });

}