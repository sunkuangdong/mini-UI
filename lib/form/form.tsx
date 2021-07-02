import React, { ReactElement } from "react";

interface Props {
    value: { [key: string]: any }
    fields: Array<{ name: string, label: string, input: { type: string } }>
    buttons?: Array<ReactElement>
    onSubmit?: React.FormEventHandler<HTMLFormElement>
    onCancel?: React.FormEventHandler<HTMLFormElement>
}
const Form: React.FunctionComponent<Props> = (props) => {
    const { fields, buttons, value } = props
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        props.onSubmit && props.onSubmit(e)
    }
    return (
        <form onSubmit={onSubmit}>
            {fields.map((item, index) =>
                <div key={index}>
                    <span>{item.label}</span>
                    <input type={item.input.type} value={value[item.name]} />
                </div>
            )}
            <div>
                {buttons}
            </div>
        </form>
    )
}

export { Form }