import React from 'react'

import './importIcons.jsx'
import './icon.scss'
import classes from '../helpers/classes';
interface IconProps extends React.SVGAttributes<SVGElement> {
    icon: string
}

const Icon: React.FunctionComponent<IconProps> = function (
    { className, icon, ...restProps }
) {
    return (
        <svg
            className={classes('mini-icon', className)}
            {...restProps}>
            <use xlinkHref={`#${icon}`} />
        </svg>
    )
}

export default Icon