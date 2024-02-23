import { useEffect, useState } from "react"
import './scss/app.scss'
import './scss/pages/main.scss'

import IndexPage from "../pages/IndexPage"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MyGiveawaysPage from "../pages/MyGiveawaysPage"
import ProfilePage from "../pages/ProfilePage"
import { getMe } from "../entities/user/api"
import GiveawaysPage from "../pages/GiveawaysPage"

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
            path: "/",
            element: <IndexPage preloader={preloader} user={user} />,
        },
        {
            path: "MyGiveaways",
            element: <MyGiveawaysPage preloader={preloader} />
        },
        {
            path: "profile",
            element: <ProfilePage preloader={preloader} user={user} />
        },
        {
            path: "giveaways",
            element: <GiveawaysPage preloader={preloader} />
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default App