import React from "react";
import { useEffect } from "react";

import './Stream.css'

const Stream = (props) => {

    return (
        <div className="d-flex align-items-center justify-content-start">
            <div className="col-12">
                {props.imdb}
            </div>
        </div>
    )
}

export default Stream