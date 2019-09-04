import request from 'axios';
import Environment from './Environment'
class ScholarshipsAPI {

    static searchScholarships = (searchPayload, page=1) => {

        const apiCompletionPromise = request({
            method: 'post',
            data: searchPayload,
            url: `${Environment.apiUrl}/scholarship-preview/?page=${page}`,
        });

        return apiCompletionPromise;
    }
}

export default ScholarshipsAPI;