import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import GiveawayWinnerCard from './GiveawayWinnerCard';

const GiveawayWinnerSlider = (props) => {
    const onSlideChange = (props) => {
        if (props.activeIndex === 0) {
            document.body.style.backgroundImage = "radial-gradient(89% 48% at 50% 8%, rgb(97, 95, 47), rgb(229, 183, 60) 100%)";
        } else if (props.activeIndex === 1) {
            document.body.style.backgroundImage = "radial-gradient(89.00% 48.00% at 50% 8%, rgb(180, 180, 180), rgb(88, 93, 106) 100%)";
        } else if (props.activeIndex === 2) {
            document.body.style.backgroundImage = "radial-gradient(89.00% 48.00% at 50% 8%, rgb(147, 113, 62), rgb(117, 60, 12) 100%)";
        } else {
            document.body.style.backgroundImage = 'radial-gradient(89% 48% at 50% 8%, rgb(var(--primary-rgb)), rgb(var(--primary-light-rgb)) 100%)';
        }
    }

    useEffect(() => {
        onSlideChange({
            activeIndex: 0
        })

        return () => {
            document.body.removeAttribute('style')
        }
    }, [])

    return (
        <Swiper
            onSlideChange={onSlideChange}
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={props.giveaway.winners_count > 1 ? true : false}
        >
            {props.giveaway.winners_count > 0 &&
                <SwiperSlide>
                    <GiveawayWinnerCard
                        giveaway={props.giveaway}
                        index={0}
                    />
                </SwiperSlide>
            }
            {props.giveaway.winners_count > 1 &&
                <SwiperSlide>
                    <GiveawayWinnerCard
                        giveaway={props.giveaway}
                        index={1}
                    />
                </SwiperSlide>
            }
            {props.giveaway.winners_count > 2 &&
                <SwiperSlide>
                    <GiveawayWinnerCard
                        giveaway={props.giveaway}
                        index={2}
                    />
                </SwiperSlide>
            }
        </Swiper>
    )
}

export default React.memo(GiveawayWinnerSlider)