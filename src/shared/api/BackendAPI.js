import axios from 'axios'

export const BaseURL = 'https://iselectbot-mock.difhel.dev/api/';

export const BackendAPI = axios.create({
    baseURL: BaseURL,
    headers: {
        'Content-type': 'application/json',
        'Authorization': 'TGMA ' + window.Telegram.WebApp.initData
    }
})