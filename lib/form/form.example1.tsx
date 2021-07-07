import React, { useState } from "react";
import { Form, FormValue } from "./form";
import Validator, { noError } from "./validator";
import Button from "../button/button";
import "./form.example1.scss"

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
        <Button key='1' type="submit" className="my-button" level="important">确定</Button>,
        <Button key='2' onClick={() => onCancel}>取消</Button>
    ]

    // 传递 errors ，渲染校验提示错误
    const [errors, setErrors] = useState({})
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const rules = [
            { name: 'username', require: true, message: 'username 必须填写' },
            { name: 'password', require: true, message: 'password 必须填写' },
            { name: 'username', minLength: 8, message: '最小可输入 8 个字' },
            { name: 'username', maxLength: 16, message: '最大可输入 16 个字' },
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
        <div>
            <h2>基础用法</h2>
            <Form value={formData}
                fields={fields}
                buttons={buttons}
                errors={errors}
                onSubmit={onSubmit}
                onCancel={onCancel}
                onChange={(newValue) => setFormData(newValue)} />
        </div>
    )
}

export default FormExample1