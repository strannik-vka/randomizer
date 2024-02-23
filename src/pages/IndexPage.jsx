import Preloader from "../shared/ui/Preloader"
import ParticipantsHeader from "../widgets/participant/ui/ParticipantsHeader"
import Lottie from "lottie-react";
import girlAnimation from '../app/json/animation/invalid.json'
import welcomeAnimation from '../app/json/animation/welcome.json'
import successAnimation from '../app/json/animation/success.json'
import checkAnimation from '../app/json/animation/check.json'
import { useCallback, useEffect, useState } from "react";
import { BackendAPI } from "../shared/api/BackendAPI";
import URLParam from "../shared/lib/URLParam";
import Bottom from "../widgets/bottom/ui/Bottom";
import Menu from "../widgets/menu/ui/Menu";
import ParticipantsList from "../widgets/participant/ui/ParticipantsList";
import Hint from "../shared/ui/Hint";

const IndexPage = (props) => {
    const giveaway_id = URLParam('giveaway_id');
    const [joined, setJoined] = useState(false);
    const [participants, setParticipants] = useState(null);
    const [participantsCount, setParticipantsCount] = useState(0);
    const [checking, setChecking] = useState(false);
    const [participantsListShow, setParticipantsListShow] = useState(false);
    const [isOnJoin, setIsOnJoin] = useState(false);
    const [participantId, setParticipantId] = useState(false);

    const getParticipantId = () => {
        BackendAPI.get('getID').then(response => {
            setParticipantId(response.data?.id);
        })
    }

    const getGiveawayStats = useCallback(() => {
        BackendAPI.get('getGiveawayStats', {
            giveaway_id: giveaway_id
        }).then(response => {
            setJoined(response.data?.joined);
            setParticipants(response.data?.participants);
            setParticipantsCount(response.data?.participants_count);

            setChecking(false);
        }).catch(() => {
            setChecking(false);
        })
    }, [giveaway_id]);

    const onJoin = useCallback(() => {
        setIsOnJoin(true);
    }, []);

    const onParticipantsListShow = useCallback(() => {
        setParticipantsListShow(true);
    }, [])

    const onParticipantsListHide = useCallback(() => {
        setParticipantsListShow(false);
    }, [])

    // useEffects
    useEffect(() => {
        if (isOnJoin) {
            setChecking(true);
        }
    }, [isOnJoin])

    useEffect(() => {
        if (checking) {
            getGiveawayStats()
            getParticipantId()
        }
    }, [checking])

    useEffect(() => {
        if (giveaway_id) {
            setChecking(true);
        } else {
            alert('нет параметра giveaway_id');
        }
    }, [])

    return (<>
        <Preloader show={props.preloader} />

        <div className="wrapper">
            <ParticipantsHeader
                count={participantsCount}
                list={participants}
                onShow={onParticipantsListShow}
            />

            <main className="content">
                <section className="section section-content section-main">
                    <div className="container">
                        <div className="section-main-inner">
                            <div className="section-main-primary">
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="block-animation">
                                            <Lottie
                                                animationData={
                                                    checking ? checkAnimation : (
                                                        isOnJoin ? successAnimation : (
                                                            joined ? girlAnimation : welcomeAnimation
                                                        )
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="section-main-text text-center text-white">
                                            {checking ?
                                                <>
                                                    Проверяем, выполнены ли<br />
                                                    все условия розыгрыша...
                                                </>
                                                : (isOnJoin ?
                                                    <>
                                                        <div className="fs-lg fw-600">Поздравляем!</div>
                                                        <span className="fw-500">Вы участвуете в розыгрыше</span>
                                                    </>
                                                    : (joined ?
                                                        <>
                                                            <div className="fs-lg fw-600">Упс!</div>
                                                            <span className="fw-500">Вы уже участвуете в розыгрыше, <br />от канала <a href="" target="_blank">VK Music Bot</a></span>
                                                        </>
                                                        :
                                                        <>
                                                            Нажмите на кнопку ниже,<br />
                                                            чтобы участвовать в розыгрыше
                                                        </>
                                                    )
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Bottom
                giveaway_id={giveaway_id}
                onJoin={onJoin}
                joined={joined}
                checking={checking}
                participantId={participantId}
            />

            <Menu
                show={participantsListShow}
                onClose={onParticipantsListHide}
            >
                <ParticipantsList
                    list={participants}
                />
            </Menu>

            <Hint />
        </div>
    </>)
}

export default IndexPage