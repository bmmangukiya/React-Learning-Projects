import axios from 'axios';

const KEY = 'AIzaSyDz7IrG95j5_ZXuurZkNRxuocASMJse830';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'}
}); 