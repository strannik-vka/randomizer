import axios from 'axios'

export const BaseURL = 'https://iselectbot-mock.difhel.dev/api/';

// export const BackendAPI = axios.create({
//     baseURL: BaseURL,
//     headers: {
//         'Content-type': 'application/json',
//         'Authorization': 'TGMA ' + window.Telegram.WebApp.initData
//     }
// })

export const BackendAPI = {

    response: {
        data: {}
    },

    get: (method) => {
        BackendAPI.response = { data: {} };

        if (method == 'getGiveawayStats') {
            BackendAPI.response = {
                data: {
                    "ok": true,
                    "participants_count": 100,
                    "joined": false,
                    "status": "start", // или "end" если завершен
                    "owner": {
                        "channel_id": -100123,
                        "channel_name": "Test channel name",
                        "channel_link": "https://t.me/test" // или null, если канал приватный
                    },
                    "participants": [
                        {
                            "name": "Иван Иванов",
                            "id": 1888,
                            "is_winner": false
                        },
                        {
                            "name": "Иван Иванов",
                            "id": 1987656789,
                            "is_winner": false
                        },
                        {
                            "name": "Иван Иванов",
                            "id": 1876789,
                            "is_winner": false
                        },
                        {
                            "name": "Иван Иванов",
                            "id": 213,
                            "is_winner": false
                        }
                    ]
                }
            }
        }

        if (method == 'getID') {
            BackendAPI.response = {
                data: {
                    "ok": true,
                    "id": 1234
                }
            }
        }

        if (method == 'join') {
            BackendAPI.response = {
                data: {
                    "ok": true,
                    "id": 1234
                }
            }
        }

        return new Promise(function (resolve, reject) {
            resolve(BackendAPI.response)
        });
    }
}