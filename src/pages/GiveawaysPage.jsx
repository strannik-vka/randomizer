import React, { useEffect, useState } from "react"
import PageLayout from "../widgets/PageLayout/ui/PageLayout"
import { BackendAPI } from "../shared/api/BackendAPI";
import GiveawayCard from "../widgets/giveaway/ui/GiveawayCard";

const GiveawaysPage = (props) => {
    const [list, setList] = useState(null);
    const [page, setPage] = useState(null);
    const [isNextPage, setIsNextPage] = useState(false);

    const count = 100;

    const getList = (page) => {
        BackendAPI.get('getAllGiveaways', {
            params: {
                page: page
            }
        })
            .then(response => {
                if (response.data?.giveaways) {
                    if (response.data.giveaways.length >= count) {
                        setIsNextPage(true);
                    } else {
                        setIsNextPage(false);
                    }

                    setList(prevList => {
                        const prevListArr = Array.isArray(prevList) ? prevList : [];

                        return [
                            ...prevListArr,
                            ...response.data.giveaways
                        ]
                    })
                }
            })
    }

    useEffect(() => {
        if (typeof page === 'number') {
            getList(page);
        }
    }, [page])

    useEffect(() => {
        setPage(0)
    }, [])

    return (
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
                                                Все розыгрыши, доступные <br />
                                                на текущий момент
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
                        <div className="draw-list flex-fill">
                            {Array.isArray(list) &&
                                list.map(item => (
                                    <GiveawayCard key={item.channel_id} {...item} />
                                ))
                            }

                            {isNextPage &&
                                <button
                                    type="button"
                                    className="btn btn-lg btn-blue btn-icon btn-more"
                                    onClick={() => setPage(page + 1)}
                                >
                                    <span className="btn-icon-text">Показать ещё</span>
                                    <svg width="18.000000" height="18.000000" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path id="icon"
                                            d="M2.36426 6.06665L3.63672 4.79395L9.18848 10.345L14.7393 4.79395L16.0117 6.06665L9.18848 12.8906L2.36426 6.06665Z"
                                            fill="currentColor" fillOpacity="0.500000" fillRule="evenodd" />
                                    </svg>
                                </button>
                            }
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

export default React.memo(GiveawaysPage)