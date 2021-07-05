import React, { useState } from "react";
import { Form, FormValue } from "./form";
import Validator, { noError } from "./validator";
import Button from "../button/button";

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
        <Button key='1' type="submit">确定</Button>,
        <Button key='2' onClick={() => onCancel}>取消</Button>
    ]

    // 传递 errors ，渲染校验提示错误
    const [errors, setErrors] = useState({})
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const rules = [
            { name: 'username', require: true, message: 'username必须填写' },
            { name: 'password', require: true, message: 'password必须填写' },
            { name: 'username', minLength: 8, message: '最小可输入8个字' },
            { name: 'username', maxLength: 16, message: '最大可输入16个字' },
            { name: 'username', regExp: /^[A-Za-z]$/, message: '请只输入英文' },
        ]
        setErrors(Validator(formData, rules))
        // 如果校验未通过
        if (!noError(errors)) {
            return
        }
    }
    const onCancel = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(1)
    }
    return (
        <Form value={formData}
            fields={fields}
            buttons={buttons}
            errors={errors}
            onSubmit={onSubmit}
            onCancel={onCancel}
            onChange={(newValue) => setFormData(newValue)} />
    )
}

export default FormExample1