import React from "react";
import Preloader from "../../../shared/ui/Preloader";
import Hint from "../../../shared/ui/Hint";

const PageLayout = (props) => {
    return (
        <>
            <Preloader show={props.preloader} />

            {props.children}

            <Hint />
        </>
    )
}

export default React.memo(PageLayout);