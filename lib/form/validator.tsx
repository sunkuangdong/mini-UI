import { FormValue } from "./form"

interface FormRule {
    name: string
    require?: boolean
    message?: string
    minLength?: number
    maxLength?: number
    patten?: RegExp
}
type FormRules = Array<FormRule>
interface FormErrors {
    [key: string]: string[]
}

const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
    const publishFunction = (rule: FormRule) => {
        let errors: any = {}
        if (rule.message && !rule.message.length) {
            errors["text"] = `${rule.name}必须填写`
        } else {
            errors["text"] = rule.message
        }
        return errors
    }
    const addError = (rule: FormRule) => {
        if (errors[rule.name] === undefined) {
            errors[rule.name] = []
        }
        errors[rule.name].push(publishFunction(rule))
    }
    let errors: any = {}
    rules.map(rule => {
        const value = formValue[rule.name]
        if (rule.require && !value) {
            addError(rule)
        }
        if (rule.minLength) {
            if (value.length < rule.minLength) {
                addError(rule)
            }
        }
        if (rule.maxLength && value.length > rule.maxLength) {
            addError(rule)
        }
        if (rule.patten) {
            if (!(rule.patten.test(value))) {
                addError(rule)
            }
        }
    })
    return errors
}
export default Validator