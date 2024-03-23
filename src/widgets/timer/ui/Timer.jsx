import React, { useEffect, useState } from 'react';
import styles from '../../../app/scss/widgets/timer.module.scss';
import declOfNum from '../../../shared/lib/declOdNum';

const Timer = (props) => {
    const [distance, setDistance] = useState((props.time * 1000) - (+new Date()));

    const _second = 1000;
    const _minute = _second * 60;
    const _hour = _minute * 60;
    const _day = _hour * 24;

    const days = Math.floor(distance / _day);
    const hours = Math.floor((distance % _day) / _hour);
    const minutes = Math.floor((distance % _hour) / _minute);
    const seconds = Math.floor((distance % _minute) / _second);

    useEffect(() => {
        if (distance > 0) {
            const interval = setInterval(() => {
                setDistance((props.time * 1000) - (+new Date()))
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [distance]);

    return (distance > 0 &&
        <div className={styles.wrap}>
            <div className={styles.time}>{days + ' ' + declOfNum(days, ['день', 'дня', 'дней'])},<br />{hours}:{minutes}:{seconds}</div>
            <div className={styles.description}>До завершения</div>
        </div>
    )
}

export default React.memo(Timer)