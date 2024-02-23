import React, { useEffect } from "react"

const Menu = (props) => {
    useEffect(() => {
        if (props.show) {
            document.querySelector('body').classList.add('menu-is-open');
        } else {
            document.querySelector('body').classList.remove('menu-is-open');
        }
    }, [props.show])

    return (
        <div className={'menu ' + (props.show ? 'show' : '')}>
            <div className="menu-wrapper">
                {props.children}
            </div>
            <div className="menu-close" onClick={props.onClose}>
                <button type="button" className="btn btn-primary btn-icon btn-menu-close w-100">
                    <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path id="Union" d="M2 9.95239L7 5L7 9L19 9L19 11L7 11L7 15L2 9.95239Z" fill="currentColor"
                            fillOpacity="1.000000" fillRule="evenodd" />
                    </svg>
                    <span className="btn-icon-text">Вернуться назад</span>
                </button>
            </div>
        </div>
    )
}

export default React.memo(Menu)