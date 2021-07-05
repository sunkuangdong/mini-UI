import React, { ReactElement } from "react";
import Input from "../input/input";
import { classes } from "../helpers/classes";
import "./form.scss"

export interface FormValue {
    [key: string]: any
}
interface Props {
    className?: string
    value: FormValue
    fields: Array<{ name: string, label: string, input: { type: string } }>
    buttons?: Array<ReactElement>
    errors?: { [name: string]: { [text: string]: string }[] }
    onChange: (value: FormValue) => void
    onSubmit?: React.FormEventHandler<HTMLFormElement>
    onCancel?: React.FormEventHandler<HTMLFormElement>
}
const Form: React.FunctionComponent<Props> = (props) => {
    const { className, fields, buttons, value, errors } = props
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        props.onSubmit && props.onSubmit(e)
    }
    // const onCancel: React.FormEventHandler<HTMLFormElement> = (e) => {
    //     e.preventDefault()
    //     props.onCancel && props.onCancel(e)
    // }
    const onInputChange = (name: string, value: string) => {
        props.onChange({ ...props.value, [name]: value })
    }
    return (
        <form onSubmit={onSubmit} className={classes("mini-form", className)}>
            <table>
                <tbody>
                    {fields.map((item, index) =>
                        <tr className={classes("mini-form-row")} key={index}>
                            <td className="mini-form-td">
                                <span className="mini-form-label">{item.label}</span>
                            </td>
                            <td className="mini-form-td">
                                <Input type={item.input.type} value={value[item.name]}
                                    onChange={(e) => onInputChange(item.name, e.target.value)} />
                                <div className="mini-form-error">
                                    {errors && errors[item.name]}
                                </div>
                            </td>
                        </tr>
                    )}
                    <tr className="mini-form-tr">
                        <td className="mini-form-td"></td>
                        <td className="mini-form-td">
                            {buttons}
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export { Form }