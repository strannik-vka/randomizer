import React, { useEffect, useState } from "react"
import PageLayout from "../widgets/PageLayout/ui/PageLayout"
import IdButton from "../features/giveaway/IdButton/ui/IdButton";
import { Link, useParams } from "react-router-dom";
import { route } from "../entities/route/lib";
import { Tooltip } from "react-tooltip";
import { getUser } from "../entities/user/api";
import AvatarImg from "../features/AvatarImg/ui/AvatarImg";

const ProfilePage = (props) => {
    const [user, setUser] = useState(null);
    const isMe = props.user?.id ? true : false;

    let { userId } = useParams();

    useEffect(() => {
        if (userId) {
            getUser(userId, setUser);
        }
    }, [userId])

    useEffect(() => {
        setUser(props.user)
    }, [props.user])

    return (user?.id &&
        <PageLayout preloader={props.preloader}>
            <div className="wrapper wrapper-max">
                <main className="content flex-grow-0 pt-0">
                    <section className="section section-content section-main">
                        <div className="container">
                            <div className="section-main-inner">
                                <div className="section-main-primary">
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <div className="user-badge user-badge-profile">
                                                <div className="user-badge-wrapper">
                                                    <div className="user-badge-counter"></div>
                                                    <div className="user-badge-avatar">
                                                        <AvatarImg user_id={user.id} />
                                                    </div>
                                                    <div className="user-badge-content">
                                                        <div className="user-badge-name">
                                                            {user.name}
                                                        </div>
                                                        <div className="user-badge-description">
                                                            <div className="user-status user-status-light">
                                                                <div className="user-status-wrapper">
                                                                    <span>{user.status.icon}</span>
                                                                    <span>{user.status.name}</span>
                                                                </div>
                                                            </div>
                                                            <div className="tooltip-icon">
                                                                <svg width="14.400391" height="14.400024"
                                                                    viewBox="0 0 14.4004 14.4" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                    <path id="Subtract"
                                                                        d="M7.2002 14.4C11.1768 14.4 14.4004 11.1765 14.4004 7.20001C14.4004 3.22357 11.1768 0 7.2002 0C3.22363 0 0 3.22357 0 7.20001C0 11.1765 3.22363 14.4 7.2002 14.4ZM7.2002 4.79999C7.8623 4.79999 8.40039 4.26276 8.40039 3.59998C8.40039 2.93726 7.8623 2.40002 7.2002 2.40002C6.53711 2.40002 6 2.93726 6 3.59998C6 4.26276 6.53711 4.79999 7.2002 4.79999ZM8 11.2L8 6.40002L6.40039 6.40002L6.40039 11.2L8 11.2Z"
                                                                        fill="currentColor" fillOpacity="0.750000"
                                                                        fillRule="evenodd" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <div className="bottom bottom-fill bottom-scrolled">
                    <div className="bottom-inner">
                        <div className="profile-fields">
                            <div className="row">
                                <div className="col-auto">
                                    <div className="profile-fields-col profile-fields-min">
                                        <div className="profile-fields-name">
                                            Имя
                                        </div>
                                        <div className="profile-fields-value">
                                            {user.name}
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="profile-fields-col">
                                        <div className="profile-fields-name">
                                            {isMe && 'Мой '}ID
                                        </div>
                                        <div className="profile-fields-value">
                                            <IdButton id={user.id} textAlign="text-left" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="devider devider-horizontal"></div>
                                </div>
                                <div className="col-auto">
                                    <div className="profile-fields-col profile-fields-min">
                                        <div className="profile-fields-name">
                                            {isMe ? (
                                                'Мои победы'
                                            ) : (
                                                'Победы'
                                            )}
                                        </div>
                                        <div className="profile-fields-value">
                                            <span>🏆</span>
                                            <span>{user.giveaways_won}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="profile-fields-col">
                                        <div className="profile-fields-name">
                                            {isMe ? (
                                                'Мои участия в конкурсах'
                                            ) : (
                                                'Участия в конкурсах'
                                            )}
                                        </div>
                                        <div className="profile-fields-value">
                                            {user.giveaways_participated}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="devider devider-horizontal"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-12">
                                <Link to={route('giveaways')} className="btn btn-lg btn-primary btn-gradient w-100">Все розыгрыши</Link>
                            </div>
                            <div className="col-12">
                                <Link to={route('MyGiveaways')} className="btn btn-lg btn-blue btn-colored btn-dimmed w-100">Мои розыгрыши</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Tooltip anchorSelect=".tooltip-icon" place="bottom">
                <div className="text-center">
                    Чем больше побед,<br />
                    тем выше ваш уровень.
                </div>
            </Tooltip>
        </PageLayout>
    )
}

export default React.memo(ProfilePage)