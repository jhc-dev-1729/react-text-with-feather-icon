import React from "react";
import Icon, { IconOptions } from "../Icon/Icon";
import "./style.css"

export interface TextWithIconProps {
    iconOptions: IconOptions | undefined,
    text: string,
}

export default function TextWithFeatherIcon(props: TextWithIconProps){

    const defaultIconOptions:IconOptions = {"name": 'feather', "width": 20, "height": 20, "strokeWidth": 2, "strokeLinecap": "round", "strokeLinejoin": "round", "stroke": 'black'}

    return(
        <div className="text-with-feather-icon-container">
            <Icon {... props.iconOptions ? props.iconOptions : defaultIconOptions} />
            <div className="vertical-line"></div>
            <div className="text-with-feather-icon-text">{props.text}</div>
        </div>
    )
}