import { useEffect, useState } from "react"
import './scss/app.scss'
import './scss/pages/main.scss'

import IndexPage from "../pages/IndexPage"

export default () => {
    const [preloader, setPreloader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setPreloader(false)
        }, 3000)
    }, [])

    return (
        <IndexPage preloader={preloader} />
    )
}