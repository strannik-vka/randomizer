import React, { useEffect, useState } from "react"
import PageLayout from "../widgets/PageLayout/ui/PageLayout"
import { useParams } from "react-router-dom";
import { BackendAPI } from "../shared/api/BackendAPI"
import '../app/scss/pages/giveaway-about.scss'
import moment from "moment";
import AboutChannelCard from "../widgets/channels/ui/AboutChannelCard";

const GiveawayAboutPage = (props) => {
    const [giveaway, setGiveaway] = useState(null);

    let { giveawayId } = useParams();

    useEffect(() => {
        if (giveawayId) {
            BackendAPI.get('getGiveawayStats', {
                params: {
                    giveaway_id: giveawayId
                }
            }).then(response => {
                setGiveaway(response.data)
            });
        }
    }, [giveawayId])

    return (giveaway?.ok &&
        <PageLayout preloader={props.preloader}>
            <div className="wrapper wrapper-max">
                <main className="content flex-grow-0 pt-0">
                    <section className="section section-content section-main">
                        <div className="container">
                            <div className="section-main-inner">
                                <div className="section-main-primary">
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <div className="section-main-text text-left text-white">
                                                Подробности розыгрыша
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
                        <div className="info-blocks flex-fill">
                            <div className="info-card">
                                <div className="info-card-title">
                                    Пост с розыгрышем
                                </div>
                                <div className="info-card-body">{giveaway.message}</div>
                            </div>

                            <div className="info-card">
                                <div className="info-card-title">
                                    Параметры розыгрыша
                                </div>
                                <div className="info-card-body">
                                    Участников: {giveaway.participants_count}<br />
                                    Призовых мест: {giveaway.winners_count}<br />
                                    {giveaway.deadline?.time && (
                                        <>Дата окончания: {moment(giveaway.deadline.time * 1000).format('MM.DD.YYYY, HH:MM')}</>
                                    )}
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-card-title">
                                    Каналы участники
                                </div>
                                <div className="channels">
                                    {giveaway.channels.map((item) => (
                                        <AboutChannelCard key={item.channel_id} {...item} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bottom-button">
                            <button onClick={() => { window.history.go(-1) }} className="btn btn-primary btn-icon btn-menu-close w-100">
                                <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path id="Union" d="M2 9.95239L7 5L7 9L19 9L19 11L7 11L7 15L2 9.95239Z" fill="currentColor"
                                        fillOpacity="1.000000" fillRule="evenodd" />
                                </svg>
                                <span className="btn-icon-text">Вернуться назад</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default React.memo(GiveawayAboutPage)