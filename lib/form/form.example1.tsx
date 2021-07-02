import React, { useState } from "react";
import { Form } from "./form";

const FormExample1: React.FunctionComponent = () => {
    const [formData] = useState({
        username: '',
        password: ''
    })
    const [fields] = useState([
        { name: 'username', label: "用户名", input: { type: "text" } },
        { name: 'password', label: "密码", input: { type: "password" } },
    ])
    const buttons = [
        <button key='1' type="submit">确定</button>,
        <button key='2'>取消</button>
    ]
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(formData);
    }
    return (
        <Form value={formData} fields={fields} buttons={buttons} onSubmit={onSubmit} />
    )
}

export default FormExample1