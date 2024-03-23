import React from "react"
import Lottie from "lottie-react";
import welcomeAnimation from '../../../app/json/animation/welcome.json'
import successAnimation from '../../../app/json/animation/success.json'
import checkAnimation from '../../../app/json/animation/check.json'
import errorAnimation from '../../../app/json/animation/error.json'
import finishAnimation from '../../../app/json/animation/finish.json'

const AnimationText = (props) => {
    return (
        <>
            <div className="col-12">
                <div className={'block-animation ' + (props.isMeParticipant ? 'is-timer' : '')}>
                    <Lottie
                        animationData={
                            !props.giveawayId ? (
                                errorAnimation
                            ) : props.checking ? (
                                checkAnimation
                            ) : props.onJoined === 'CONDITIONS_ARE_NOT_MET' ? (
                                errorAnimation
                            ) : props.onJoined === 'IP_BLOCKED' ? (
                                successAnimation
                            ) : props.onJoined ? (
                                successAnimation
                            ) : props.giveawayStatus == 'end' ? (
                                finishAnimation
                            ) : props.joined ? (
                                successAnimation
                            ) : (
                                welcomeAnimation
                            )
                        }
                    />
                </div>
            </div>
            <div className="col-12">
                <div className="section-main-text text-center text-white">
                    {!props.giveawayId ? (
                        <>
                            <div className="fs-lg fw-600">Упс!</div>
                            <span className="fw-500">
                                Некорректная ссылка,<br />
                                нет параметра <b>giveawayId</b>
                            </span>
                        </>
                    ) : props.checking ? (
                        <>
                            Проверяем, выполнены ли<br />
                            все условия розыгрыша...
                        </>
                    ) : props.onJoined === 'CONDITIONS_ARE_NOT_MET' ? (
                        <>
                            Подпишитесь на все каналы<br />
                            в условиях конкурса
                        </>
                    ) : props.onJoined === 'IP_BLOCKED' ? (
                        <>
                            <div className="fs-6 fw-600 mb-2">Вы участвуете в розыгрыше</div>
                            <div className="lh-n fs-4 fw-500">Не описывайтесь от каналов до момента<br />завершения розыгрыша!</div>
                        </>
                    ) : props.onJoined ? (
                        <>
                            <div className="fs-6 fw-600 mb-2">Вы участвуете в розыгрыше</div>
                            <div className="lh-n fs-4 fw-500">Не описывайтесь от каналов до момента<br />завершения розыгрыша!</div>
                        </>
                    ) : props.giveawayStatus === 'end' ? (
                        <>
                            <div className="fs-lg fw-600 mb-2">Розыгрыш завершен!</div>
                            <span className="fw-400 pt-1">
                                Вам обязательно повезет в&nbsp;следующий раз, не унывайте :)
                            </span>
                        </>
                    ) : props.joined ? (
                        <>
                            <div className="fs-6 fw-600 mb-2">Вы участвуете в розыгрыше</div>
                            <div className="lh-n fs-4 fw-500">Не описывайтесь от каналов до момента<br />завершения розыгрыша!</div>
                        </>
                    ) : (
                        <>
                            Нажмите на кнопку ниже,<br />
                            чтобы участвовать в розыгрыше
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default React.memo(AnimationText)