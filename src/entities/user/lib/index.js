export const getUserStatus = (count) => {
    const statuses = [
        {
            icon: '🥚',
            name: 'Новичок'
        },
        {
            icon: '🐣',
            name: 'Везунчик'
        },
        {
            icon: '🐥',
            name: 'Фартовый'
        },
        {
            icon: '🐓',
            name: 'Профи'
        }
    ]

    if (count >= 10) {
        return statuses[3];
    }

    if (count >= 5) {
        return statuses[2];
    }

    if (count >= 2) {
        return statuses[1]
    }

    return statuses[0]
}