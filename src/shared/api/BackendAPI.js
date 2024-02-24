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
    get: (method, options) => {
        let response = { data: {} };

        console.log('get: ' + method, options)

        if (method == 'getGiveawayStats') {
            response = {
                data: {
                    "ok": true,
                    "participants_count": 100,
                    "joined": false,
                    "status": "start", // или "end" если завершен
                    "winners_count": 5,
                    "deadline": {
                        "type": "time",
                        "time": 1708769428 // unixtime
                    }, // ИЛИ {"type": "members", "members": 100} - завершение по числу участников
                    "owner": {
                        "channel_id": -100123,
                        "channel_name": "Test channel name",
                        "channel_link": "https://t.me/test" // или null, если канал приватный
                    },
                    "top_msg_link": "https://t.me/c/123/42", // ссылка на первый пост или null`
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
                        }
                    ]
                }
            }
        }

        if (method == 'getMe') {
            response = {
                data: {
                    "ok": true,
                    "id": 1234,
                    "name": "Иван",
                    "giveaways_participated": 10,
                    "giveaways_won": 3
                }
            }
        }

        if (method == 'join') {
            response = {
                data: {
                    "ok": true,
                    "id": 1234
                }
            }

            response = {
                data: {
                    "ok": false,
                    "error": "CONDITIONS_ARE_NOT_MET"
                }
            }

            // response = {
            //     data: {
            //         "ok": false,
            //         "error": "IP_BLOCKED"
            //     }
            // }
        }

        if (method == 'getMyGiveaways') {
            if (options.params.active) {
                response = {
                    data: {
                        "ok": true,
                        "giveaways": [
                            {
                                "channel_name": "Хорошие новости",
                                "channel_id": 1,
                                "giveaway_id": "aabbcc",
                                "top_msg_link": "https://t.me/c/123/42"
                            },
                            {
                                "channel_name": "Плохие новости",
                                "channel_id": 2,
                                "giveaway_id": "aabbcc",
                                "top_msg_link": "https://t.me/c/123/42"
                            }
                        ]
                    }
                }
            } else {
                response = {
                    data: {
                        "ok": true,
                        "giveaways": [
                            {
                                "channel_name": "Хорошие новости",
                                "channel_id": 3,
                                "giveaway_id": "aabbcc",
                                "top_msg_link": null
                            },
                            {
                                "channel_name": "Хорошие новости",
                                "channel_id": 4,
                                "giveaway_id": "aabbcc",
                                "top_msg_link": "https://t.me/c/123/42"
                            },
                            {
                                "channel_name": "Плохие новости",
                                "channel_id": 5,
                                "giveaway_id": "aabbcc",
                                "top_msg_link": "https://t.me/c/123/42"
                            }
                        ]
                    }
                }
            }
        }

        if (method == 'getAllGiveaways') {
            response = {
                data: {
                    "ok": true,
                    "giveaways": [
                        {
                            "channel_name": "Хорошие новости",
                            "channel_id": 3,
                            "giveaway_id": "aabbcc",
                            "top_msg_link": null
                        },
                        {
                            "channel_name": "Хорошие новости",
                            "channel_id": 4,
                            "giveaway_id": "aabbcc",
                            "top_msg_link": "https://t.me/c/123/42"
                        },
                        {
                            "channel_name": "Плохие новости",
                            "channel_id": 5,
                            "giveaway_id": "aabbcc",
                            "top_msg_link": "https://t.me/c/123/42"
                        }
                    ]
                }
            }
        }

        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(response)
            }, 2000)
        });
    }
}