import React from "react"

const Preloader = (props) => {
    return (
        <div className={'preloader-container ' + (props.show ? 'show' : 'visually-hidden')}>
            <div className="preloader">
                <div className="spinner-grow text-white"></div>
            </div>
        </div>
    )
}

export default React.memo(Preloader)