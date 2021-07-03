import React, { ReactElement } from "react";

export interface FormValue {
    [key: string]: any
}
interface Props {
    value: FormValue
    fields: Array<{ name: string, label: string, input: { type: string } }>
    buttons?: Array<ReactElement>
    onChange: (value: FormValue) => void
    onSubmit?: React.FormEventHandler<HTMLFormElement>
    onCancel?: React.FormEventHandler<HTMLFormElement>
}
const Form: React.FunctionComponent<Props> = (props) => {
    const { fields, buttons, value } = props
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        props.onSubmit && props.onSubmit(e)
    }
    // const onCancel: React.FormEventHandler<HTMLFormElement> = (e) => {
    //     e.preventDefault()
    //     props.onCancel && props.onCancel(e)
    // }
    const onInputChange = (name: string, value: string) => {
        props.onChange({ ...FormData, [name]: value })
    }
    return (
        <form onSubmit={onSubmit}>
            {fields.map((item, index) =>
                <div key={index}>
                    <span>{item.label}</span>
                    <input type={item.input.type} value={value[item.name]}
                        onChange={(e) => onInputChange(item.name, e.target.value)} />
                </div>
            )}
            <div>
                {buttons}
            </div>
        </form>
    )
}

export { Form }