import { BackendAPI, BaseURL } from "../../../shared/api/BackendAPI";
import { getUserStatus } from "../lib";

export const getMe = (callback) => {
    BackendAPI.get('getMe').then(response => {
        const userStatus = getUserStatus(response.data?.giveaways_won || 0);

        callback({
            ...{
                status: userStatus,
                image: response.data?.id ? BaseURL + 'getAvatar?id=' + response.data.id : null
            },
            ...response.data
        });
    })
}

export const getUser = (userId, callback) => {
    BackendAPI.get('getUser', {
        params: {
            user_id: userId
        }
    }).then(response => {
        const userStatus = getUserStatus(response.data?.giveaways_won || 0);

        callback({
            ...{
                status: userStatus,
                image: response.data?.id ? BaseURL + 'getAvatar?id=' + response.data.id : null
            },
            ...response.data
        });
    })
}