import { useEffect, useState } from "react"
import './scss/app.scss'
import './scss/pages/main.scss'

import IndexPage from "../pages/IndexPage"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MyGiveawaysPage from "../pages/MyGiveawaysPage"
import ProfilePage from "../pages/ProfilePage"
import { getMe } from "../entities/user/api"
import GiveawaysPage from "../pages/GiveawaysPage"
import appConfig from "./config/app"
import { route } from "../entities/route/lib"

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
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default App