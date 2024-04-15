import axios from 'axios'

export const BaseURL = 'https://selectbot.ru/api/';

const BackendServerAPI = axios.create({
    baseURL: BaseURL,
    headers: {
        'Content-type': 'application/json',
        'Authorization': 'TGMA ' + window.Telegram.WebApp.initData
    }
})

const BackendMockAPI = {
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
                    "winners_count": 3,
                    "message": 'текст',
                    "deadline": {
                        "type": "time",
                        "time": 1712300453 // unixtime
                    }, // ИЛИ {"type": "members", "members": 100} - завершение по числу участников
                    "owner": {
                        "channel_id": -100123,
                        "channel_name": "Test channel name",
                        "channel_link": "https://t.me/test" // или null, если канал приватный
                    },
                    "subscription_status": {
                        "-1001234": true,
                    },
                    "channels": [
                        {
                            "channel_id": -1001234,
                            "channel_name": "Канал 1",
                            "channel_link": "https://t.me/test" // или null, если канал приватный
                        },
                        {
                            "channel_id": -1001235,
                            "channel_name": "Канал 2",
                            "channel_link": "https://t.me/test" // или null, если канал приватный
                        },
                    ],
                    "top_msg_link": "https://t.me/c/123/42", // ссылка на первый пост или null`
                    "participants": [
                        {
                            "name": "Иван Иванов",
                            "id": 1888,
                            "is_winner": true
                        },
                        {
                            "name": "Иван Иванов",
                            "id": 1987656789,
                            "is_winner": true
                        },
                        {
                            "name": "Иван Иванов",
                            "id": 1876789,
                            "is_winner": true
                        },
                        {
                            "name": "Саня Иванов",
                            "id": 18767289,
                            "is_winner": true
                        },
                        {
                            "name": "Саня Иванов",
                            "id": 187672689,
                            "is_winner": true
                        }
                        ,
                        {
                            "name": "Саня Иванов",
                            "id": 187672839,
                            "is_winner": true
                        },
                        {
                            "name": "Саня Иванов",
                            "id": 1876732839,
                            "is_winner": true
                        },
                        {
                            "name": "Саня Иванов",
                            "id": 1876728939,
                            "is_winner": true
                        },
                        {
                            "name": "Саня Иванов",
                            "id": 1187672839,
                            "is_winner": true
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

        if (method == 'getUser') {
            response = {
                data: {
                    "ok": true,
                    "id": 1234,
                    "name": "Саша",
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

            // response = {
            //     data: {
            //         "ok": false,
            //         "error": "CONDITIONS_ARE_NOT_MET"
            //     }
            // }

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
                                "top_msg_link": "https://t.me/c/123/42",
                            },
                            {
                                "channel_name": "Плохие новости",
                                "channel_id": 2,
                                "giveaway_id": "aabbcc",
                                "top_msg_link": "https://t.me/c/123/42",
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
                                "top_msg_link": null,
                                "end_date": 1712300453
                            },
                            {
                                "channel_name": "Хорошие новости",
                                "channel_id": 4,
                                "giveaway_id": "aabbcc",
                                "top_msg_link": "https://t.me/c/123/42",
                                "end_date": 1712300453
                            },
                            {
                                "channel_name": "Плохие новости",
                                "channel_id": 5,
                                "giveaway_id": "aabbcc",
                                "top_msg_link": "https://t.me/c/123/42",
                                "end_date": 1712300453
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

export const BackendAPI = location.href.indexOf('127.0.0.1') > -1 ? BackendMockAPI : BackendServerAPI