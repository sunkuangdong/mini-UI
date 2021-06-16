import React from 'react'

import './importIcons.jsx'
import './icon.scss'
import classes from './helpers/classes';
interface IconProps extends React.SVGAttributes<SVGElement> {
    icon: string
}

const Icon: React.FunctionComponent<IconProps> = function (props) {
    const { className, ...restProps } = props
    return (
        <div>
            <svg
                className={classes('mini-icon', className)}
                {...restProps}>
                <use xlinkHref={`#${props.icon}`} />
            </svg>
        </div>
    )
}

export default Icon