import React, { useEffect, useState } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import IndexPage from "../pages/IndexPage"
import MyGiveawaysPage from "../pages/MyGiveawaysPage"
import ProfilePage from "../pages/ProfilePage"
import { getMe } from "../entities/user/api"
import GiveawaysPage from "../pages/GiveawaysPage"
import { route } from "../entities/route/lib"
import GiveawayPage from "../pages/GiveawayPage"

import './scss/app.scss'
import './scss/pages/main.scss'

const App = () => {
    const [preloader, setPreloader] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (user?.id) {
            setPreloader(false)
        }
    }, [user])

    useEffect(() => {
        getMe(setUser)
    }, [])

    const router = createBrowserRouter([
        {
            path: route(''),
            element: <IndexPage preloader={preloader} user={user} />,
        },
        {
            path: route("MyGiveaways"),
            element: <MyGiveawaysPage preloader={preloader} />
        },
        {
            path: route("profile"),
            element: <ProfilePage preloader={preloader} user={user} />
        },
        {
            path: route("giveaways"),
            element: <GiveawaysPage preloader={preloader} />
        },
        {
            path: route('giveaway/:giveawayId'),
            element: <GiveawayPage preloader={preloader} />
        }
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default React.memo(App)