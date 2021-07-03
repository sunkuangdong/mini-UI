import React, { useState } from "react";
import { Form, FormValue } from "./form";
import Validator from "./validator";

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
        const rules = [
            { name: 'username', require: true, message: '1' },
            { name: 'username', minLength: 8, message: '最小可输入8个字' },
            { name: 'username', maxLength: 16, message: '最大可输入16个字' },
        ]
        const error = Validator(formData, rules)
        console.log(error);
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