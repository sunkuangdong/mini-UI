import { FormValue } from "./form"

interface FormRule {
    name: string
    require?: boolean
    message?: string
    minLength?: number
    maxLength?: number
}
type FormRules = Array<FormRule>
interface FormErrors {
    [key: string]: string[]
}

const publishFunction = (rule: FormRule) => {
    let errors: any = {}
    if (rule.message && !rule.message.length) {
        errors[rule.name] = false
        errors["text"] = `${rule.name}必须填写`
    } else {
        errors[rule.name] = false
        errors["text"] = rule.message
    }
    return errors
}

const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
    // formValue :
    // {
    //     username: '',
    //     password: ''
    // }
    let errors: any = {}
    rules.map(rule => {
        const value = formValue[rule.name]
        if (rule.require && !value) {
            errors = {...publishFunction(rule)}
        }
        if (rule.minLength && !value) {
            if (value.length < rule.minLength) {
                errors = {...publishFunction(rule)}
            }
        }
    })
    return errors
}
export default Validator