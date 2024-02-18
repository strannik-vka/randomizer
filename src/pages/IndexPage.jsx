import Preloader from "../shared/ui/Preloader"
import Header from "../widgets/header/ui/Header"
import Lottie from "lottie-react";
import welcomeAnimation from '../app/json/animation/welcome.json'
import { useEffect } from "react";
import { BackendAPI } from "../shared/api/BackendAPI";
import SponsorList from "../widgets/sponsor/ui/SponsorList";

const IndexPage = (props) => {
    useEffect(() => {
        BackendAPI.get('ping').then(response => {
            console.log(response)
        });
    }, [])

    return (<>
        <Preloader show={props.preloader} />

        <div className="wrapper">
            <Header />

            <main className="content">
                <section className="section section-content section-main">
                    <div className="container">
                        <div className="section-main-inner">
                            <div className="section-main-primary">
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="block-animation">
                                            <Lottie animationData={welcomeAnimation} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="section-main-text text-center text-white">
                                            Нажмите на кнопку ниже, <br />
                                            чтобы участвовать в розыгрыше
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <div className="bottom">
                <div className="bottom-inner">
                    <div className="row g-4">
                        <div className="col-12">
                            <button className="btn btn-lg btn-primary btn-gradient w-100">
                                Принять участие
                            </button>
                        </div>
                        <div className="col-12">
                            <div className="devider devider-horizontal"></div>
                        </div>
                        <SponsorList list={[
                            {
                                name: 'VK Music Bot',
                                logo: '/public/assets/images/elements/card/link/demo.png',
                                url: ''
                            }
                        ]} />
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default IndexPage