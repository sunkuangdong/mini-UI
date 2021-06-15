import React from 'react'

import './importIcons.jsx'
import './icon.scss'

interface IconProps {
    icon: string
    className?: string
}

const Icon: React.FunctionComponent<IconProps> = function (props) {
    return (
        <div>
            <svg className={`mini-icon ${props.className ? props.className : ''}`}>
                <use xlinkHref={`#${props.icon}`} />
            </svg>
        </div>
    )
}

export default Icon