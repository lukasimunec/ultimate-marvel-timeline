import React from "react";

const Ruler = (props) => {

    var rows = [];

    var tmp = Math.round(props.height / 50);
    var step = Math.round((props.max - props.min) / tmp);

    var lineHeight = props.height/tmp;

    for (var i = 0; i < tmp; i++) {
        rows.push(
            <tr>
                <td><span className="no-wrap" style={{"fontSize": "80%"}}>{Math.round(props.min + i * step)}{props.unit}</span></td>
            </tr>
        );
    }

    return (
        <table style={{"lineHeight": lineHeight-5+"px"}} className="col-2">
            {rows}
        </table>
    )
}

export default Ruler