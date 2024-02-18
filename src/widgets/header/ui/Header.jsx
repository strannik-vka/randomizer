import React from "react"

const Header = () => {
    return (
        <header className="section section-content section-sticky">
            <div className="container">
                <div className="section-sticky-inner">
                    <div className="sticky-block pointer-events-none">
                        <div className="sticky-block-wrapper">
                            <div className="sticky-block-icon sticky-block-icon-text">
                                🎊
                            </div>
                            <div className="sticky-block-text">
                                Будьте первым участником!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default React.memo(Header)