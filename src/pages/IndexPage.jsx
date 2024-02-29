import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { route } from "../entities/route/lib";
import PageLayout from "../widgets/PageLayout/ui/PageLayout";

const IndexPage = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        const telegramParam = window?.Telegram?.WebApp?.initDataUnsafe?.start_param;

        if (telegramParam) {
            if (telegramParam == 'profile') {
                navigate(route("profile"));
            } else if (telegramParam.indexOf('giveaway_') > -1) {
                const paramArr = telegramParam.split('_');

                if (paramArr.length > 1) {
                    navigate(route('giveaway/' + paramArr[1]));
                }
            } else {
                navigate(route('join/' + telegramParam));
            }
        }
    }, [])

    return (
        <PageLayout preloader={props.preloader}></PageLayout>
    )
}

export default React.memo(IndexPage);