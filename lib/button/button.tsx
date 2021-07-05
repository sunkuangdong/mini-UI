import React, { ButtonHTMLAttributes } from 'react';
import { classes } from '../helpers/classes';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { }

const Button: React.FunctionComponent<Props> = (props) => {
    const { className, children, ...restProps } = props
    return (
        <button className={classes('mini-button', className)} {...restProps}>
            {children}
        </button>
    )
}

export default Button