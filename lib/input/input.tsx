import React, { InputHTMLAttributes } from "react";
import { classes } from "../helpers/classes";
import "./input.scss"

interface Props extends InputHTMLAttributes<HTMLInputElement> { }

const Input: React.FunctionComponent<Props> = (props) => {
    const { className, ...restProps } = props
    return (
        <input className={classes('mini-input', className)} {...restProps} />
    )
}

export default Input