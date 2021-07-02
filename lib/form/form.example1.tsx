import React, { useState } from "react";
import { Form, FormValue } from "./form";

const FormExample1: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: '',
        password: ''
    })
    const [fields] = useState([
        { name: 'username', label: "用户名", input: { type: "text" } },
        { name: 'password', label: "密码", input: { type: "password" } },
    ])
    const buttons = [
        <button key='1' type="submit">确定</button>,
        <button key='2' onClick={() => onCancel}>取消</button>
    ]
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(formData);
    }
    const onCancel = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(1)
    }
    return (
        <Form value={formData}
            fields={fields}
            buttons={buttons}
            onSubmit={onSubmit}
            onCancel={onCancel}
            onChange={(newValue) => setFormData(newValue)} />
    )
}

export default FormExample1